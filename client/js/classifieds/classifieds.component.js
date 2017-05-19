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
    vm.$onInit = onInit
    vm.filtering = filtering
    vm.showNewAd = showNewAd
    vm.createAd = createAd
    vm.deleteAd = deleteAd


    function onInit() {
      adService.getAds().then((response) => {
        vm.ads = response
      })
    }

    function showNewAd() {
      vm.showAd = vm.showAd ? !vm.showAd : true
    }

    function createAd() {
      vm.ad = {
        title: vm.ad.title,
        description: vm.ad.description,
        item_image: vm.ad.image,
        price: vm.ad.price,
        created_at: new Date()
      }
      adService.postAd(vm.ad).then((response) => {
        vm.ads.push(response)
        delete vm.ad
      })
    }

    function filtering(ordering) {
      vm.selection = ordering
    }

    function deleteAd(id) {
      adService.deleteAd(id).then((response) => {
        for (let ad of vm.ads) {
          if (ad.id == id) {
            ad = null
          }
        }
        onInit()
      })
    }
  }


}())
