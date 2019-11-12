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
        vm.season.year=2019;
        vm.season.nbguests=15;
        vm.season.nbnights=77;
        vm.season.price={};
        vm.season.price.sum=3587;
        vm.season.price.avg=42;       
        vm.season.trips={};
        //vm.season.chart={};
        //vm.season.chart.months={};
        //vm.season.chart.months.labels=['Jun', 'Jui', 'Aug', 'Sep', 'Oct'];
        //vm.season.chart.months.data=[[65, 59, 80, 81, 56, 55, 40],   [28, 48, 40, 19, 86, 27, 90]];
        //vm.season.chart.months.series=['Prix total', 'Nuitees'];
        // Some services
        vm.onChangeTabItem = onChangeTabItem;
        // vm.myjson = AppService.load();
        vm.mymap = AppService.toMap();
        vm.myvalue = vm.mymap.get(2019);
        // Des methodes
        vm.getYearsArray = getYearsArray;        

        function getYearsArray(){
            return RoomService.getYearsArray();
        }

        function onChangeTabItem(value){
            $log.info("onChangeTabItem on " + value);
            vm.season = RoomService.switchYear(value);
            $log.info(" on " + value);
        }
    }
    
}(angular));