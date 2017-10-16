const BaseService = ($http, GumgaRest, $q) => {
    const Service = new GumgaRest()
var greeting;

    Service.getGumgaMenu = () => {
        if () {
            greeting = "Good day";
            console.log(greeting)
        }
console.log("teste ------------------------------------------------------------")
        // return $http.get('./gumga-menu.json')
        return $http.get('./menu-usuario.json')
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

    Service.changeOrganization = (organizationId) => {
        var usr = JSON.parse(sessionStorage.getItem('user'))
        var token = usr.token
        return $http.get(APILocation.apiLocation + '/public/token/changeorganization/' + token + '/' + organizationId)
    }


    return Service
}

BaseService.$inject = ['$http', 'GumgaRest', '$q']

module.exports = BaseService;
