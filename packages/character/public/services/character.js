'use strict';

angular.module('mean.character').factory('Character', [ '$http', '$rootScope', '$q',
    function($http, $rootScope, $q) {
        return {
            name: 'character',
            getCharacter: function(userId){
            	var deferred = $q.defer();

            	$http.get('/characters', {
		            params: { user: userId }
		        })
		        .success(function(response){
		          deferred.resolved(response);
		        });
		        return deferred;
            }
        };
    }
]);
