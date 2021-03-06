angular.module('starter.controllers', [])

.controller('App', function($scope, $ionicModal, $timeout, $state) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    /*$ionicModal.fromTemplateUrl('templates/login.html', {
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
    };*/


    $scope.search = function() {
        $state.go('app.search');
    };
})

.controller('IntroController', function($scope, $ionicSlideBoxDelegate, $state) {
    $scope.checkUser = function() {
        $state.go('app.home');
    };
    $scope.nextSlide = function() {
        $ionicSlideBoxDelegate.next();
    };
    $scope.changeSlide = function(index) {
        $scope.slideIndex = index;
        console.log(index);
    };
})

.controller('List', function($scope, $http, $ionicLoading) {
    $ionicLoading.show({
        template: 'Chargement...'
    });
    $http.get('beers.json').success(function(response) {
        $scope.list = response;
        $ionicLoading.hide();
    });
})

.controller('Top', function($scope) {
    $scope.list = [
        { title: 'Bière top #1', id: 1 },
        // item #2, etc
    ];
})

.controller('Random', function($scope, $stateParams) {

})

.controller('Profil', function($scope, $stateParams) {

})

.controller('Friends', function($scope, $stateParams) {

})

.controller('Add', function($scope, $stateParams) {

})

.controller('Single', function($scope, $stateParams) {
    
});
