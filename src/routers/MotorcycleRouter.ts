import { Router } from 'express';
import MotorcycleController from '../controllers/MotorcycleController';
import MotorcycleModel from '../models/MotorcycleModel';
import MotorcycleService from '../services/MotorcycleService';

const MotorcycleRoute = Router();

const motorcycleModel = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycleModel);
const motorcycleController = new MotorcycleController(motorcycleService);

MotorcycleRoute.post('/', (req, res) => motorcycleController.create(req, res));
MotorcycleRoute.get('/', (req, res) => motorcycleController.read(req, res));
MotorcycleRoute.get('/:id', (req, res) => motorcycleController.readOne(req, res));
MotorcycleRoute.put('/:id', (req, res) => motorcycleController.update(req, res));
MotorcycleRoute.delete('/:id', (req, res) => motorcycleController.delete(req, res));

export default MotorcycleRoute;