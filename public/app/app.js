var app = angular.module('SantaApp',['ngRoute', 'SantaCtrls','SantaServices']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/index.html',
    controller: 'SantaCtrl'
  })
  .when('/about', {
    templateUrl: 'app/views/about.html'
  })
  .when('/hello', {
    templateUrl: 'app/views/hello.html'
  })
  .when('/badsanta', {
    templateUrl: 'app/views/badsanta.html',
    controller: 'SantaCtrl'
  })
  .when('/goodsanta', {
    templateUrl: 'app/views/goodsanta.html',
    controller: 'SantaCtrl'
  })
  .when('/signup', {
    templateUrl: 'app/views/signup.html',
    controller: 'SignupCtrl'
  })
  .when('/login', {
    templateUrl: 'app/views/login.html',
    controller: 'LoginCtrl'
  })
  .when('/show', {
    templateUrl:'app/views/show.html',
    controller: 'SantaCtrl'
  })
  .otherwise({
    templateUrl: 'app/views/404.html'
  });

  $locationProvider.html5Mode(true);
}])
.config(['$httpProvider', function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
}])
.run(["$rootScope", "Auth", function($rootScope, Auth) {
  $rootScope.isLoggedIn = function(){
    return Auth.isLoggedIn.apply(Auth);
  }
}]);