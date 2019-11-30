(function (ng) {
    'use strict'; //NOSONAR
    ng.module('season')
    .controller('SeasonController', SeasonController); 
    SeasonController.$inject = ['$log', '$location', 'SeasonService'];
    function SeasonController($log, $location, SeasonService) {
        var vm=this;
        vm.season=SeasonService.getCurrentSeason();
    }
}(angular));