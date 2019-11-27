(function (ng) {
    'use strict'; //NOSONAR
    ng.module('nav')
        .service('NavService', NavService);
        NavService.$inject = ['$log', '$http' ];
    function NavService($log, $http) {
        var service = {};               
        // returning object that can be used by the controller.
        service.getYears = getYears;
        function getYears() {
            var currentYear = new Date().getFullYear(), years = [];
            var startYear = 2013;           
            while (startYear <= currentYear) {
                years.push(startYear++);
            }
            return years;
        }
        return service;
    }
}(angular));