import * as express from 'express'
import { calculateOhmValue } from '../controllers/ohmValueController.ts' // Importa la función específica
import * as database from '../utils/database.ts' // Importamos todas las exportaciones de database

const router = express.Router()

router.get('/multiplier-bands', async (req, res) => {
  const multiplierBands = await database.getMultiplierBands()
  res.json({ multiplierBands })
})

router.get('/tolerance-bands', async (req, res) => {
  const toleranceBands = await database.getToleranceBands()
  res.json({ toleranceBands })
})

router.post('/calculate', calculateOhmValue)

export default router // Cambio de exportación
