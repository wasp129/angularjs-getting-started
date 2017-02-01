(function() {

    var app = angular.module("githubviewer");

    var usercontroller = function($scope, github, $routeParams) {

        var onusercomplete = function(data) {
            $scope.user = data;
            github.getrepos($scope.user).then(onrepos, onerror);
        };

        var onrepos = function(data) {
            $scope.repos = data;
        };

        var onerror = function(reason) {
            $scope.error = "Could not fetch the data.";
        };

        $scope.username = $routeParams.username;
        $scope.reposortorder = "-stargazers_count";
        github.getuser($scope.username).then(onusercomplete, onerror);

    };

    app.controller("usercontroller", usercontroller);

}());