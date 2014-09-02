'use strict';

var characters = require('../controllers/characters');

// Article authorization helpers
var hasAuthorization = function(req, res, next) {
  if (!req.user.isAdmin && req.article.user.id !== req.user.id) {
    return res.send(401, 'User is not authorized');
  }
  next();
};

module.exports = function(Characters, app, auth) {

  app.route('/characters')
    .get(characters.all)
    .post(auth.requiresLogin, characters.create);
  app.route('/characters/:charId')
    .get(characters.show)
    .put(auth.requiresLogin, hasAuthorization, characters.update)
    .delete(auth.requiresLogin, hasAuthorization, characters.destroy);

  // Finish with setting up the articleId param
  app.param('characterId', characters.character);
};
