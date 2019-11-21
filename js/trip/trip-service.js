(function (ng) {
    'use strict'; //NOSONAR
    ng.module('trip')
    .service('TripService', TripService);
    TripService.$inject = ['$log', '$http'];
    function TripService($log, $http) {
         var service = {};       
         service.getPrice = getPrice;
         service.getDuration = getDuration;
         service.getAveragePrice = getAveragePrice;
         service.getCheckIn=getCheckIn;
         service.getCheckOut=getCheckOut;
         service.getMonthCheckIn = getMonthCheckIn;
         service.getMonthCheckOut = getMonthCheckOut;

         function getPrice(trip){
            return trip.price;
         }

         function getDuration(trip){
            var checkin = new Date(trip.checkin);
            var checkout = new Date(trip.checkout);
            // var price = trip.price;
            // var platform = trip.platform;               
            var diffTime = checkout.getTime() - checkin.getTime();  
            var duration = diffTime / (1000 * 3600 * 24); 
            return duration;
         }
         
         function getAveragePrice(trip){
            var price = trip.price;
            var duration = getDuration(trip);
            var avgPrice = (price/duration).toFixed(2);
            return avgPrice;
         }

         function getCheckIn(trip){
            var checkin = new Date(trip.checkin);
            return checkin;
         }

         function getCheckOut(trip){
            var checkout = new Date(trip.checkout);
            return checkout;
         }

        function getMonthCheckIn(trip){
            var checkin = new Date(trip.checkin);
            var month = checkin.getMonth();
            return month;
        }

        function getMonthCheckOut(trip){
            var checkout = new Date(trip.checkout);
            var month = checkout.getMonth();
            return month;
        }
         
         return service;
    }
 } (angular));