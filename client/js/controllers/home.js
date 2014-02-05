function HomeCtrl ($scope, Projects) {
    $scope.setActive('home');  
    
    $scope.sidebarURL = 'partials/project-list.html';
    $scope.currentProject = null;
    
    $scope.setProject = function (id) {
        $scope.currentProject = Project.get({projectId: id});
    };
    
    $scope.projects = Projects.query();
}