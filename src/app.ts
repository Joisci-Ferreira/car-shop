import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/error';

import CarsRoute from './routers/CarsRouter';
import MotorcycleRoute from './routers/MotorcycleRouter';

const app = express();
app.use(express.json());

app.use('/cars', CarsRoute);
app.use('/motorcycles', MotorcycleRoute);
app.use(errorHandler);

export default app;
