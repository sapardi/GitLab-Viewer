'use strict';

angular.module('restServices', ['ngResource'])
	.factory('Projects', ['$resource',
		function ($resource) {
			return $resource('http://192.168.56.105/api/v3/projects?private_token=nfqrMvAk5SVkSkefXzR5');
		}
	])
	.factory('Users', ['$resource',
		function ($resource) {
            return $resource('http://192.168.56.105/api/v3/users?private_token=nfqrMvAk5SVkSkefXzR5');
		}
	]);

