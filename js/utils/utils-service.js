(function (ng) {
    'use strict'; //NOSONAR
    ng.module('utils')
    .service('UtilsService', UtilsService);
    UtilsService.$inject = ['$log'];
    function UtilsService($log) {
        var service = {};
        var monthArray = new Array();
        monthArray[0] = "Janvier";
        monthArray[1] = "Fevrier";
        monthArray[2] = "Mars";
        monthArray[3] = "Avril";
        monthArray[4] = "Mai";
        monthArray[5] = "Juin";
        monthArray[6] = "Juillet";
        monthArray[7] = "Aout";
        monthArray[8] = "Septembre";
        monthArray[9] = "Octobre";
        monthArray[10] = "Novembre";
        monthArray[11] = "Decembre";
        service.getMonthName=getMonthName;

        function getMonthName(number){
            return monthArray[number];
        }
        return service;
    }
 } (angular));