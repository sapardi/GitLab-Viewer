/**
 * Created by sapardi on 1/19/14.
 */

'use strict';

angular.module('gitlabApp', ['ngRoute', 'gitlabApp.controllers', 'gitlabApp.restServices'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/projects', {templateUrl: 'partials/project-list.html', controller: 'ProjectListCtrl'});
		$routeProvider.when('/users', {templateUrl: 'partials/user-list.html', controller: 'UserListCtrl'});
		$routeProvider.otherwise({redirectTo: '/projects'});
	}]);
