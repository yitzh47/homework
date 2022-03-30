
//sessions not saved correctly
const express = require('express');
const app = express();
const session = require('express-session');
var logger = require('morgan');
var path = require('path');
const bcrypt = require('bcrypt');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://<username>:<password>@cluster0.ewygv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(uri);

app.use(require('cors')({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(session({
  secret: 'secret',
  /*cookie: {
    maxAge: 20000,
    secure: true
  }*/
  resave: false,
  saveUninitialized: false
}));


//sessions not saved correctly
app.use((req, res, next) => {
  res.locals.user = req.session?.user;
  next();
});

function sessionOnlyMiddleware(req, res, next) {
  console.log('session only middleware');
  
  if (req.session.user || res.locals.user) {
    console.log("sessionOnlyMiddleware", req.session);
    next();
  } else {
    res.status(401)
    next();
  }
}

let posts;
let passwordsCollection;
app.use(async (req, res, next) => {
  let connection = await client.connect();
  let database = connection.db('blog2');
  posts = database.collection('posts');
  passwordsCollection = database.collection('passwords');

  next();
});



app.route('/register')
  
  .get((req, res, next) => {
    res.render('layout', { partials: { content: 'register' } });
  })
  .post(async (req, res, next) => {

    if (!req.body.username || !req.body.password) {
      return next(new Error('Username and password are required'));
    }

    bcrypt.hash(req.body.password, 10, async (err, hash) => {
      if (err) {
        return next(err);
      }
      const newRegisterer = {
        username: req.body.username,
        hash: hash
      }

      await passwordsCollection.insertOne(newRegisterer);
      res.status(204)
    });
  });


app.post('/login', async (req, res, next) => {
  let queryForUser = await passwordsCollection.findOne({ username: req.body.username });

  bcrypt.compare(req.body.password, queryForUser.hash, (err, result) => {
    if (err) {
      return next(err);
    }
    if (!result) {
      return next(new Error('Invalid user name or password'));
    }
    req.session.user = req.body.username;
    res.locals.user = req.session.user;
    console.log('req.session.user', req.session.user);
    res.status(204);
    res.end();
   // res.redirect('/');
  });
});

app.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.send();
});

app.route('/posts')
  .get(async (req, res, next) => {
    console.log("session", req.session, "locals", res.locals);
    const thePosts = await posts.find().toArray();
    res.send(thePosts);
  })
  .post(sessionOnlyMiddleware, async (req, res, next) => {
    const newPost = {
      title: req.body.title,
      body: req.body.body,
      author: req.session.user,
      date: new Date()
    };

    await posts.insertOne(newPost);
    //res.status(204);
    res.send(newPost);
  });

app.post('/posts/:id/comments', /*sessionOnlyMiddleware,*/ async (req, res, next) => {
  const newComment = {
    body: req.body.body,
    author: 'Kamala',
    date: new Date()
  };

  const result = await posts.updateOne({ _id: Mongo.ObjectId(req.params.id) }, { $push: { comments: newComment } });

  if (!result.modifiedCount) {
    return res.status(404).send('Not found');
  }

  res.status(201)
    //.location(`/posts/id/${newComment._id}`)
    .send(newComment);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const e = new Error('Not Found');
  e.status = 404;
  next(e);
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

app.listen(8080);
