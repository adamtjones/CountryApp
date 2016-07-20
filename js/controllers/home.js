(function() {
'use strict';

angular
    .module('coffee')
    .controller('mainController', function(back, API, $location) {
            var vm = this;

            vm.search = function() {
                /*do redirect here to whatever is in that input box*/
                $location.path('/results/'+vm.searchData);
            };


// var countryInfo = back.getList();

// countryInfo.then(function(results) {
//     var taco = results.data.data;

//     vm.taco = taco;
// });


});
})();