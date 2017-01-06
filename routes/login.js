var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', function(req, res, next) {
  if(!req.body.userName) {
    var err = 'Incorrect username or password. ';
    res.render('login', {error: err});
  } else {
    var pool = req.app.get('pool');
    pool.query('select * from account where user_id = ? and password_md5 = md5(?)', [req.body.userName, 'password'] , function(err, results, fields) {
      if (err) {
        console.error('system down. :', err);
        throw err;
      }

      if(results.length) {
        console.log('results : ', results);
        req.session.user = { name: req.body.userName};
        res.redirect('../');
      } else {
        var err = 'Incorrect username or password. ';
        res.render('login', {error: err});
      }
    });
  }
});

function queryCallback (req, res, callback) {


}

module.exports = router;
