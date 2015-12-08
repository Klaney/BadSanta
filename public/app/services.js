angular.module('SantaServices', ['ngResource'])
.factory('BadSantas', ['$resource', 'Auth', function($resource, Auth) {
  return $resource('http://localhost:3000/api/badsanta/:id');
}])
.factory('GoodSantas', ['$resource', 'Auth', function($resource, Auth) {
  return $resource('http://localhost:3000/api/goodsanta/:id');
}])
.factory("Auth", ['$window', "$rootScope",  function($window){
	return {
		saveToken: function(token){
			$window.localStorage["secretsanta-token"]= token;
		},
		getToken: function(){
			return $window.localStorage["secretsanta-token"];
		},
		removeToken: function(){
			$window.localStorage.removeItem("secretsanta-token");
		},
		isLoggedIn: function(){
			var token = this.getToken();
			return token ? true : false;
		},
	    isLoggedIn: function() {
	      var token = this.getToken();
	      console.log(token ? true : false);
	      return token ? true : false;
	    },
	    currentUser: function() {
	      if (this.isLoggedIn()) {
		        var token = this.getToken();
		        try {
	          		var payload = JSON.parse($window.atob(token.split('.')[1]));
	          		return payload;
		        } catch(err) {
		          return false;
		        }
      	  	}
    	}
	};
}])
.factory("AuthInterceptor", ["Auth", function(Auth){
	return {
		request: function(config){
			var token = Auth.getToken();
			if (token){
				config.headers.Authorization = "Bearer "+token;
			}
			return config;
		}
	};
}]);