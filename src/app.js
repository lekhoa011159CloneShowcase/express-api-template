import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';

import indexRouter from './routes/index';

const app = express();

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use('/v1', indexRouter);

module.exports = app;
