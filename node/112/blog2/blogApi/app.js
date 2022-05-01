const express = require('express');
const app = express();
const session = require('express-session');
const bcrypt = require('bcrypt');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

app.use(require('cors')({
  origin: 'http://localhost:3000',
  credentials: true
}));

const Mongo  = require('mongodb');
const MongoClient = Mongo.MongoClient;
const uri =
  'mongodb+srv://<usernme>:<password>@cluster0.ewygv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(uri);

let posts;
let passwordsCollection;
app.use(async (req, res, next) => {
  await client.connect();
  let database = client.db('blog2');
  posts = database.collection('posts');
  passwordsCollection = database.collection('passwords');
  next();
});



function sessionOnlyMiddleware(req, res, next) {
  console.log(req.session);
  
  if (req.session.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}

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
    return res.sendStatus(200);
  });
});

app.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.end();
  
});

app.route('/posts')
  .get(async (req, res, next) => {
    console.log("session", req.session);
    
    const skipAmount = +req.query?.skipAmount ? +req.query.skipAmount : 0;
    const limitAmount = +req.query?.limitAmount ? +req.query?.limitAmount : 5;
    console.log("skipAmount", skipAmount);
    const thePosts = await posts.find().skip(skipAmount).limit(limitAmount).toArray();
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

app.post('/posts/:id/comments', sessionOnlyMiddleware, async (req, res, next) => {
  const newComment = {
    body: req.body.body,
    author: req.session.user,
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
