(function(){

    var github = function($http){

        var getuser = function(username){
            return $http.get("https://api.github.com/users/" + username)
                .then(function(response){
                    return response.data;
                });
        };

        var getrepos = function(user){
            return $http.get(user.repos_url)
                    .then(function(response){
                        return response.data;
                    });
        };

        var getrepodetails = function(username, reponame) {
            var repo;
            var repourl = "https://api.github.com/repos/" + username + "/" + reponame;

            return $http.get(repourl)
                    .then(function(response){
                            repo = response.data;
                            return $http.get(repourl + "/contributors");
                    })
                    .then(function(response){
                        repo.contributors = response.data;
                        return repo;
                    });
        };


        return {
            getuser: getuser,
            getrepos: getrepos,
            getrepodetails: getrepodetails
        };
    };

    var module = angular.module("githubviewer");
    module.factory("github", github);

}());