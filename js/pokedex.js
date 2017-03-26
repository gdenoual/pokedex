var pokeApp = angular.module('pokedex', ['ngResource']);

// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);


//pokeApp.factory
//	return $ressource

//pokeApp.service // singeltoin id, nom , abyulities , controleur , appeler ressource acceder ala ressourice ,recup avec id , syntaxe ressource.get, service est un pokemon , setId setMembre = a �a etc , et se sont les skills
pokeApp.controller('pickerController', function data($scope, $http) {

    $http.get("http://pokeapi.co/api/v2/pokemon/?limit=811").then(function(response) {
        $scope.abc = response.data.results
    });


    $scope.kickMe = function($name) {

        $scope.name = $name;
        $http.get("http://pokeapi.co/api/v2/pokemon/" + $name + "/")
            .then(function(response) {
                console.log(response.data.id)
                $scope.id = response.data.id
            })
    };

    $scope.clickMe = function() {
        $http.get("http://pokeapi.co/api/v2/pokemon/" + $scope.name + "/")
            .then(function(response) {

                $scope.myWelcome = response.data.name
                $scope.numeroPokemon = response.data.id
				$scope.toto = "son/("+response.data.id+").ogg"
            });
    }
	

});
