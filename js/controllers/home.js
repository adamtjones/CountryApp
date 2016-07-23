(function() {
'use strict';

angular
    .module('newApp')
    .controller('mainController', function(back, API, $location) {
            var vm = this;

            vm.search = function() {
                /*redirect for entry in input box*/
                $location.path('/results/'+vm.searchData);
            };
});
})();