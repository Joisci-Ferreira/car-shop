import { Router } from 'express';
import CarsController from '../controllers/CarsController';
import CarsModel from '../models/CarsModel';
import CarsService from '../services/CarsService';

const CarsRoute = Router();

const carsModel = new CarsModel();
const carsService = new CarsService(carsModel);
const carsController = new CarsController(carsService);

CarsRoute.post('/', (req, res) => carsController.create(req, res));
CarsRoute.get('/', (req, res) => carsController.read(req, res));
CarsRoute.get('/:id', (req, res) => carsController.readOne(req, res));
CarsRoute.put('/:id', (req, res) => carsController.update(req, res));
CarsRoute.delete('/:id', (req, res) => carsController.delete(req, res));

export default CarsRoute;
