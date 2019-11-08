(function (ng) {
    'use strict'; //NOSONAR
    ng.module('room')
    .controller('RoomController', RoomController);
   
    RoomController.$inject = ['$log', '$location', 'RoomService', 'AppService', 'TripService'];
    function RoomController($log, $location, RoomService, AppService, TripService) {
        var vm = this;       
        // Des attributs
        vm.tab={};
        vm.tab.items=RoomService.getTabItems();
        
        vm.myjson = AppService.load();
        vm.mymap = AppService.toMap();
        vm.myvalue = vm.mymap.get(2019);
        // Des methodes
        vm.getYearsArray = getYearsArray;        

        function getYearsArray(){
            return RoomService.getYearsArray();
        }
    }
    
}(angular));