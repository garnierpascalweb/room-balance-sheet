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
        function switchYear(year){
            $log.info("switch year " + year);
        }

        // returning object that can be used by the controller.
        return service;
    }
}(angular));