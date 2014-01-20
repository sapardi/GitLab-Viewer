'use strict';

angular.module('gitlabApp.restServices', ['ngResource'])
	.factory('Project', ['$resource',
		function ($resource) {
			return $resource('http://192.168.56.105/api/v3/projects?private_token=nfqrMvAk5SVkSkefXzR5', {});
		}
	])
	.factory('User', ['$resource',
		function ($resource) {
            return $resource('http://192.168.56.105/api/v3/users?private_token=nfqrMvAk5SVkSkefXzR5', {});
		}
	]);

