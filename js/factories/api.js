(function() {
    'use strict';
    angular
        .module('coffee')
        .factory('API', function($http) {

            function getInfo(country)
      {
        var call = $http({
              method: 'GET',
              url: "https://restcountries.eu/rest/v1/name/"+country+"",
            });

            return call;
      }
      var searchData = function(search)
            {
                var data = $http ({
                  method: 'GET',
                  url: "https://restcountries.eu/rest/v1/name/"+search,
                });

                return data;

            }

            
            return {
                getInfo,
                searchData,
            }
        })
})();