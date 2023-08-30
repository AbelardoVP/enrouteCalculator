import mongoose, { Schema, Document } from 'mongoose'

export interface ToleranceBandDocument extends Document {
  color: string
  value: number
}

const toleranceBandSchema: Schema = new mongoose.Schema({
  color: String,
  value: Number
})

const ToleranceBand = mongoose.model<ToleranceBandDocument>(
  'ToleranceBand',
  toleranceBandSchema
)

export default ToleranceBand
