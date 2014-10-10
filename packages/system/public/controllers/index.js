'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', '$rootScope', 'Global', '$http', '$location',
  function($scope, $rootScope, Global, $http, $location) {
  	var getCharacter;
    $scope.global = Global;

    if($rootScope.user !== undefined) {
      Global.user = $rootScope.user;
    }

    getCharacter = function(userId) {
        $http.get('/characters?userId='+userId)
        .success(function(response){
        	if(response && response !== null){
          		$scope.character = response;
          		Global.character = response;
          	} else {
          		$location.url('/characters/create');
          	}
        });
      };

    if(Global.user._id === undefined) {
      console.log(Global);
    	$location.path('/auth/login');        
    } else {
	    if(Global.character.name === undefined) {
	    	getCharacter(Global.user._id);
	    }
	}
  }
]);
