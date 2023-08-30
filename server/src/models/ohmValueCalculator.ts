import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

interface ColorInfo {
  value: string
  figure: number
}

interface ColorMultipliers {
  [key: string]: number
}

interface ColorTolerances {
  [key: string]: number
}

interface IOhmValueCalculator {
  calculateOhmValue(
    bandAColor: keyof ColorInfo,
    bandBColor: keyof ColorInfo,
    bandCColor: keyof ColorMultipliers,
    bandDColor: keyof ColorTolerances
  ): number
}

class OhmValueCalculator implements IOhmValueCalculator {
  private colorToValue: { [key: string]: number } = {}
  private multipliers: ColorMultipliers = {}
  private tolerances: ColorTolerances = {}

  constructor() {
    this.loadColorValuesFromFile()
  }

  private loadColorValuesFromFile(): void {
    const __filename = fileURLToPath(import.meta.url)
    const colorsDataPath = path.join(
      path.dirname(__filename),
      '../utils/colorValues.json'
    )
    const colorsData = JSON.parse(fs.readFileSync(colorsDataPath, 'utf8'))

    this.colorToValue = colorsData.colorToValue
    this.multipliers = colorsData.multipliers
    this.tolerances = colorsData.tolerances
  }

  calculateOhmValue(
    bandAColor: keyof ColorInfo,
    bandBColor: keyof ColorInfo,
    bandCColor: keyof ColorMultipliers,
    bandDColor: keyof ColorTolerances
  ): number {
    const bandAValue = this.colorToValue[bandAColor]
    const bandBValue = this.colorToValue[bandBColor]
    const bandCValue = this.multipliers[bandCColor]
    const tolerance = this.tolerances[bandDColor] || 0.2

    console.log('bandAValue===', bandAValue)
    console.log('bandBValue===', bandBValue)
    console.log('bandCValue===', bandCValue)
    console.log('tolerance===', tolerance)

    const value = (bandAValue * 10 + bandBValue) * bandCValue

    if (tolerance >= 0.05) {
      console.log('if return', value)
      return value
    }

    const lowerBound = Math.round(value * (1 - tolerance))
    const upperBound = Math.round(value * (1 + tolerance))
    console.log('lowerBound===', lowerBound)
    console.log('upperBound===', upperBound)
    console.log('result===', Math.floor((lowerBound + upperBound) / 2))
    return Math.floor((lowerBound + upperBound) / 2)
  }
}

export { ColorInfo, ColorMultipliers, ColorTolerances, OhmValueCalculator }
