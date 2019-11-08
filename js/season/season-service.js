(function (ng) {
    'use strict'; //NOSONAR
    ng.module('season')
    .service('SeasonService', SeasonService);
    SeasonService.$inject = ['$log', '$http'];
    function SeasonService($log, $http) {
         var service = {};       
        service.season.year=0;
        service.season.nbguests=0;
        service.season.nbnights=0;

         // methodes
         service.load = load;        
         service.getNbGuests = getNbGuests;      
 
         function load(json,year){
            service.season.year=year;
            service.season.nbguests=getNbGuests(year);
            return service.season;
         }

         function getNbGuests(year){
            
         }        
         
         return service;
    }
 } (angular));