const BaseService = ($http, GumgaRest, $q) => {
    const Service = new GumgaRest()
var greeting;

    Service.getGumgaMenu = () => {
        // if () {
        //     greeting = "Good day";
        //     console.log(greeting)
        // }
console.log("teste ------------------------------------------------------------")
        return $http.get('./gumga-menu.json')
        // return $http.get(APILocation.apiLocation + "/public/token/operations/br.com.bibliotec/" + JSON.parse(sessionStorage.getItem("user"))['token'])
        // return $http.get('./menu-usuario.json')
    }

    Service.getKeysJsonUrl = () => {
        return $http.get(APILocation.apiLocation + '/public/token/organizations/' + JSON.parse(sessionStorage.getItem("user"))['token'] + '/')
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
