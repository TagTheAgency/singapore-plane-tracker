angular.module('singaporeAirlinesApp')
.directive('map', function(){
  return {
    templateUrl: 'templates/map.html',
    controller: 'mainCtrl'
  }
});