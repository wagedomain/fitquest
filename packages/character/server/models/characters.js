'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Article Schema
 */
var CharacterSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  characterClass: {
    type: Schema.ObjectId,
    ref: 'CharacterClass',
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  }
});

/**
 * Validations
 */
CharacterSchema.path('name').validate(function(name) {
  return !!name;
}, 'Name cannot be blank');

CharacterSchema.path('characterClass').validate(function(characterClass) {
  return !!characterClass;
}, 'Class cannot be blank');

/**
 * Statics
 */
CharacterSchema.statics.load = function(id, cb) {
  this.findOne({
    user: id
  }).populate('user', 'name username').exec(cb);
};

mongoose.model('Character', CharacterSchema);
