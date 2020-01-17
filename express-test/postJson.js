// app.js
var express = require('express');
var app = express();

//express에서 기본적으로 post 기능을 제공하지 않으므로
//bodyParser라는 미들웨어 사용
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

app.locals.pretty = true;
app.use(express.static('static'))

app.set('view engine', 'jade');
app.set('views', './views');

app.get('/login', (req, res) => {
  res.render('login.jade');
})

//GET처리
app.get('/login_check', (req, res) => {
    var id = req.query.id;
    var pw = req.query.pw;
    res.send(`{id : ${id}}, {pw : ${pw}}`);
})

//POST 처리
app.post('/login_check', (req, res) => {
    var id = req.body.id;
    var pw = req.body.pw;
    res.send(`{id : ${id}}, {pw : ${pw}}`);
})
app.listen(3000, () => console.log('connected, 3000'));
