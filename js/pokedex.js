var pokeApp = angular.module('pokedex', ['ngResource']);

// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');

pokeApp.config(['$resourceProvider', function($resourceProvider) {
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }]);

pokeApp.controller('pickerController', function data($scope, $http){
   /* $scope.list = [{
            "id": "1",
            "name": "Golbutoquet"
        }, {
            "id": "2",
            "name": "Mamandikchuinormal"
        }, {
            "id": "3",
            "name": "Théovaselinator"
        }
        , {
            "id": "4",
            "name": "Pikachu"
        },
*/
      // $scope.$SearchData = $log,
    // $scope.name


    $scope.clickMe = function () {


        if ($scope.name != "") {

        $http.get("http://pokeapi.co/api/v2/pokemon/" + $scope.name + "/")
            .then(function (response) {
                $scope.myWelcome = response.data.name
                $scope.numeroPokemon = response.data.id


            });

    }
    else {
        $http.get("http://pokeapi.co/api/v2/pokemon/" + $scope.id + "/")
            .then(function (response) {
                $scope.myWelcome = response.data.name
                $scope.numeroPokemon = response.data.id
            });
    }





      //  var PokemonAfficheToi = $resource('http://pokeapi.co/api/v2/pokemon/' + $scope.$affiche)

    }});


