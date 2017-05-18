(function() {
  'use strict'

  angular.module('app')
    .component('ads', {
      controller: adController,
      templateUrl: '../templates/classifieds.template.html',
    })

  adController.$inject = ['adService']

  function adController(adService) {
    const vm = this
    vm.ad = {}
    vm.ads = []
    vm.$onInit = onInit
    vm.filtering = filtering
    vm.showNewAd = showNewAd


  function onInit() {
    adService.getAds().then((response) => {
      vm.ads = response
    })
  }
  function showNewAd(){
    vm.showAds = vm.showAds ? !vm.showAds : true
  }
  function filtering(ordering) {
    vm.selection = ordering
  }

}

}())
