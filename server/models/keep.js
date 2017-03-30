import { models } from '../config/constants'

let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId



let schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  imageUrl:{type: String},
  created: { type: Number, default: Date.now() },
  creatorId: {type:ObjectId, ref:models.user.name, required: true},
  // RELATIONS
  vaultId:{type: ObjectId, ref: models.vault}
});


module.exports = mongoose.model('Keep', schema)