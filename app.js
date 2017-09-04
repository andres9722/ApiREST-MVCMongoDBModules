'use strict';

const express = require('express'),
    bodyParser = require('body-parser'),
    pug = require('pug'),
    restFul = require('express-method-override')('_method'),
    morgan = require('morgan'),
    favicon = require('serve-favicon')(`${__dirname}/public/favicon.png`),
    viewDir = `${__dirname}/views`,
    routes = require('./routes/community-router.js'),
    publicDir = express.static(`${__dirname}/public`),
    port = (process.env.port || 3000);

let app = express();

app
    .set('views', viewDir)
    .set('view engine', 'pug')
    .set('port', port)

    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}))
    .use(publicDir)
    .use(morgan('dev'))
    .use(favicon)
    .use(restFul)
    .use(routes);

module.exports = app;