(function() {
    'use strict';

    angular
        .module('coffee')
        .controller('contactController', function(API, $stateParams) {
            var vm = this;

            vm.submit = function() {
                var postInfo /* changed from postPix*/ = API.postInfo(vm.form);

                postInfo.then(function(response) {
                    console.log(response);
                })
            }

            /*vm.clearPost = function(){
                vm.controller.form.title = null;
                vm.controller.form.description = null;
                vm.controller.form.url = null;
            }*/

        });
})();