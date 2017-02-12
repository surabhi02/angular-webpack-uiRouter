'use strict';

DashboardController.$inject = ['GithubStatusService'];
function DashboardController(gh) {
    var _this = this;
    _this.github = "'payal's project";
    console.log(_this.github);
}

module.exports = DashboardController;