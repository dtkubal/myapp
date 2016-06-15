angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  $scope.cards = [
    { image: 'img/1.jpg',title: 'LabTest1'},
    { image: 'img/2.jpg',title: 'Chill', id: 2 },
    { image: 'img/3.jpg',title: 'Dubstep', id: 3 },
    { image: 'img/4.jpg',title: 'Indie', id: 4 },
    { image: 'img/5.jpg',title: 'Rap', id: 5 },
    { image: 'img/6.jpg',title: 'Cowbell', id: 6 }
  ];

   $scope.listitems = [
    { title: 'LabTest1' ,url:''},
    { title: 'LabTest2' ,url:''},
    { title: 'LabTest3' ,url:''},
    { title: 'LabTest4' ,url:''},
    { title: 'LabTest5' ,url:''},
    { title: 'LabTest6' ,url:''},
    { title: 'LabTest7' ,url:''},
    { title: 'LabTest8' ,url:''},
    { title: 'LabTest9' ,url:''},
    { title: 'LabTest10' ,url:''}
  ];
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

   // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);


  };

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Acute Hepatitis Profile (MHD1100)', id: 1 },
    { title: 'Advanced Cardiac Risk (MHD1000)', id: 2 },  
    { title: 'Amphetamine Screen (MHD505)', id: 3 },
    { title: 'Anemia Package (MHD200)', id: 4 },
    { title: 'Arthritis Package (MHD900)', id: 5 },
    { title: 'Asthma Profile (MHD101)', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('ProductCtrl', function($scope) {
  $scope.products = [
    { title: 'Acute Hepatitis Profile (MHD1100)', id: 1 },
    { title: 'Advanced Cardiac Risk (MHD1000)', id: 2 },  
    { title: 'Amphetamine Screen (MHD505)', id: 3 },
    { title: 'Anemia Package (MHD200)', id: 4 },
    { title: 'Arthritis Package (MHD900)', id: 5 },
    { title: 'Asthma Profile (MHD101)', id: 6 }
  ];
})

.controller('ProductCtrl', function($scope, $stateParams) {

});

