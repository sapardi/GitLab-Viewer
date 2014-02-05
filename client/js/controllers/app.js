function AppCtrl ($scope) {
    $scope.setActive = function (type) {
        $scope.homeActive = '';
        $scope.projectsActive = '';
        $scope.usersActive = '';
        
        $scope[type + 'Active'] = 'active';
    }
}