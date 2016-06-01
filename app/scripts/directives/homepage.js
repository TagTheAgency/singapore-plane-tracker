angular.module('tagApp')
.directive('homepage', function(){
  return {
    templateUrl: 'templates/homepage.html',
    controller: 'mainCtrl'
  }
});