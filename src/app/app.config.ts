export default angular.module('app.config', [])
.config(['$locationProvider', '$urlRouterProvider', ($locationProvider: any, $urlRouterProvider: any) => {
  $locationProvider.html5Mode({ enabled: true, requireBase: false });

  $urlRouterProvider.otherwise('/dashboard');
}]);
