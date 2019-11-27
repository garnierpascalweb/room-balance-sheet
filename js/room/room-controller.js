(function (ng) {
    'use strict'; //NOSONAR
    ng.module('room')
    .controller('RoomController', RoomController);
   
    RoomController.$inject = ['$log', '$location', 'RoomService', 'AppService', 'TripService', 'SeasonService'];
    function RoomController($log, $location, RoomService, AppService, TripService, SeasonService) {
        $log.info("Chargement RoomController"); 
        var vm = this;       
        // Des attributs       
        // vm.season=SeasonService
        vm.season=SeasonService.getSeason(AppService.getCurrentItem());
        vm.home={};
        
        vm.onChangeTabItem = onChangeTabItem;
        vm.getTripDuration = getTripDuration;
        vm.getTripAveragePrice = getTripAveragePrice;               

        function onChangeTabItem(value){
            $log.info("onChangeTabItem on " + value);            
            vm.season = RoomService.switchYear(value);
            $log.info(" on " + value);
        }

        function getTripDuration(trip){
            return TripService.getDuration(trip);
        }

        function getTripAveragePrice(trip){
            return TripService.getAveragePrice(trip);
        }
    }
    
}(angular));