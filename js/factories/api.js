(function() {
    'use strict';
    angular
        .module('newApp')
        .factory('API', function($http) {

            var postInfo = function(data) {
                var gettingData = $http({
                    method: 'POST',
                    data: data,
                    url: "https://api.backand.com:443/1/objects/posts",
                });

                return gettingData;
            }

            function getInfo(country) {
                var call = $http({
                    method: 'GET',
                    url: "https://restcountries.eu/rest/v1/name/" + country,
                });

                return call;
            }
            /*new function for population data from entire API*/
            function getPopData() {
                var call = $http({
                    method:'GET',
                    url: "https://restcountries.eu/rest/v1/all",
                });

                return call;
            }
            var searchData = function(search) {
                var data = $http({
                    method: 'GET',
                    url: "https://restcountries.eu/rest/v1/name/" + search,
                });

                return data;

            }
            return {
                postInfo,
                getInfo,
                searchData,
                getPopData
            }
        })
})();