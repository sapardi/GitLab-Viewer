function ProjectListCtrl ($scope, Projects) {
    $scope.setActive('projects');
    $scope.projects = Projects.query();
}