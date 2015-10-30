angular.module('carWashApp', ['ionic', 'carWashApp.controllers'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
    function($stateProvider, $urlRouterProvider, $httpProvider) {
        
        $stateProvider
            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "view/frame.html",
                controller: 'AppCtrl'
            })
        
            .state('app.main', {
                url: "/main",
                views: {
                    'menuContent': {
                        templateUrl: "view/main.html",
                        controller: 'MainCtrl'
                    }
                }
            })
        
            .state('app.test', {
                url: '/test',
                views: {
                    'menuContent': {
                        templateUrl: 'view/test.html',
                        controller: 'MainCtrl'
                    }
                }
            })
        
            .state('app.reservation', {
                url: '/reservation',
                views: {
                    'menuContent': {
                        templateUrl: 'view/reservation/do.html',
                        controller: 'ReservationCtrl'
                    }
                }
            })

            .state('app.carwash', {
                url: '/carwash',
                views: {
                    'menuContent': {
                        templateUrl: 'view/carwash/carwash.html',
                        controller: 'HistoryCtrl'
                    }
                }
            })

            .state('app.carwash.reservations', {
                url: '/reservations',
                views: {
                    'historyContent': {
                        templateUrl: 'view/carwash/reservations.html',
                        controller: 'HistoryReservationsCtrl'
                    }
                }
            })

            .state('app.carwash.complete', {
                url: '/complete',
                views: {
                    'historyContent': {
                        templateUrl: 'view/carwash/complete.html',
                        controller: 'HistoryCompleteCtrl'
                    }
                }
            })
        
            .state('app.mypage', {
                url: '/mypage',
                views: {
                    'menuContent': {
                        templateUrl: 'view/mypage/mypage.html',
                        controller: 'MypageCtrl'
                    }
                }
            })

            .state('app.customer', {
                url: '/customer',
                views: {
                    'menuContent': {
                        templateUrl: 'view/customer/customer.html',
                        controller: 'CustomerCtrl'
                    }
                }
            })

            .state('app.setting', {
                abstract: true,
                url: '/setting', 
                views: {
                    'menuContent': {
                        template: '<ion-nav-view name="settingContent"></ion-nav-view>',
                        controller: 'SettingCtrl'        
                    }
                }
            })

            .state('app.setting.push', {                
                url: '/push', 
                views: {
                    'settingContent': {
                        templateUrl: 'view/setting/push.html',
                        controller: 'SettingCtrl'
                    }
                }
            })

            .state('app.setting.guide', {
                url: '/guide', 
                views: {
                    'settingContent': {
                        templateUrl: 'view/setting/guide.html',
                        controller: 'SettingCtrl'
                    }
                }
            })

            .state('app.setting.terms', {
                url: '/terms', 
                views: {
                    'settingContent': {
                        templateUrl: 'view/setting/terms.html',
                        controller: 'SettingCtrl'
                    }
                }
            })

            .state('app.setting.version', {
                url: '/version', 
                views: {
                    'settingContent': {
                        templateUrl: 'view/setting/version.html',
                        controller: 'SettingCtrl'
                    }
                }
            })

            .state('app.setting.update', {
                url: '/update', 
                views: {
                    'settingContent': {
                        templateUrl: 'view/setting/update.html',
                        controller: 'SettingCtrl'
                    }
                }
            });
        
        
        $urlRouterProvider.otherwise('/app/main');
    }
]);