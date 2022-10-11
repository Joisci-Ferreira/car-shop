import { Response, Request } from 'express';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import { IService } from '../interfaces/IService';

class MotorcycleController {
  constructor(private _service: IService<IMotorcycle>) {}

  public async create(req: Request, res: Response) {
    const { model, year, color, buyValue, category, engineCapacity } = req.body;
    const motorcycle = { model, year, color, buyValue, category, engineCapacity };
    const results = await this._service.create(motorcycle);
    return res.status(201).json(results);
  }

  public async read(_req: Request, res: Response) {
    const results = await this._service.read();
    return res.status(200).json(results);
  }

  public async readOne(req: Request, res: Response<IMotorcycle | null>) {
    const results = await this._service.readOne(req.params.id);
    return res.status(200).json(results);
  }

  public async update(req: Request, res: Response<IMotorcycle | null>) {
    const results = await this._service.update(req.params.id, req.body);
    return res.status(200).json(results);
  }

  public async delete(req: Request, res: Response<IMotorcycle | null>) {
    const results = await this._service.delete(req.params.id);
    return res.status(204).json(results);
  }
}

export default MotorcycleController;
