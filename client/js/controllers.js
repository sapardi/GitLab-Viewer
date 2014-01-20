/**
 * Created by sapardi on 1/19/14.
 */

angular.module('gitlabApp.controllers', [])
	.controller('ProjectListCtrl', ['$scope', 'Project', function ($scope, Project) {
		$scope.projects = Project.query();
	}])
	.controller('UserListCtrl', ['$scope', 'User', function ($scope, User) {
		$scope.users = User.query();
	}]);