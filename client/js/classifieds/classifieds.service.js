(function() {
  'use strict'

  angular.module('app')
    .service('adService', service)

  service.$inject = ['$http']

  function service($http) {

    this.getAds = function() {
      return $http.get('/api/classifieds').then((response) => {
        return response.data
      })
    }
    this.postAd = function(postAd) {
       return $http.post('/api/classifieds', postAd).then((result) => {
         return result.data
       })
     }

  }

}())
