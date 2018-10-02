var request = require('request');

let url = `https://api.github.com/users/kenMarquez/repos`;

request({uri:url,
    json: true
},(error,response,body)=>{
    console.log(body);
    
});