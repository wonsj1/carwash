angular.module('carWashApp.controllers', [])

.controller('AppCtrl', [
    '$scope', '$rootScope', '$ionicSideMenuDelegate', '$state',
    function($scope, $rootScope, $ionicSideMenuDelegate, $state) {

        $scope.platform = ionic.Platform.platform();

        $rootScope.$on('$stateChangeStart', onStateChangeEventHandler);

        function onStateChangeEventHandler(event, toState, toParams, fromState, fromParams) {
            console.log(arguments);
        }

        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };

        $scope.doReservation = function() {
            console.log('go to reservation');
            $state.go('app.reservation');
        };

        $scope.noticeList = [{
            link: '#/notice/11',
            title: '공지사항2',
            content: '안알랴줌'
        }, {
            link: '#/notice/10',
            title: '공지사항1',
            content: '안알랴줌'
        }];

    }
])

.controller('MainCtrl', [
    '$scope', '$rootScope',
    function($scope, $rootScope) {
        console.log('main ctrl ready');

        $scope.washPoint = [{
            point: 70,
            date: '',
            msg: '세차하기 좋은 날입니다.'
        }, {
            point: 50,
            date: '',
            msg: '세차할까?'
        }, {
            point: 20,
            date: '',
            msg: '하지마!!!'
        }]
    }
])

.controller('ReservationCtrl', [
    '$scope', '$rootScope',
    function($scope, $rootScope) {
        console.log('reservation ctrl ready');
    }
])

.controller('HistoryCtrl', [
    '$scope', '$rootScope',
    function($scope, $rootScope) {
        console.log('history ctrl ready');
    }
])

.controller('HistoryReservationsCtrl', [
    '$scope', '$rootScope',
    function($scope, $rootScope) {
        console.log('history reservations list ctrl ready');
    }
])

.controller('HistoryCompleteCtrl', [
    '$scope', '$rootScope',
    function($scope, $rootScope) {
        console.log('history complete list ctrl ready');
    }
])

.controller('MypageCtrl', [
    '$scope', '$rootScope',
    function($scope, $rootScope) {
        console.log('mypage ctrl ready');
    }
])

.controller('CustomerCtrl', [
    '$scope', '$rootScope',
    function($scope, $rootScope) {
        console.log('customer ctrl ready');
    }
])

.controller('SettingCtrl', [
    '$scope', '$rootScope',
    function($scope, $rootScope) {
        console.log('setting ctrl ready');
    }
]);
