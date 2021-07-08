angular.module('starter.controllers', [])
.controller('cardControl', function($scope) {
  $scope.cards = [
    { src: 'img/digitalbrandconsultingndesigning.jpg', title:'Test1',price: '$180'},
    { src: 'img/digitalbrandconsultingndesigning.jpg', id: 2 },
    { src: 'img/digitalbrandconsultingndesigning.jpg', id: 3 },
  
  ];
});
