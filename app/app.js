var router = require('angular-ui-router');
var dashboard = angular.module('dashboard', ['ui.router']);

require('./directives');
require('./services');
require('./controllers');

dashboard.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    var helloState = {
        name: 'home',
        url: '/home',
       templateUrl: '../home.html'
    }

    var aboutState = {
        name: 'about',
        url: '/about',
        templateUrl: '../about.html'
    }

     var galleryState = {
        name: 'gallery',
        url: '/gallery',
        templateUrl: '../gallery.html'
    }

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
    $stateProvider.state(galleryState);
});

