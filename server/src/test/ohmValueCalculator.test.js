import * as chai from 'chai'
import { OhmValueCalculator } from '../models/ohmValueCalculator'
import * as database from '../utils/database.js'
import mongoose from 'mongoose'
const expect = chai.expect

describe('OhmValueCalculator', () => {
  let calculator

  before(async () => {
    await mongoose.connect('mongodb://localhost:27017/electronicColorsCode')
    await database.initializeDatabase()
    calculator = new OhmValueCalculator()
  })

  it('should calculate ohm value correctly', (done) => {
    const ohmValue = calculator.calculateOhmValue(
      'Brown',
      'Black',
      'Red',
      'Gold'
    )
    expect(ohmValue).to.equal(1000)
    done()
  })

  it('should calculate ohm value correctly for Green, Blue, Orange, Silver', (done) => {
    const ohmValue = calculator.calculateOhmValue(
      'Green',
      'Blue',
      'Orange',
      'Silver'
    )
    expect(ohmValue).to.equal(56000)
    done()
  })

  it('should calculate ohm value correctly for Yellow, Violet, Yellow, Gold', (done) => {
    const ohmValue = calculator.calculateOhmValue(
      'Yellow',
      'Violet',
      'Yellow',
      'Gold'
    )
    expect(ohmValue).to.equal(470000)
    done()
  })

  it('should calculate ohm value correctly for invalid color', (done) => {
    expect(() =>
      calculator.calculateOhmValue('Pink', 'Black', 'Red', 'Gold')
    ).to.throw(Error, 'Invalid color')
    done()
  })

  it('should calculate ohm value correctly with missing multiplier', (done) => {
    expect(() =>
      calculator.calculateOhmValue('Brown', 'Black', 'Unknown', 'Gold')
    ).to.throw()
    done()
  })

  it('should calculate ohm value correctly with missing tolerance', () => {
    const ohmValue = calculator.calculateOhmValue(
      'Brown',
      'Black',
      'Red',
      'Unknown'
    )
    expect(ohmValue).to.be.greaterThan(0)
  })
})
