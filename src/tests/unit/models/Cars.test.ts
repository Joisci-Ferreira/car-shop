import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { Model } from 'mongoose';
import CarsModel from '../../../models/CarsModel';
import { carMock, allCarsMock, carMockWithId } from '../../mocks/carMock';

describe('Car Model', () => {
  const carModel = new CarsModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves(allCarsMock);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Create car', () => {
    it('successfully created', async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    })
  })

  describe('list cars', () => {
    it('successfully listed', async () => {
      const cars = await carModel.read();
      expect(cars).to.be.deep.equal(allCarsMock);
    })
  })

  describe('list car', () => {
    it('successfully listed', async () => {
      const car = await carModel.readOne('60f1f9f9b9b1b8b1b8b1b8b1');
      expect(car).to.be.deep.equal(carMockWithId);
    })
  })

});
