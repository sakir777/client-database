import express from 'express';
import mongoose from 'mongoose'; 

import clientRoute from './routes/client.route';
import addressRoute from './routes/address.route';
import cardRoute from './routes/card.route';

const app = express();

app.use(express.json());

app.use('/client', clientRoute);
app.use('/address', addressRoute);
app.use('/card', cardRoute);

mongoose.connect('mongodb+srv://sakir:sakir123@clientdatabase.bm4pkfg.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('mongodb started.');
  }).catch(() => {
    console.log('mongodb connection failed.')
  })

app.listen(9090, function () {
  console.log('Example app listening on port 9090!');
});git init