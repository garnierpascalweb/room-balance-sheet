(function (ng) {
    'use strict'; //NOSONAR
    ng.module('room')
        .service('RoomService', RoomService);
    RoomService.$inject = ['$log', '$http', 'SeasonService'];
    function RoomService($log, $http, SeasonService) {
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
            var trips = [                
                {
                    "checkin": "2017-06-24",
                    "checkout": "2017-07-01",
                    "price": 250,
                    "platform": "Le Bon Coin"
                  },
                  {
                    "checkin": "2017-07-17",
                    "checkout": "2017-07-22",
                    "price": 212,
                    "platform": "Airbnb"
                  },
                  {
                    "checkin": "2017-07-25",
                    "checkout": "2017-07-30",
                    "price": 262,
                    "platform": "Airbnb"
                  },
                  {
                    "checkin": "2017-07-30",
                    "checkout": "2017-08-09",
                    "price": 540,
                    "platform": "Le Bon Coin"
                  },
                  {
                    "checkin": "2017-08-10",
                    "checkout": "2017-08-18",
                    "price": 420,
                    "platform": "Retour"
                  },
                  {
                    "checkin": "2017-08-21",
                    "checkout": "2017-08-25",
                    "price": 179,
                    "platform": "Airbnb"
                  },
                  {
                    "checkin": "2017-08-25",
                    "checkout": "2017-08-27",
                    "price": 88,
                    "platform": "Airbnb"
                  },
                  {
                    "checkin": "2017-09-03",
                    "checkout": "2017-09-10",
                    "price": 252,
                    "platform": "Airbnb"
                  },
                  {
                    "checkin": "2017-09-10",
                    "checkout": "2017-09-17",
                    "price": 233,
                    "platform": "Airbnb"
                  },
                  {
                    "checkin": "2017-09-20",
                    "checkout": "2017-09-28",
                    "price": 275,
                    "platform": "Airbnb"
                  }                 
            ];            
            var season = SeasonService.getSeason(year,trips);
            return season;
        }        

        // returning object that can be used by the controller.
        return service;
    }
}(angular));