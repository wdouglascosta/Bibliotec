
const BaseController = ($timeout, $sce, BaseService, $state, $scope, gumgaController, $filter, $compile, GumgaWebStorage) => {
    document.querySelector('.gumga-layout nav.gl-nav').classList.remove('collapsed')
    $scope.keysJsonUrl = []
    $scope.gumgaMenu = []
    $scope.profiles = ["Usuário", "Balconista"]


    $scope.info = GumgaWebStorage.getSessionStorageItem('user')

    $scope.orgAtual = JSON.parse(sessionStorage.getItem('user'))

    BaseService.getGumgaMenu()
        .then(function(response) {
            $scope.gumgaMenu = response.data
        })

    BaseService.getKeysJsonUrl()
        .then(function(response) {
            $scope.keysJsonUrl = response.data
        })

    BaseService.listOrganizations()
        .then(function(response) {
            // $scope.organizations = response.data
        })

    $scope.navCollapse = function () {
        document.querySelector('.gumga-layout nav.gl-nav').classList.toggle('collapsed')
    }

    $scope.changeProfile = function(perfil) {
        console.log(perfil)



        // BaseService.changeOrganization(organization.id)
        //     .then(function(response) {
        //         var token = response.data.token || JSON.parse(sessionStorage.getItem('user')).token
        //         response.data.token = token
        //         sessionStorage.setItem('user', JSON.stringify(response.data))
        //         location.reload(true)
        //     })
    }

    $scope.logout = function() {
        sessionStorage.clear();
        $state.go('app.login')
    }


    // $http.get('gumga-menu.json')
    //     .then(function (response) {
    //         $scope.gumgaMenu = response.data;
    //     });
    //
    // $rootScope.isPermission = function(key){
    //     $rootScope.keys = $rootScope.keys || [];
    //     return $rootScope.keys.filter(function(k){
    //         return k == key;
    //     }).length > 0;

    // }
    //
    // $http.get(APILocation.apiLocation + '/api/permissions')
    //     .then(function (response) {
    //         $rootScope.keys = response.data;
    //         $rootScope.keysMenu = response.data;
    //     });



}

BaseController.$inject = ['$timeout', '$sce', 'BaseService', '$state', '$scope', 'gumgaController', '$filter', '$compile', 'GumgaWebStorage']

module.exports = BaseController
