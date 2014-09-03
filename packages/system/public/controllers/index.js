'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', '$rootScope', 'Global', '$http', '$location',
  function($scope, $rootScope, Global, $http, $location) {
  	var getCharacter;
    $scope.global = Global;

    getCharacter = function(userId) {
        $http.get('/characters?userId='+userId)
        .success(function(response){
        	if(response.length >0){
          		$scope.character = response;
          		Global.character = response;
          	} else {
          		console.log(response.user);
          		$location.url('/characters/create');
          	}
        });
      };

    if(Global.user.userId === undefined) {
    	$location.path('/auth/login');        
    } else {
	    if(Global.character.name === undefined) {
	    	getCharacter(Global.user._id);
	    }
	}
  }
]);
