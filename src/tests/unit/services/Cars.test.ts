import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarsModel from '../../../models/CarsModel';
import CarsService from '../../../services/CarsService';
import { carMock, allCarsMock, carMockWithId } from '../../mocks/carMock';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';

describe('Car Service', () => {
  const carModel = new CarsModel();
  const carService = new CarsService(carModel);

  before(async () => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
    sinon.stub(carModel, 'read').resolves(allCarsMock);
    sinon.stub(carModel, 'readOne')
      .onCall(0).resolves(carMockWithId)
      .onCall(1).resolves(null)
      .onCall(2).resolves(carMockWithId)
  });

  after(() => {
    sinon.restore();
  })

  describe('Create', () => {
    it('success', async () => {
      const newCar = await carService.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    })

    it('Failure', async () => {
      try {
        await carService.create({} as any);
      } catch (error) {
        expect(error).to.be.instanceOf(ZodError);
      }
    })
  })

  describe('Read', () => {
    it('success', async () => {
      const cars = await carService.read();
      expect(cars).to.be.deep.equal(allCarsMock);
    })
  })

  describe('ReadOne', () => {
		it('Success', async () => {
			const car = await carService.readOne(carMockWithId._id);

			expect(car).to.be.deep.equal(carMockWithId);
		});

		it('Failure', async () => {
			try {
				await carService.readOne(carMockWithId._id);
			} catch (error:any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
			}
		});
	});

});