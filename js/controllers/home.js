(function() {
    'use strict';
    
    angular
    .module('coffee')
    .controller('mainController', function(back,API,$window) {
       var vm = this;

         vm.search = function(){
        do redirect here to whatever is in that input box
        })
       }


       var countryInfo = back.getList();

       countryInfo.then(function(results){
          var taco = results.data.data;

          vm.taco = taco;
       });


       });
})();