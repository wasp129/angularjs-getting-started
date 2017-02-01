(function() {

    var module = angular.module("githubviewer");

    var repocontroller = function($scope, $routeParams, github){

         var onrepo = function(data){
            $scope.repo = data;
        };

        var onerror = function(reason) {
            $scope.error = reason;
        };

        var reponame = $routeParams.reponame;
        var username = $routeParams.username;

            github.getrepodetails(username, reponame)
                .then(onrepo, onerror);
    };

    module.controller("repocontroller", repocontroller);

}());