var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var pool = req.app.get('pool');
  pool.query('select * from account', function(err, results, fields) {
    if(err) {
      console.log('err info : ', err);
      return;
    }
    console.log('selected : ', results);
  });
  res.send('respond with a resource');
});

module.exports = router;
