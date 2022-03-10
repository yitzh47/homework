var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'RECIPES' });
});

router.get('/allRecipes', function (req, res, next) {
  connection.query('SELECT r.name, c.id AS category FROM recipes r LEFT JOIN categories c ON r.category_id = c.id', (error, results, fields) => {
    if (error) {
      res.statusCode = 500;
      return res.send(error.message);
    }

    console.log(results);
    res.status(200);
    res.json(results);
  });
});

router.get('/:name', function (req, res, next) {
  connection.query('SELECT *  FROM recipes r WHERE name = ?', [req.params.name], (error, results, fields) => {
    if (error) {
      res.statusCode = 500;
      return res.send(error.message);
    }

    console.log(results);
    res.status(200);
    res.json(results);
  });
});

router.post('/addRecipe', function (req, res, next) {
  connection.query('INSERT INTO recipes (name, description, instructions, category_id) VALUES (?,?,?,?)', [req.body.name, req.body.description, req.body.instructions, req.body.category_id], (error, results, fields) => {
    if (error) {
      res.statusCode = 500;
      return res.send(error.message);
    }

    console.log(results);
    res.status(201);
    res.json(results);
  });
});

router.put('/editRecipe/:id', function (req, res, next) {
  connection.query('UPDATE recipes SET name = ?, description = ?, instructions = ?, category_id = ? WHERE id = ?',
    [req.body.name, req.body.description, req.body.instructions, req.body.category_id, req.params.id],
    (error, results, fields) => {
      if (error) {
        res.statusCode = 500;
        return res.send(error.message);
      } console.log(results);
      res.status(204);
    });
});

router.delete('/deleteRecipe/:id', function (req, res, next) {
  connection.query('DELETE FROM recipes WHERE id = ?',
    [req.params.id],
    (error, results, fields) => {
      if (error) {
        res.statusCode = 500;
        return res.send(error.message);
      } console.log(results);
      res.status(204);
    });
});

module.exports = router;
