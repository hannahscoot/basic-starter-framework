var app = angular.module("myApp");

app.controller('homeCtrl', [function () {
    var vm = this;
    vm.test = "Text loaded from a seperate controller";
}])