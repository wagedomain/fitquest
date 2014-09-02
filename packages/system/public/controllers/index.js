'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', '$rootScope', 'Global', '$http', '$location',
  function($scope, $rootScope, Global, $http, $location) {
  	var getCharacter;
    $scope.global = Global;

    if(Global.user.length === 0) {
      $location.url('/login');        
    }

    
    getCharacter = function(userId) {

    	console.log(userId);

        $http.get('/characters', {
            data: { user: userId }
        })
        .success(function(response){
        	if(response.length > 0){
          		$scope.character = response[0];
          	} else {
          		$location.url('/characters/create');
          	}
        });
      };

    getCharacter(Global.user._id);

  }
]);
