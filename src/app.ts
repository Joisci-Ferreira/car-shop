import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/error';

import CarsRoute from './routers/CarsRouter';

const app = express();
app.use(express.json());

app.use('/cars', CarsRoute);
app.use(errorHandler);

export default app;
