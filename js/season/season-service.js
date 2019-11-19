(function (ng) {
    'use strict'; //NOSONAR
    ng.module('season')
    .service('SeasonService', SeasonService);
    SeasonService.$inject = ['$log', '$http', 'TripService', 'UtilsService'];
    function SeasonService($log, $http, TripService,UtilsService) {
        var service = {};       
        service.getSeason=getSeason;
        service.getProrata = getProrata;
        service.getMonthRepartition = getMonthRepartition;
        service.getDaysInMonth = getDaysInMonth;
        service.dateRange = dateRange;
        service.logMapElements = logMapElements;
        /**
         * get 
         * @param {*} year current year
         * @param {*} trips trips array
         */
        function getSeason(year,trips){
            var season={};
            season.nbguests = trips.length;                        
            var nbnights = 0;
            var fullprice = 0;
            var monthPrices = [];
            var priceByMonthMap = new Map();
            for (var index in trips) {               
                var trip = trips[index];                
                var duration = TripService.getDuration(trip);
                var price = TripService.getPrice(trip);
                var checkin = TripService.getCheckIn(trip);
                var checkout = TripService.getCheckOut(trip);

                fullprice += price
                nbnights += duration;
                
                               
                var monthCheckin = checkin.getMonth();
                var monthCheckout = checkout.getMonth();
               
                $log.info("allmonths entre " + monthCheckin + " et  " + monthCheckout + " cest " + allmonths);
                if (monthCheckin === monthCheckout){
                    var monthName = UtilsService.getMonthName(monthCheckin);
                    monthPrices[monthCheckin] = monthPrices[monthCheckin]+price;
                    var priceForCurrentMonth = priceByMonthMap.get(monthName);
                    if (priceForCurrentMonth === undefined){
                        priceByMonthMap.set(monthName, price);
                        $log.info("setting " + monthName + " => " + price);
                    } else {
                        priceByMonthMap.set(monthName, priceForCurrentMonth+price);
                        $log.info("setting " + monthName + " => " + priceByMonthMap.get(monthName));
                    }
                } else {
                    var allmonths = getMonthRepartition(checkin, checkout);                   
                    var tabProrata = getProrata(price, Array.from(allmonths.values()));

                    for (var monthIndex = monthCheckin; monthIndex <= monthCheckout; monthIndex++) {
                        var nbj = allmonths.get(monthIndex);
                        var monthName = UtilsService.getMonthName(monthIndex);
                        var theprice = tabProrata[nbj];
                        var priceForCurrentMonth = priceByMonthMap.get(monthName);
                        if (priceForCurrentMonth === undefined){
                            priceByMonthMap.set(monthName, theprice);
                            $log.info("setting " + monthName + " => " + theprice);
                        } else {
                            priceByMonthMap.set(monthName, priceForCurrentMonth+theprice);
                            $log.info("setting " + monthName + " => " + priceByMonthMap.get(monthName));
                        }
                    }

                    $log.info("full price " + price + " prorata " + JSON.stringify(tabProrata) + "");


                }
                
            }
            season.prices = priceByMonthMap;
            season.nbnights = nbnights;
            season.price={};
            season.price.sum=fullprice;
            season.price.avg=(fullprice/nbnights).toFixed(2);
            season.nights={};
            season.nights.sum=nbnights;
            season.nights.avg=(nbnights/trips.length).toFixed(2);
            season.trips = trips;
            $log.info("season " + JSON.stringify(season) + " ");
            $log.info("affichage map " + priceByMonthMap.size);
            for (const entry of priceByMonthMap.entries()) {
                $log.info(entry);
                $log.info(UtilsService.getMonthName(priceByMonthMap[entry]));
              }
            season.price.chart={};
            season.price.chart.labels=Array.from(priceByMonthMap.keys());
            season.price.chart.series=[];
            season.price.chart.series[0]="Oseille";
            season.price.chart.data=Array.from(priceByMonthMap.values());
            $log.info("fin affichage map " + priceByMonthMap.size);
            
            return season;
         }       

         /**
          * Called when a trip is on 2 month to calculate prorata price for each month
          * @param {*} price full price for a trip 
          * @param {*} array of months included
          */
         function getProrata(price, monthsArray) {
            price = Number(price);
            var t = 0, i, j, o = {};
            for (i = 0, j = monthsArray.length; i < j; i++) {
                monthsArray[i] = Number(monthsArray[i]);
              t = t + monthsArray[i];
            }
            for (i = 0, j = monthsArray.length; i < j; i++) {
                var priceForMonth = Number(monthsArray[i] / (t / price));               
                var priceForMonthRounded = priceForMonth.toFixed(2);
                $log.info("application de toFixed a " + priceForMonth + " vaut " + priceForMonthRounded);
                o[monthsArray[i]] = priceForMonth;
            }
            return o;
          }

          function getMonthRepartition(date1, date2){
            $log.info("daterange pour  " + date1.toISOString() + " et  " + date2.toISOString() + "=" + dateRange(date1.toISOString(),date2.toISOString()));
            var m = new Map();
            var month1 = date1.getMonth();
            var month2 = date2.getMonth();
            var months = [];
            for (var i = month1; i <= month2; i++) {
                var nbjours = getDaysInMonth(i, date1.getYear());
                if (i === 0){
                    nbjours = nbjours-date1.getDate();
                } else if (i === month2){
                    nbjours = date2.getDate();
                } 
                months.push(nbjours);                                        
            }              
            months[0] = months[0]-date1.getDate();
            // months[months.length-1] = 
            $log.info("getMonthsBetweenDates = " + months);
            var mapKey = month1;
            for (var i = 0; i < months.length; i++) {
                // copie.push(items[i]);

                m.set(mapKey, months[i]);
                mapKey++;
            }

            for (const entry of m.entries()) {
                $log.info(entry);
              }
              return m;
            // return months;
          }

          function getDaysInMonth(month,year){
            return new Date(year, month, 0).getDate();
          }

          function dateRange(startDate, endDate) {
            var start      = startDate.split('-');
            var end        = endDate.split('-');
            var startYear  = parseInt(start[0]);
            var endYear    = parseInt(end[0]);
            var dates      = [];
          
            for(var i = startYear; i <= endYear; i++) {
              var endMonth = i != endYear ? 11 : parseInt(end[1]) - 1;
              var startMon = i === startYear ? parseInt(start[1])-1 : 0;
              for(var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j+1) {
                var month = j+1;
                var displayMonth = month < 10 ? '0'+month : month;
                dates.push([i, displayMonth].join('-'));
              }
            }
            return dates;
          }

          function logMapElements(valeur, clé, map) {
            $log.info(`map.get('${clé}') = ${value}`);
        }
         return service;
    }
 } (angular));