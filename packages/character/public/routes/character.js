'use strict';

angular.module('mean.character').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('Create your character!', {
            url: '/characters/create',
            templateUrl: 'character/views/create.html'
        });
    }
]);
