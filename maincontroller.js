(function() {

    var app = angular.module("githubviewer");

    var maincontroller = function($scope, $interval, $location) {

        var decrementcountdown = function() {
            $scope.countdown -= 1;
            if($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        };

        $scope.search = function(username) {
            if(countdowninterval) {
                $interval.cancel(countdowninterval);
                $scope.countdown = null;
            }
            //

            $location.path("/user/" + username);    
        };

        var countdowninterval = null;

        var startcountdown = function() {
            countdowninterval = $interval(decrementcountdown, 1000, $scope.countdown);
        };

        $scope.username = "angular";
        $scope.countdown = 5;
        startcountdown();

    };

    app.controller("maincontroller", maincontroller);

}());