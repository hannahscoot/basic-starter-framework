var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix(''); // add configuration
    $routeProvider
        .when("/test", {
            template: "<p>Text loaded from an inline template.</p>"
        })
        .when("/home", {
            templateUrl: "/cap/Components/home/home.html"
        });
});