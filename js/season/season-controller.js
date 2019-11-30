(function (ng) {
    'use strict'; //NOSONAR
    ng.module('season')
    .controller('SeasonController', SeasonController); 
    SeasonController.$inject = ['$log', '$location', 'RoomService', 'AppService', 'TripService', 'SeasonService'];
    function SeasonController($log, $location, RoomService, AppService, TripService, SeasonService) {
        var vm=this;
        vm.season=SeasonService.getCurrentSeason();
    }
}(angular));