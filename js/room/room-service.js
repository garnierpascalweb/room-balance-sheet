(function (ng) {
    'use strict'; //NOSONAR
    ng.module('room')
        .service('RoomService', RoomService);
    RoomService.$inject = ['$log', '$http', 'SeasonService'];
    function RoomService($log, $http, SeasonService) {
        var service = {};       
        service.season = {};
        // Some services       
        service.switchYear = switchYear;         

        /**
         * Called when switch year
         */
        function switchYear(year) {
            $log.info("switch year " + year);                                  
            service.season = SeasonService.getSeason(year);            
            return  service.season;
        }        

        // returning object that can be used by the controller.
        return service;
    }
}(angular));