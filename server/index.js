import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import path from 'path';
import mysql from 'mysql';
import config from './config';

const app = express();

// const mysqlConnection = mysql.createConnection(config['db']);

// mysqlConnection.connect();

// mysqlConnection.query('SELECT * from users', function(err, rows, fields) {
// 	if (err) throw err;
// 	console.log(rows);
// });

app.use(express.static(path.join(__dirname, '../client/dist')));

 
app.get('*', function(req, res){
	console.log(req);
	res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});


app.listen(config.port, function(error) {
	if (error) throw error;
});
