(function (ng) {
    'use strict'; //NOSONAR

    ng
        .module('app-mock', ['ngMockE2E', 'app'])
        // Faut {"success":true}
        .run(['$httpBackend', function ($httpBackend) {
            var obj = JSON.parse('{"success":true}');
            obj.success = true;
            //convert object to json string
            var string = JSON.stringify(obj);

            function match(urlToMatch) {
                return function (url) {
                    console.log("matches " + url + " to match " + urlToMatch );
                    return url.indexOf(urlToMatch) >= 0;
                }
            }

            

            $httpBackend.whenGET(match('api/trips/2013')).respond(
                [{
                    "checkin": "2013-08-10",
                    "checkout": "2013-08-24",
                    "price": 500,
                    "platform": "Le Bon Coin"
                }]
            );
            $httpBackend.whenGET(match('api/trips/2014')).respond(
                [
                    {
                        "checkin": "2014-07-24",
                        "checkout": "2014-07-30",
                        "price": 243,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2014-08-06",
                        "checkout": "2014-08-09",
                        "price": 171,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2014-08-09",
                        "checkout": "2014-08-12",
                        "price": 171,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2014-08-14",
                        "checkout": "2014-08-17",
                        "price": 171,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2014-08-17",
                        "checkout": "2014-08-24",
                        "price": 388,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2014-08-31",
                        "checkout": "2014-09-05",
                        "price": 173,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2014-09-09",
                        "checkout": "2014-09-13",
                        "price": 131,
                        "platform": "Airbnb"
                    }
                ]
            );
            $httpBackend.whenGET(match('api/trips/2015')).respond(
                [
                    {
                        "checkin": "2015-07-12",
                        "checkout": "2015-07-19",
                        "price": 310,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2015-07-23",
                        "checkout": "2015-07-27",
                        "price": 189,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2015-07-31",
                        "checkout": "2015-08-03",
                        "price": 142,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2015-08-03",
                        "checkout": "2015-08-06",
                        "price": 109,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2015-08-07",
                        "checkout": "2015-08-08",
                        "price": 62,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2015-08-08",
                        "checkout": "2015-08-15",
                        "price": 400,
                        "platform": "Le Bon Coin"
                    },
                    {
                        "checkin": "2015-08-16",
                        "checkout": "2015-08-18",
                        "price": 135,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2015-08-18",
                        "checkout": "2015-08-21",
                        "price": 171,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2015-08-21",
                        "checkout": "2015-08-28",
                        "price": 290,
                        "platform": "Le Bon Coin"
                    },
                    {
                        "checkin": "2015-08-28",
                        "checkout": "2015-08-31",
                        "price": 122,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2015-09-03",
                        "checkout": "2015-09-08",
                        "price": 211,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2015-09-11",
                        "checkout": "2015-09-16",
                        "price": 202,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2015-09-17",
                        "checkout": "2015-09-20",
                        "price": 126,
                        "platform": "Airbnb"
                    }
                ]
            );
            $httpBackend.whenGET(match('api/trips/2016')).respond(
                [
                    {
                        "checkin": "2016-06-15",
                        "checkout": "2016-06-20",
                        "price": 203,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2016-06-26",
                        "checkout": "2016-06-30",
                        "price": 120,
                        "platform": "Connaissance"
                    },
                    {
                        "checkin": "2016-07-01",
                        "checkout": "2016-07-05",
                        "price": 120,
                        "platform": "Connaissance"
                    },
                    {
                        "checkin": "2016-07-12",
                        "checkout": "2016-07-19",
                        "price": 261,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2016-07-22",
                        "checkout": "2016-07-27",
                        "price": 260,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2016-07-27",
                        "checkout": "2016-07-31",
                        "price": 218,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2016-08-01",
                        "checkout": "2016-08-03",
                        "price": 113,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2016-08-05",
                        "checkout": "2016-08-08",
                        "price": 183,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2016-08-08",
                        "checkout": "2016-08-12",
                        "price": 216,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2016-08-12",
                        "checkout": "2016-08-19",
                        "price": 402,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2016-08-19",
                        "checkout": "2016-08-21",
                        "price": 106,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2016-08-22",
                        "checkout": "2016-09-09",
                        "price": 504,
                        "platform": "Le Bon Coin"
                    },
                    {
                        "checkin": "2016-09-21",
                        "checkout": "2016-09-30",
                        "price": 308,
                        "platform": "Airbnb"
                    }
                ]
            );
            $httpBackend.whenGET(match('api/trips/2017')).respond(
                [
                    {
                        "checkin": "2017-06-24",
                        "checkout": "2017-07-01",
                        "price": 250,
                        "platform": "Le Bon Coin"
                    },
                    {
                        "checkin": "2017-07-17",
                        "checkout": "2017-07-22",
                        "price": 212,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2017-07-25",
                        "checkout": "2017-07-30",
                        "price": 262,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2017-07-30",
                        "checkout": "2017-08-09",
                        "price": 540,
                        "platform": "Le Bon Coin"
                    },
                    {
                        "checkin": "2017-08-10",
                        "checkout": "2017-08-18",
                        "price": 420,
                        "platform": "Retour"
                    },
                    {
                        "checkin": "2017-08-21",
                        "checkout": "2017-08-25",
                        "price": 179,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2017-08-25",
                        "checkout": "2017-08-27",
                        "price": 88,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2017-09-03",
                        "checkout": "2017-09-10",
                        "price": 252,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2017-09-10",
                        "checkout": "2017-09-17",
                        "price": 233,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2017-09-20",
                        "checkout": "2017-09-28",
                        "price": 275,
                        "platform": "Airbnb"
                    }
                ]
            );
            $httpBackend.whenGET(match('api/trips/2018')).respond(
                [
                    {
                        "checkin": "2018-07-07",
                        "checkout": "2018-07-15",
                        "price": 295,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2018-07-15",
                        "checkout": "2018-07-20",
                        "price": 272,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2018-07-22",
                        "checkout": "2018-07-28",
                        "price": 150,
                        "platform": "Connaissance"
                    },
                    {
                        "checkin": "2018-07-30",
                        "checkout": "2018-08-03",
                        "price": 144,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2018-08-03",
                        "checkout": "2018-08-12",
                        "price": 526,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2018-08-13",
                        "checkout": "2018-08-18",
                        "price": 327,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2018-08-18",
                        "checkout": "2018-08-25",
                        "price": 358,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2018-08-30",
                        "checkout": "2018-09-01",
                        "price": 93,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2018-09-04",
                        "checkout": "2018-09-18",
                        "price": 575,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2018-09-19",
                        "checkout": "2018-09-23",
                        "price": 141,
                        "platform": "Airbnb"
                    }
                ]
            );
            $httpBackend.whenGET(match('api/trips/2019')).respond(
                [
                    {
                        "checkin": "2019-07-06",
                        "checkout": "2019-07-16",
                        "price": 382,
                        "platform": "Retour"
                    },
                    {
                        "checkin": "2019-07-16",
                        "checkout": "2019-07-31",
                        "price": 300,
                        "platform": "Connaissance"
                    },
                    {
                        "checkin": "2019-08-03",
                        "checkout": "2019-08-17",
                        "price": 824,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2019-08-17",
                        "checkout": "2019-09-14",
                        "price": 1176,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2019-09-17",
                        "checkout": "2019-09-21",
                        "price": 205,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2019-09-21",
                        "checkout": "2019-09-25",
                        "price": 185,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2019-09-26",
                        "checkout": "2019-10-16",
                        "price": 667,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2019-10-23",
                        "checkout": "2019-11-02",
                        "price": 324,
                        "platform": "Airbnb"
                    }
                ]
            ); 
            $httpBackend.whenGET(match('api/trips/2020')).respond(
                [
                    {
                        "checkin": "2020-07-25",
                        "checkout": "2020-08-01",
                        "price": 342,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2020-08-02",
                        "checkout": "2020-08-23",
                        "price": 1103,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2020-08-24",
                        "checkout": "2020-08-31",
                        "price": 325,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2020-09-06",
                        "checkout": "2020-09-14",
                        "price": 310,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2020-09-14",
                        "checkout": "2020-09-24",
                        "price": 359,
                        "platform": "Airbnb"
                    },
                ]
            );
            $httpBackend.whenGET(match('api/trips')).respond(
                [
                    {
                        "checkin": "2013-08-10",
                        "checkout": "2013-08-24",
                        "price": 500,
                        "platform": "Le Bon Coin"
                    },
                    {
                        "checkin": "2014-07-24",
                        "checkout": "2014-07-30",
                        "price": 243,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2014-08-06",
                        "checkout": "2014-08-09",
                        "price": 171,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2014-08-09",
                        "checkout": "2014-08-12",
                        "price": 171,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2014-08-14",
                        "checkout": "2014-08-17",
                        "price": 171,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2014-08-17",
                        "checkout": "2014-08-24",
                        "price": 388,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2014-08-31",
                        "checkout": "2014-09-05",
                        "price": 173,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2014-09-09",
                        "checkout": "2014-09-13",
                        "price": 131,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2015-07-12",
                        "checkout": "2015-07-19",
                        "price": 310,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2015-07-23",
                        "checkout": "2015-07-27",
                        "price": 189,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2015-07-31",
                        "checkout": "2015-08-03",
                        "price": 142,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2015-08-03",
                        "checkout": "2015-08-06",
                        "price": 109,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2015-08-07",
                        "checkout": "2015-08-08",
                        "price": 62,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2015-08-08",
                        "checkout": "2015-08-15",
                        "price": 400,
                        "platform": "Le Bon Coin"
                    },
                    {
                        "checkin": "2015-08-16",
                        "checkout": "2015-08-18",
                        "price": 135,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2015-08-18",
                        "checkout": "2015-08-21",
                        "price": 171,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2015-08-21",
                        "checkout": "2015-08-28",
                        "price": 290,
                        "platform": "Le Bon Coin"
                    },
                    {
                        "checkin": "2015-08-28",
                        "checkout": "2015-08-31",
                        "price": 122,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2015-09-03",
                        "checkout": "2015-09-08",
                        "price": 211,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2015-09-11",
                        "checkout": "2015-09-16",
                        "price": 202,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2015-09-17",
                        "checkout": "2015-09-20",
                        "price": 126,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2016-06-15",
                        "checkout": "2016-06-20",
                        "price": 203,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2016-06-26",
                        "checkout": "2016-06-30",
                        "price": 120,
                        "platform": "Connaissance"
                    },
                    {
                        "checkin": "2016-07-01",
                        "checkout": "2016-07-05",
                        "price": 120,
                        "platform": "Connaissance"
                    },
                    {
                        "checkin": "2016-07-12",
                        "checkout": "2016-07-19",
                        "price": 261,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2016-07-22",
                        "checkout": "2016-07-27",
                        "price": 260,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2016-07-27",
                        "checkout": "2016-07-31",
                        "price": 218,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2016-08-01",
                        "checkout": "2016-08-03",
                        "price": 113,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2016-08-05",
                        "checkout": "2016-08-08",
                        "price": 183,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2016-08-08",
                        "checkout": "2016-08-12",
                        "price": 216,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2016-08-12",
                        "checkout": "2016-08-19",
                        "price": 402,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2016-08-19",
                        "checkout": "2016-08-21",
                        "price": 106,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2016-08-22",
                        "checkout": "2016-09-09",
                        "price": 504,
                        "platform": "Le Bon Coin"
                    },
                    {
                        "checkin": "2016-09-21",
                        "checkout": "2016-09-30",
                        "price": 308,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2017-06-24",
                        "checkout": "2017-07-01",
                        "price": 250,
                        "platform": "Le Bon Coin"
                    },
                    {
                        "checkin": "2017-07-17",
                        "checkout": "2017-07-22",
                        "price": 212,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2017-07-25",
                        "checkout": "2017-07-30",
                        "price": 262,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2017-07-30",
                        "checkout": "2017-08-09",
                        "price": 540,
                        "platform": "Le Bon Coin"
                    },
                    {
                        "checkin": "2017-08-10",
                        "checkout": "2017-08-18",
                        "price": 420,
                        "platform": "Retour"
                    },
                    {
                        "checkin": "2017-08-21",
                        "checkout": "2017-08-25",
                        "price": 179,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2017-08-25",
                        "checkout": "2017-08-27",
                        "price": 88,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2017-09-03",
                        "checkout": "2017-09-10",
                        "price": 252,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2017-09-10",
                        "checkout": "2017-09-17",
                        "price": 233,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2017-09-20",
                        "checkout": "2017-09-28",
                        "price": 275,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2018-07-07",
                        "checkout": "2018-07-15",
                        "price": 295,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2018-07-15",
                        "checkout": "2018-07-20",
                        "price": 272,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2018-07-22",
                        "checkout": "2018-07-28",
                        "price": 150,
                        "platform": "Connaissance"
                    },
                    {
                        "checkin": "2018-07-30",
                        "checkout": "2018-08-03",
                        "price": 144,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2018-08-03",
                        "checkout": "2018-08-12",
                        "price": 526,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2018-08-13",
                        "checkout": "2018-08-18",
                        "price": 327,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2018-08-18",
                        "checkout": "2018-08-25",
                        "price": 358,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2018-08-30",
                        "checkout": "2018-09-01",
                        "price": 93,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2018-09-04",
                        "checkout": "2018-09-18",
                        "price": 575,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2018-09-19",
                        "checkout": "2018-09-23",
                        "price": 141,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2019-07-06",
                        "checkout": "2019-07-16",
                        "price": 382,
                        "platform": "Retour"
                    },
                    {
                        "checkin": "2019-07-16",
                        "checkout": "2019-07-31",
                        "price": 300,
                        "platform": "Connaissance"
                    },
                    {
                        "checkin": "2019-08-03",
                        "checkout": "2019-08-17",
                        "price": 824,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2019-08-17",
                        "checkout": "2019-09-14",
                        "price": 1176,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2019-09-17",
                        "checkout": "2019-09-21",
                        "price": 205,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2019-09-21",
                        "checkout": "2019-09-25",
                        "price": 185,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2019-09-26",
                        "checkout": "2019-10-16",
                        "price": 667,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2019-10-23",
                        "checkout": "2019-11-02",
                        "price": 324,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2020-07-25",
                        "checkout": "2020-08-01",
                        "price": 342,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2020-08-02",
                        "checkout": "2020-08-23",
                        "price": 1103,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2020-08-24",
                        "checkout": "2020-08-31",
                        "price": 325,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2020-09-06",
                        "checkout": "2020-09-14",
                        "price": 310,
                        "platform": "Airbnb"
                    },
                    {
                        "checkin": "2020-09-14",
                        "checkout": "2020-09-24",
                        "price": 359,
                        "platform": "Airbnb"
                    }
                ]
            );
            $httpBackend.whenGET().passThrough();			
            $httpBackend.whenPOST().passThrough();         
        }]);



}(angular));
