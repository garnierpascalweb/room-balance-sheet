(function (ng) {
    'use strict'; //NOSONAR
    ng.module('trip')
    .service('TripService', TripService);
    TripService.$inject = ['$log', '$http'];
    function TripService($log, $http) {
         var service = {};       

         // methodes
         service.getNbDays = getNbDays;

         /**
          * Get days between 2 dates
          * @param {*} date1 
          * @param {*} date2 
          */
         function getNbDays(date1,date2){
            var checkin = new Date(date1);
            var checkout = new Date(date2);
            var tempsEcoule = checkout.getTime() - checkin.getTime();
            var days = tempsEcoule / 86400000;
            return days;
         }
         
         return service;
    }
 } (angular));