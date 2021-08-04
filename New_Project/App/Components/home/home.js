app.controller("homeCtrl", function (homeFactory) {
    var vm = this;
    vm.test = 'Text loaded from a separate controller.';
    vm.testTwo = homeFactory.getMSG();
});
