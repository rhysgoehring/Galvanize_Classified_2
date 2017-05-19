(function(){

   angular.module('app')
      .component('editAd', {
         controller: controller,
         templateUrl: '../templates/classifiedsEdit.template.html',
      })

      controller.$inject = ['adService', '$state']

      function controller(adService, $state) {

         const vm = this
         vm.$onInit = onInit
         vm.updateAd = updateAd

         function onInit() {
            vm.showAd = true
            adService.editAd($state.params.id).then((response) => {
               vm.ad = response
            })
         }

         function updateAd() {
            adService.updateAd($state.params.id, vm.ad).then((response) => {
               $state.go('home')
            })
         }
      }
}())
