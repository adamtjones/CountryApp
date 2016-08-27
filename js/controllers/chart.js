(function() {
    'use strict';

    angular
        .module('newApp')
        .controller('chartController', function(API, back, $filter) {
            var vm = this;

            var ctx = document.getElementById("myChart");
            var ctx = document.getElementById("myChart").getContext("2d");

            var popInfo = API.getPopData();
            popInfo.then(function(response){
            	
            	var data = response.data;
	            
	            var burrito = $filter("orderBy")(data,'population');
	            
	            burrito = burrito.reverse();

	            /*limitTo part isn't working*/
	            var martha = $filter("limitTo")(burrito,10);
	            console.log(martha);

	            martha = martha;


            	var countryPopName = burrito.map(function(country){
            		return country.name;
            	});

            	var countryPop = data.map(function(country){
            		return country.population;
            	})
				var myChart = new Chart(ctx, {
				                type: 'doughnut',

				                data: {
				                    labels: countryPopName,
				                    datasets: [{
				                    	label: 'Country Name or whatever',
				                        data: countryPop,
				                        backgroundColor: [
				                            "#FF6384",
				                            "#36A2EB",
				                            "#FFCE56",
				                            "#FF6384",
				                            "#36A2EB",
				                            "#FFCE56",
				                            "#FF6384",
				                            "#36A2EB",
				                            "#FFCE56",
				                            "#FF6384"
				                        ],
				                        hoverBackgroundColor: [
				                            "#FF6384",
				                            "#36A2EB",
				                            "#FFCE56"
				                        ]
				                    }]
				                },
				            });
            })
        });
})();



