(function() {
  'use strict'

  angular.module('app')
    .service('adService', service)

  service.$inject = ['$http']

  function service($http) {

    this.getAds = function() {
      console.log("in getAds");
      return $http.get('/api/classifieds').then((response) => {

        return response.data
      })
    }
  }

}())
