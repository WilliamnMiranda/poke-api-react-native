import Api from "../helpers/api"
const pokemonServices = {
    getAll : async function () {
        return (await Api.get('/pokemon?limit=100')).data.results
    },
    getStatusByUrl : async function (url) {
       const response = await fetch(url)
       const data  = await response.json();
       return data
    },
    getByIdOrName : async function (pokemon) {
        return (await Api.get(`/pokemon/${pokemon}`)).data
    },
    getByType : async function (type){
        return (await Api.get(`/type/${type}`)).data.pokemon
    }
}

export default pokemonServices