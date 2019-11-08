(function (ng) {
    'use strict'; //NOSONAR
    ng.module('room')
    .service('RoomService', RoomService);
    RoomService.$inject = ['$log', '$http'];
    function RoomService($log, $http) {
         var service = {};       
         service.getYearsArray = getYearsArray;        
 
         function getYearsArray(){           
            var currentYear = new Date().getFullYear(), years = [];
            var startYear = 2013;  
            while ( startYear <= currentYear ) {
                years.push(startYear++);
            }   
            return years.reverse();    
         }
        
         // returning object that can be used by the controller.
         return service;
    }
 } (angular));