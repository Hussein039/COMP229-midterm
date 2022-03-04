/*
  index.js
  Hussein Hussein
  301017560
  Movie List
*/
exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};
