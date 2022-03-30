var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const MongoClient = require("mongodb").MongoClient;


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
let blogs;
app.use(async (req, res, next) => {
  const connect = await client.connect();
  const database = client.db('blogSite');
  blogs = database.collection('blogs');
  next();
})

app.get('/', async function (req, res, next) {
  let bloggg = await blogs.find().toArray();
  console.log(bloggg);
  res.render('index', { title: 'Express', blogs: bloggg });
});



//app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// const MongoClient = require("mongodb").MongoClient;
// const uri =
//   'mongodb://localhost:27017';
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     await client.connect();
//     const database = client.db('blogSite');
//     const blogs = database.collection('blogs');
//     const query = { author: 'Wakey Trump', title: 'Kamalas Speech' };
//     const deleted = await blogs.deleteOne(query);
//     console.log(deleted);

//     let allBlogs = await blogs.find();
//     while (await allBlogs.hasNext()) {
//       let p = await allBlogs.next();
//       console.log(p);
//     }
//     //let allPresidents = await presidents.find().toArray();
//     //allPresidents.forEach(p => console.log(p));
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

module.exports = app;
