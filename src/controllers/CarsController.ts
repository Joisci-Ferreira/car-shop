import { Response, Request } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

class CarsController {
  constructor(private _service: IService<ICar>) {}

  public async create(req: Request, res: Response) {
    const { model, year, color, buyValue, seatsQty, doorsQty } = req.body;
    const car = { model, year, color, buyValue, seatsQty, doorsQty };
    const results = await this._service.create(car);
    return res.status(201).json(results);
  }

  public async read(_req: Request, res: Response) {
    const results = await this._service.read();
    return res.status(200).json(results);
  }

  public async readOne(req: Request, res: Response<ICar | null>) {
    const results = await this._service.readOne(req.params.id);
    return res.status(200).json(results);
  }

  public async update(req: Request, res: Response<ICar | null>) {
    const results = await this._service.update(req.params.id, req.body);
    return res.status(200).json(results);
  }

  public async delete(req: Request, res: Response<ICar | null>) {
    const results = await this._service.delete(req.params.id);
    return res.status(204).json(results);
  }
}

export default CarsController;
