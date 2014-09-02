'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', '$rootScope', 'Global', '$http',
  function($scope, $rootScope, Global, $http) {
  	var getCharacter;
    $scope.global = Global;

    //if($scope.character === {}){
    //}

    
    getCharacter = function(userId) {
        $http.get('/characters', {
            params: { user: userId }
        })
        .success(function(response){
          $scope.character = response[0];
        });
      };

    getCharacter(Global.user._id);

  }
]);
