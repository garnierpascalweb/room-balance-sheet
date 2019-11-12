(function (ng) {
    'use strict'; //NOSONAR
    ng.module('room')
        .service('RoomService', RoomService);
    RoomService.$inject = ['$log', '$http'];
    function RoomService($log, $http) {
        var service = {};
        // Some services
        service.getTabItems = getTabItems;
        service.switchYear = switchYear;

        /**
         * Items for tabs
         */
        function getTabItems() {
            var currentYear = new Date().getFullYear(), years = [];
            var startYear = 2013;
            years.push('Home');
            while (startYear <= currentYear) {
                years.push(startYear++);
            }
            return years;
        }

        /**
         * Called when switch year
         */
        function switchYear(year) {
            $log.info("switch year " + year);
           
            var season = {};
            season.year = year;
            var trips = [
                {
                    "checkin": "2019-07-06",
                    "checkout": "2019-07-16",
                    "price": 382,
                    "platform": "Retour"
                },
                {
                    "checkin": "2019-07-16",
                    "checkout": "2019-07-31",
                    "price": 300,
                    "platform": "Connaissance"
                },
                {
                    "checkin": "2019-08-03",
                    "checkout": "2019-08-17",
                    "price": 824,
                    "platform": "Airbnb"
                },
                {
                    "checkin": "2019-08-17",
                    "checkout": "2019-09-14",
                    "price": 1176,
                    "platform": "Airbnb"
                },
                {
                    "checkin": "2019-09-17",
                    "checkout": "2019-09-21",
                    "price": 205,
                    "platform": "Airbnb"
                },
                {
                    "checkin": "2019-09-21",
                    "checkout": "2019-09-25",
                    "price": 185,
                    "platform": "Airbnb"
                },
                {
                    "checkin": "2019-09-26",
                    "checkout": "2019-10-16",
                    "price": 667,
                    "platform": "Airbnb"
                },
                {
                    "checkin": "2019-10-23",
                    "checkout": "2019-11-02",
                    "price": 324,
                    "platform": "Airbnb"
                }
            ];            
            season.nbguests = trips.length;                        
            var nbnights = 0;
            var fullprice = 0;
            for (var index in trips) {
                var checkin = new Date(trips[index].checkin);
                var checkout = new Date(trips[index].checkout);
                var price = trips[index].price;
                var platform = trips[index].platform;               
                var diffTime = checkout.getTime() - checkin.getTime();  
                var duration = diffTime / (1000 * 3600 * 24); 
                nbnights += duration;
                fullprice += price;
                $log.info("checkin de " + platform + " pour " +nbnights);
            }
            season.nbnights = nbnights;
            season.price={};
            season.price.sum=fullprice;
            season.price.avg=(fullprice/nbnights).toFixed(2);
            season.trips = trips;
            $log.info("season " + JSON.stringify(season) + "");
            return season;
        }

        // returning object that can be used by the controller.
        return service;
    }
}(angular));