'use strict';

var characterClass = require('../controllers/characterClass');

module.exports = function(CharacterClass, app, auth) {

  app.route('/characterClass')
    .get(characterClass.all);
   
};
