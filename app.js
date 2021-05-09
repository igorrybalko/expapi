require('dotenv').config();

const express = require('express'),
    morgan = require('morgan'),
    helmet = require('helmet'),
    mongoSanitize = require('express-mongo-sanitize');

const app = express(),
    port = process.env.PORT || 3001;

app.use(helmet());
app.use(morgan(process.env.LOG_LEVEL));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(mongoSanitize());

app.listen(port, () => {
	console.log('server started on http://localhost:' + port);
})