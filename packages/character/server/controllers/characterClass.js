'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  CharacterClass = mongoose.model('CharacterClass'),
  _ = require('lodash');


/**
 * Find CharacterClass by id
 */
exports.CharacterClass = function(req, res, next, id) {
  CharacterClass.load(id, function(err, characterClass) {
    if (err) return next(err);
    if (!characterClass) return next(new Error('Failed to load CharacterClass ' + id));
    req.CharacterClass = characterClass;
    next();
  });
};

/**
 * Create a CharacterClass
 */
exports.create = function(req, res) {
  var characterClass = new CharacterClass(req.body);
  characterClass.user = req.user;

  characterClass.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot save the CharacterClass: ' + err
      });
    }
    res.json(characterClass);

  });
};

/**
 * Update an CharacterClass
 */
exports.update = function(req, res) {
  var characterClass = req.CharacterClass;

  characterClass = _.extend(characterClass, req.body);

  characterClass.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot update the CharacterClass'
      });
    }
    res.json(characterClass);

  });
};

/**
 * Delete an CharacterClass
 */
exports.destroy = function(req, res) {
  var characterClass = req.CharacterClass;

  characterClass.remove(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot delete the CharacterClass'
      });
    }
    res.json(characterClass);

  });
};

/**
 * Show an CharacterClass
 */
exports.show = function(req, res) {
  res.json(req.CharacterClass);
};

/**
 * List of CharacterClasss
 */
exports.all = function(req, res) {
  CharacterClass.find({}, function(err, CharacterClass) {
    if (err) {
      return res.json(500, {
        error: 'Cannot list the CharacterClasss'
      });
    }
    res.json(CharacterClass);

  });

};
