const axios = require('axios');
const i = require('./index');


i.dados.then(req=>{
    console.log(req.data);
});

axios.get('https://api.github.com/users/marcosmariano').then(req=>{
    console.log(req.data);
}).catch(function(error){
    if(error){
        console.log(error);
    }
});


axios.post('https://jsonplaceholder.typicode.com/posts').then(req=>{
    console.log(req.data);
});

axios.post('https://minhaapi/v1/registrar/usuario',{email:'sss'})