'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CharacterClassSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  stepAdjustment: {
    type: Number,
    required: true
  },
  activeAdjustment: {
    type: Number,
    required: true
  },
  sleepAdjustment: {
    type: Number,
    required: true
  }
});


/**
 * Statics
 */
CharacterClassSchema.statics.load = function(id, cb) {
  this.findOne({
    user: id
  }).populate('user', 'name username').exec(cb);
};

mongoose.model('CharacterClass', CharacterClassSchema);
