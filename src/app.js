const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');


app.use(cors()); 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.json({ type: 'application/json' }));
app.use(morgan('dev'));

const index = require('./routes/index');
const productsRoutes = require('./routes/products.routes');


app.use(index);
app.use('/', productsRoutes);

module.exports = app;