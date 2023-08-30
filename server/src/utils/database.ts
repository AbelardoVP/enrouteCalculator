import MultiplierBand, {
  MultiplierBandDocument
} from '../models/multiplierBandModel.ts'
import ToleranceBand, {
  ToleranceBandDocument
} from '../models/toleranceBandModel.ts'

async function initializeDatabase() {
  const isDatabaseInitialized = await checkDatabaseInitialization()

  // folder seeds to create initial data
  if (!isDatabaseInitialized) {
    const multiplierBandsData = [
      { color: 'Black', value: 1 },
      { color: 'Brown', value: 10 },
      { color: 'Red', value: 100 },
      { color: 'Orange', value: 1000 },
      { color: 'Yellow', value: 10000 },
      { color: 'Green', value: 100000 },
      { color: 'Blue', value: 1000000 },
      { color: 'Violet', value: 10000000 },
      { color: 'Gray', value: 100000000 },
      { color: 'White', value: 1000000000 }
    ]

    const toleranceBandsData = [
      { color: 'Silver', value: 10 },
      { color: 'Gold', value: 5 },
      { color: 'Brown', value: 1 },
      { color: 'Red', value: 2 },
      { color: 'Green', value: 0.5 },
      { color: 'Blue', value: 0.25 },
      { color: 'Violet', value: 0.1 },
      { color: 'Gray', value: 0.05 },
      { color: 'None', value: 20 }
    ]

    await MultiplierBand.create(multiplierBandsData)
    await ToleranceBand.create(toleranceBandsData)

    console.log('Database initialized with initial data')
  } else {
    console.log('Database already initialized')
  }
}

async function checkDatabaseInitialization() {
  const multiplierBandsCount = await MultiplierBand.countDocuments()
  const toleranceBandsCount = await ToleranceBand.countDocuments()

  return multiplierBandsCount > 0 && toleranceBandsCount > 0
}

async function getMultiplierBands(): Promise<MultiplierBandDocument[]> {
  try {
    const multiplierBands = await MultiplierBand.find({})
    return multiplierBands
  } catch (error) {
    console.error('Error fetching multiplier bands:', error)
    throw error
  }
}

async function getToleranceBands(): Promise<ToleranceBandDocument[]> {
  try {
    const toleranceBands = await ToleranceBand.find({})
    return toleranceBands
  } catch (error) {
    console.error('Error fetching tolerance bands:', error)
    throw error
  }
}

export { getMultiplierBands, getToleranceBands, initializeDatabase }
