#!/usr/bin/env node


const argv = process.argv;
const https = require('https');
const http = require('http');
const clc = require('./colors')

const helpx = () => {
    console.log(`${argv[0]} ${argv[1]} -u http_link/https_link`);
}


const pos = (_) => {
    console.log(clc.white('[') + clc.green('+') + clc.white(']') + ` ${_}`);
}

const neg = (_) => {
    console.log(clc.white('[') + clc.red('-') + clc.white(']') + ` ${_}`)
}

const action = (_) => {
    console.log(clc.white('[') + clc.yellow('!') + clc.white(']') + ` ${_}`)
}

if (argv[2] == '-u' || argv[2] == '--url'){
    const url = argv[3];

    if (url == undefined){
        console.log(clc.white('Faild Please ')+clc.red('set ')+clc.white('a ')+clc.red('link'));

    }else{

        pos('Try to scan http/https ...')


        if (url.startsWith('https')){
            pos('https <true>');
            action('try to pooling connection ...');

            try{
                https.get(url, (res) => {
                    console.log(res);
                })
            }catch (error){
                console.log(neg(error));
            }
        }else if (url.startsWith('http')){
            pos('http <true>');
            action('try to pooling connection ...');

            try{
                http.get(url, (res) => {
                    console.log(res);
                })
            }catch (error){
                console.log(neg(error));
            }
    }
}}else if (argv[2] == "-h" || argv[2] == "--help"){
    helpx()
}else{
    helpx()
}