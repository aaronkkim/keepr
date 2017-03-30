import { models } from '../config/constants'

let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId



let schema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String },
    created: { type: Number, default: Date.now() },
    creatorId: { type: ObjectId, ref: models.user.name, required: true },
    public: { type:Boolean, default: false },
    removable:{type: Boolean,default: true },
    // RELATIONS
    keeps: [{ type: ObjectId, ref: models.keep.name }]
});


module.exports = mongoose.model('Vault', schema)
