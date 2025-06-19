const config = require('config');
const helmet = require('helmet');
const morgan = require('morgan');
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');

const Joi = require('joi');
const express = require('express');
const logger = require('./middleware/logger');
const authenticator = require('./middleware/authenticating');
const courses = require('./routes/courses');
const home = require('./routes/home');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(helmet());
app.use('/api/courses', courses);
app.use('/home', home);

// console.log('Application Name:' + config.get('name'));
// console.log('Mail Server:' + config.get('mail.host'));
// console.log('Mail password:' + config.get('mail.password'));

if (app.get('env') === 'development'){
    app.use(morgan('tiny'));
    startupDebugger('Morgan enabled..')
}

dbDebugger('DB is working');

// console.log(`NODE_ENV = ${process.env.NODE_ENV}`);
// console.log(`NODE_ENV = ${app.get('env')}`);
// app.use(logger);
// app.use(authenticator);

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});