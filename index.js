const axios = require('axios');


var dados;

function usuarioGitHub(){
    return axios.get('https://api.github.com/users/marcosmariano');
}

exports.dados = usuarioGitHub();

