(function (ng) {
    'use strict'; //NOSONAR
    ng.module('season')
    .service('SeasonService', SeasonService);
    SeasonService.$inject = ['$log', '$http'];
    function SeasonService($log, $http) {
        var service = {};       
        service.getSeason=getSeason;
        function getSeason(json,year){
            service.season.year=year;
            service.season.nbguests=getNbGuests(year);
            return service.season;
         }       
         return service;
    }
 } (angular));