import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import path from 'path';
import mysql from 'mysql';
import config from './config';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.dev.config';

const app = express(),
	  compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
	hot: true,
	publicPath: webpackConfig.output.publicPath,
	noInfo: true
}));
app.use(webpackHotMiddleware(compiler));
// app.use(morgan('combined'));
// app.use(session({
// 	resave: true,
// 	saveUninitialized: true,
// 	secret: config.secret
// }));
console.log(__dirname);
app.get('*', function(req, res){
	res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(config.port, error => {
	if (error) throw error;
});
