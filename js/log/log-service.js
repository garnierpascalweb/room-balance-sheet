(function (ng) {
    'use strict'; //NOSONAR
    ng.module('app')
    .service('LogService', LogService);
    LogService.$inject = ['$log', '$http'];
    function LogService($log, $http) {
         var service = {};       
         service.log = log;
         service.logMap = logMap;

         function log(message){
             $log.info(message);
         }

         function logMap(myMap){
            for (const entry of myMap.entries()) {
                $log.info(entry);                 
            }
         }
         return service;
    }
 } (angular));