app.service('homeFactory', function () {
    var vm = this;

    vm.getMSG = function () {
        return 'Text loaded from a separate factory.';
    }
});