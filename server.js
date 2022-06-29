//importing packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');
const port = 3000;

//declaring static path
const staticPath = path.join(__dirname, 'public');

//Initalizing express.js
const app = express();

//middlewares
app.use('/', express.static(__dirname));

/**
 * routes
 * home route
*/
app.get('/', (req, res) => {
	res.sendFile(path.join(staticPath, 'index.html'));
});

//signup route
app.get('/signup', (req, res) => {
	res.sendFile(path.join(staticPath, 'signup.html'));
});

//404 route
app.get('/404', (req, res) => {
	res.sendFile(path.join(staticPath, '404.html'));
});

app.use((req, res) => {
	res.redirect('/404');
});

app.listen(port, () => {
	console.log(`Server is listening at http: //localhost:port`);
});
