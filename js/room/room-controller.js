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
        // vm.season=SeasonService
        vm.season={};
        vm.home={};
        
        vm.onChangeTabItem = onChangeTabItem;
        vm.getTripDuration = getTripDuration;
        vm.getYearsArray = getYearsArray;        

        function getYearsArray(){
            return RoomService.getYearsArray();
        }

        function onChangeTabItem(value){
            $log.info("onChangeTabItem on " + value);            
            vm.season = RoomService.switchYear(value);
            $log.info(" on " + value);
        }

        function getTripDuration(trip){
            return TripService.getDuration(trip);
        }
    }
    
}(angular));