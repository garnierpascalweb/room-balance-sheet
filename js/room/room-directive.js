(function (ng) {
    'use strict'; //NOSONAR
    ng.module('room')
        .directive('RoomDirective', function () {
            return {
                restrict: 'E',
                templateUrl: 'html/room/room.html',
                controller: 'RoomController as vm'
            };
        })
}(angular));