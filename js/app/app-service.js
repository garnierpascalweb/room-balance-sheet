(function (ng) {
    'use strict'; //NOSONAR
    ng.module('app')
    
    .service('AppService', AppService);

   

    AppService.$inject = ['$log', '$http', '$location'];
    function AppService($log, $http, $location) {
        var service = {};
        // methodes
        // service.load = load;
        service.currentItem="";
        service.setCurrentItem=setCurrentItem;
        service.getCurrentItem=getCurrentItem;
        
        function getCurrentItem(){
            $log.info("[app-service.js] get current item = " + service.currentItem);
            return service.currentItem;
        }

        function setCurrentItem(incurrentItem){
            $log.info("[app-service.js] set current item = " + incurrentItem);
            service.currentItem=incurrentItem;
        }

        return service;
    }
} (angular));