const fetch = require('node-fetch')


module.exports = async function buscaCep(uf, cidade, logradouro){
    const response = await fetch(`https://viacep.com.br/ws/${uf}/${cidade}/${logradouro}/json`)
    const json = await response.json()

    return json
}

