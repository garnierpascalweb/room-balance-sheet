(function (ng) {
    'use strict'; //NOSONAR

    ng
        .module('app')
        .config(AppConfig);
    // .factory("SampleInterceptor", SampleInterceptor);    
    // configuration dun Service de la librairie angular-ui-router   

    AppConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
    function AppConfig($stateProvider, $urlRouterProvider, $httpProvider) {
        $httpProvider.interceptors.push(function ($q) {
            return {
                "request": function (request) {
                    // do something on success
                    // console.log("request - request " + JSON.stringify(request));
                    return request;
                },
                "requestError": function (requestError) {
                    // do something on success
                    //console.log("requestError - requestError" + JSON.stringify(requestError));
                    return requestError;
                },
                "response": function (response) {
                    // do something on success
                    //console.log("response - response" + JSON.stringify(response));
                    return response;
                },
                "responseError": function (rejection) {
                    //if we directly return the response then all errors will go into success
                    //Use $q.reject and everything will work fine                   
                    return $q.reject(rejection);
                    //return rejection;
                }
            };
        }
        );


        $stateProvider
            .state('season', {
                //parent: 'depot-parent',
                url: '/season',
                views: {
                    header: {
                        templateUrl: 'html/nav/nav.html',
                        controller: 'NavController as vm'
                    },
                    content: {
                        templateUrl: 'html/season/season.html',
                        controller: 'SeasonController as vm'
                    },
                    footer: {
                        templateUrl: 'html/footer/footer.html'                        
                    }
                }
            })            
            .state('home', {
                //parent: 'depot-parent',
                url: '/home',
                views: {
                    header: {
                        templateUrl: 'html/nav/nav.html',
                        controller: 'NavController as vm'
                    },
                    content: {
                        templateUrl: 'html/home/home.html',
                        controller: 'HomeController as vm'
                    },
                    footer: {
                        templateUrl: 'html/footer/footer.html'                        
                    }
                }
            });
        // route par dfaut, si / alors redirection vers /recherche
        $urlRouterProvider.otherwise('/home');
    }
}(angular));
