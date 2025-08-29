const express = require('express');
const app = express();
var dbConfig = require(__dirname + '/config/db.js');
var conn = dbConfig.init();

dbConfig.connect(conn);

app.engine('html', require('ejs').renderFile); // html 용

app.set('views', './paris/views')
app.set('view engine', 'ejs');
app.use(express.static('paris'));

app.get('/', function (req, res) {
    res.send('메인');
});

app.get('/List', function (req, res) {
    var sql = "SELECT * FROM place";
    conn.query(sql, function (err, rows, fields) {
        if(err) console.log('query is not excuted. select fail...\n' + err);
        res.render('index', {list : rows});
    });
});

app.get('/about', function (req, res) {
    var sql = "SELECT * FROM place";
    conn.query(sql, function (err, rows, fields) {
        if(err) console.log('query is not excuted. select fail...\n' + err);
        res.render('about', {list : rows});
    });
});

app.listen(8080, () => console.log('포트 8080번에서 서버 시작'));