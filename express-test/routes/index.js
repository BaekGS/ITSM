router.post('/login', function(req, res, next){
  console.log(req.body);

  var id = req.body.user_id;
  var pwd = req.body.user_pwd;

  res.redirect('/');
});
