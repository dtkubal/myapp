angular.module('starter', ['ionic', 'starter.controllers'])
.controller('registercontroller' , function($scope)
		{
//register
     $scope.registerData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/Register.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeRegister = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.Register = function() {
    $scope.modal.show();
  };

   // Perform the login action when the user submits the login form
  $scope.doRegister = function() {
    console.log('Doing Register', $scope.registerData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeRegister();
    }, 1000);
}
});