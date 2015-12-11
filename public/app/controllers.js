console.log("Controller Loaded");
angular.module('SantaCtrls', ["SantaServices"])
.controller('SantaCtrl',['$scope', 'BadSantas', 'GoodSantas', 'Users', function($scope, BadSantas, GoodSantas, Users) {
    $scope.santas =[];


    $scope.user;
    Users.query(function success(data){
    	$scope.user = data[0].id;
    	console.log($scope.user)
    }, function error (data){
    	console.log(data);
    })


    BadSantas.query(function success(data) {
        $scope.santas = data;
        }, function error(data) {
        console.log(data);
    });
   	GoodSantas.query(function success(data) {
        $scope.santas = data;
        }, function error(data) {
        console.log(data);
    });

    $scope.createBadSanta = function(santa){
        var newBadSanta = new BadSantas();
        newBadSanta.name = santa.name;
        newBadSanta.specialty = santa.specialty;
        newBadSanta.strength = santa.strength;
        newBadSanta.weakness = santa.weakness;
        newBadSanta.bio = santa.bio;
        newBadSanta.image = santa.image;
        newBadSanta._creator = $scope.user;
        newBadSanta.$save();
        console.log(newBadSanta);
    };
    $scope.createGoodSanta = function(santa){
        var newGoodSanta = new GoodSantas();
        newGoodSanta.name = santa.name;
        newGoodSanta.specialty = santa.specialty;
        newGoodSanta.strength = santa.strength;
        newGoodSanta.weakness = santa.weakness;
        newGoodSanta.bio = santa.bio;
        newGoodSanta.image = santa.image;
        newGoodSanta._creator = $scope.user;
        newGoodSanta.$save();
        console.log(santa);
        console.log(newGoodSanta);
    };
}])
.controller('NavCtrl', ['$scope', 'Auth', function($scope, Auth) {
  $scope.logout = function() {
    Auth.removeToken();
    console.log('My token:', Auth.getToken());
  }
}])
.controller('SignupCtrl', ['$scope', '$http', '$location', 'Auth', function($scope, $http, $location, Auth) {
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.userSignup = function() {
    $http.post('/api/users', $scope.user).then(function success(res) {
      $http.post('/api/auth', $scope.user).then(function success(res) {
        Auth.saveToken(res.data.token);
        $location.path('/');
      }, function error(res) {
        console.log(data);
      });
    }, function error(res) {
      console.log(data);
    });
  }
}])
.controller('LoginCtrl', ['$scope', '$http', '$location', 'Auth', function($scope, $http, $location, Auth) {
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.userLogin = function() {
    $http.post('/api/auth', $scope.user).then(function success(res) {
      Auth.saveToken(res.data.token);
      $location.path('/');
    }, function error(res) {
      console.log(data);
    });
  }
}]);