const BaseService = ($http, GumgaRest, $q) => {
    const Service = new GumgaRest()
var profile


    Service.getGumgaMenu = (profile) => {
        // if (profile == "Usuário") {
        //     return $http.get('./menu-usuario.json')
        // }else if (profile == "Balconista"){
        //     return $http.get('./gumga-menu.json')
        // }
        return $http.get('./menu-usuario.json')
        // return $http.get('./gumga-menu.json')
    }

    Service.getKeysJsonUrl = () => {
        return $http.get('./keys.json')
    }

    Service.listOrganizations = () => {
        var usr = JSON.parse(sessionStorage.getItem('user'))
        if(usr && usr.token) {
            var token = usr.token
            return $http.get(APILocation.apiLocation + '/public/token/organizations/' + token + '/')
        }
        return $q(function(resolve) {
            resolve('Não tem usuario na session storage')
        })
    }




    return Service
}

BaseService.$inject = ['$http', 'GumgaRest', '$q']

module.exports = BaseService;
