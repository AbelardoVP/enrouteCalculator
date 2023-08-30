import mongoose, { Schema, Document } from 'mongoose'

export interface MultiplierBandDocument extends Document {
  color: string
  value: number
}

const multiplierBandSchema: Schema = new mongoose.Schema({
  color: String,
  value: Number
})

const MultiplierBand = mongoose.model<MultiplierBandDocument>(
  'MultiplierBand',
  multiplierBandSchema
)

export default MultiplierBand
