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
        // Some services
        vm.onChangeTabItem = onChangeTabItem;
        vm.myjson = AppService.load();
        vm.mymap = AppService.toMap();
        vm.myvalue = vm.mymap.get(2019);
        // Des methodes
        vm.getYearsArray = getYearsArray;        

        function getYearsArray(){
            return RoomService.getYearsArray();
        }

        function onChangeTabItem(value){
            $log.info("onChangeTabItem on " + value);
        }
    }
    
}(angular));