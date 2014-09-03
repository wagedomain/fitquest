'use strict';

angular.module('mean.character').controller('CreateCharacterController', ['$scope', '$rootScope', 'Global', 'Character', '$http', '$location',
    function($scope, $rootScope, Global, Character, $http, $location) {
        $scope.global = Global;
        $scope.package = {
            name: 'character'
        };

        //store user's character for creation
        $scope.character = {};

        //get character class list
        $http.get('/characterClass')
        .success(function(response) {
          console.log(response);
          $scope.characterClasses = response;
        });

        //create character
        $scope.createCharacter = function() {
        $scope.nameError = null;
        $scope.createError = null;
        $http.post('/characters', {
          name: $scope.character.name,
          gender: $scope.character.gender,
          characterClass: $scope.character.class
        })
          .success(function(response) {
            // authentication OK
            $scope.createError = 0;
            Global.character = response;
            $rootScope.$emit('characterCreated');
            $location.url('/');
          })
          .error(function(error) {
            // Error: authentication failed
            if (error === 'Name already taken') {
              $scope.nameError = error;
            }  else $scope.registerError = error;
          });
      };
    }
]);
