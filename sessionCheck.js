

var sessionCheck = function(req, res, next) {
  console.log("session check : ", req.session);
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
};

module.exports = sessionCheck;
