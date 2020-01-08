(function (ng) {
    'use strict'; //NOSONAR
    ng.module('utils')
    .service('UtilsService', UtilsService);
    UtilsService.$inject = ['$log'];
    function UtilsService($log) {
        var service = {};
        var monthArray = new Array();
        monthArray[0] = "Jan";
        monthArray[1] = "Fev";
        monthArray[2] = "Mar";
        monthArray[3] = "Avr";
        monthArray[4] = "May";
        monthArray[5] = "Jun";
        monthArray[6] = "Jui";
        monthArray[7] = "Aug";
        monthArray[8] = "Sep";
        monthArray[9] = "Oct";
        monthArray[10] = "Nov";
        monthArray[11] = "Dec";

        service.getMonthName=getMonthName;
        

        /**
         * 
         * @param {*} number the number of month to retrieve
         */
        function getMonthName(number){
            return monthArray[number];
        }
        return service;
    }
 } (angular));