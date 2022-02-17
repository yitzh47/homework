'use strict';

const http = require('http');

let masterStr = '';

for (let index = 2; index < 5; index++) {
    let str = '';
    http.get(process.argv[index], r => {

        r.on('error',(e)=> console.log(e))
        r.on('data',(data)=>{
            str = str + data.toString();
        })
        r.on('end',()=>{
            if (index !== 4) {
                str = str + '\n';
            }     
            masterStr = masterStr + str;
            if(index === 4){
                console.log(masterStr);
            }
        })
    })   
}
