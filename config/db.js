var mysql = require('mysql');

const db = {
  host:'localhost',
  port: '3306',
  user:'root',
  password:'seungjin1031!',
  database: 'travel'
};

module.exports = {
    init: function () {
        return mysql.createConnection(db);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql 연결 에러 : ' + err);
            else console.log('mysql 연결 성공');
        });
    }
};