(function (ng) {
    'use strict'; //NOSONAR
    ng.module('nav')
    .controller('NavController', NavController);
    NavController.$inject = ['$log', '$location', 'NavService', 'AppService'];
    function NavController($log, $location, NavService, AppService) {
        var vm = this;
        vm.items=NavService.getYears();    
        
        vm.onTabChange=onTabChange;

        function onTabChange(newItem){
            AppService.setCurrentItem(newItem);
        }
    }    
}(angular));