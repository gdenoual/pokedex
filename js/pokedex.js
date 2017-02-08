var pokeApp = angular.module('pokedex', ['ngResource']);

// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

pokeApp.controller('pickerController', data);
function data($scope){
    $Scope.list = [{
	"id": "1",
	"name": "Golbutoquet"
}, {
	"id": "2",
	"name": "Mamandikchuinormal"
}, {
	"id": "3",
	"name": "Théovaselinator"
}];

}
