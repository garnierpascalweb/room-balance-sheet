(function (ng) {
    'use strict'; //NOSONAR
    ng.module('app')
    
    .service('AppService', AppService);

   

    AppService.$inject = ['$log', '$http', '$location'];
    function AppService($log, $http, $location) {
        var service = {};
        // methodes
       //  service.load = load;
        service.toMap = toMap;

        function toMap(){
           var map = new Map();
           map.set(2019, 'v1');
           map.set(2018, 'v2');
           map.set(2017, 'v3');
           console.log('map de taille ' + map.size);
           return map; 
        }        
        
        
        return service;
    }
} (angular));