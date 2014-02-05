/**
 * Created by sapardi
 */

'use strict';

angular.module('gitlabApp', ['restServices', 'gitlabFilters'])

	.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html', 
                controller: 'HomeCtrl'
            })
		    .when('/projects', {
                templateUrl: 'partials/project-list.html', 
                controller: 'ProjectListCtrl'
            })		
            .when('/users', {
                templateUrl: 'partials/user-list.html', 
                controller: 'UserListCtrl'
            })		
            .otherwise({
                redirectTo: '/'
            });
	}]);

angular.module('gitlabFilters', []) 
    .filter('projectName', function () {
        return function (input) {
            return input.name;
        };
    });