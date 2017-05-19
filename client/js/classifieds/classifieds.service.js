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
       return $http.post('/api/classifieds', postAd).then((response) => {
         return response.data
       })
     }
    this.deleteAd = function(id) {
      return $http.delete(`/api/classifieds/${id}`).then((response) => {
        return response.data
      })
    }

  }

}())
