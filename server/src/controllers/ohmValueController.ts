import { Request, Response } from 'express'
import {
  ColorInfo,
  ColorMultipliers,
  ColorTolerances,
  OhmValueCalculator
} from '../models/ohmValueCalculator.ts'


const ohmValueCalculator = new OhmValueCalculator()

interface CalculateOhmValueRequest
  extends Request<
    {},
    {},
    {
      bandA: keyof ColorInfo
      bandB: keyof ColorInfo
      bandC: keyof ColorMultipliers
      bandD: keyof ColorTolerances
    }
  > {}

export const calculateOhmValue = (
  req: CalculateOhmValueRequest,
  res: Response
) => {
  const { bandA, bandB, bandC, bandD } = req.body
  const bandAValue = bandA
  const bandBValue = bandB
  const bandCValue = bandC
  const bandDValue = bandD

  console.log(bandAValue, bandBValue, bandCValue, bandDValue)

  const result = ohmValueCalculator.calculateOhmValue(
    bandAValue,
    bandBValue,
    bandCValue,
    bandDValue
  )
  res.json({ result })
}
