(function() {
    'use strict';

    angular
        .module('newApp')
        .controller('contactController', function(API, $stateParams) {
            var vm = this;

            vm.submit = function() {
                var postInfo = API.postInfo(vm.form);

                postInfo.then(function(response) {
                    console.log(response);
                })
            }

            vm.clearPost = function(){
                vm.controller.form.name = null;
                vm.controller.form.location = null;
                vm.controller.form.favoriteCountry = null;
                vm.controller.form.favoriteCapital = null;
                vm.controller.form.why = null;
            }

        });
})();