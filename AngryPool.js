#!/usr/bin/env node


const argv = process.argv;
const https = require('https');
const http = require('http');
const clc = require('./colors');

const helpx = () => {
    console.log(`${argv[0]} ${argv[1]} -u http_link/https_link [objects]`);
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

    if (url === undefined){
        console.log(clc.white('Faild Please ')+clc.red('set ')+clc.white('a ')+clc.red('link'));
    }else{
        pos('Try to scan https' + clc.red('/') + clc.white('http ...'))
        if (url.startsWith('https')){
            pos('https <true>');
            pos("URL: " + clc.red(url))
            action('try to pooling connection ...');
            console.log()

            if (argv.includes('--status')){

                try{
                    https.get(url, (res) => {
                        pos("Status Code: " + clc.yellow(res.statusCode) + clc.white(''));
                    })
                }catch (error){
                    neg("Status Code: " + error);
                }
            }if (argv.includes('--url')){

                try{
                    https.get(url, (res) => {
                        pos("Url: " + clc.yellow(res.url) + clc.white(''));
                    })
                }catch (error){
                    neg("Url: " + error);
                }
            }if (argv.includes('--header')){

                try{
                    https.get(url, (res) => {
                        pos("Header: " + clc.yellow(res.headers) + clc.white(''));
                    })
                }catch (error){
                    neg("Header: " + error);
                }   
            }if (argv.includes('--raw-header')){

                try{
                    https.get(url, (res) => {
                        pos("Raw Header: " + clc.yellow(res.rawHeaders) + clc.white(''));
                    })
                }catch (error){
                    neg("Raw Header: " + error);
                }   
            }if (argv.includes('--encoding')){

                try{
                    https.get(url, (res) => {
                        pos("Encoding: " + clc.yellow(res.setEncoding) + clc.white(''));
                    })
                }catch (error){
                    neg("Encoding: " + error);
                }   
            }if (argv.includes('--method')){

                try{
                    https.get(url, (res) => {
                        pos("Method: " + clc.yellow(res.method) + clc.white(''));
                    })
                }catch (error){
                    neg("Method: " + error);
                }   
            }if (argv.includes('--construct')){
                

                try{
                    https.get(url, (res) => {
                        pos("Construct: " + clc.yellow(res._construct) + clc.white(''));
                    })
                }catch (error){
                    neg("Construct: " + error);
                }   
            }if (argv.includes('--http-version')){
                

                try{
                    https.get(url, (res) => {
                        pos("HTTP Version: " + clc.yellow(res.httpVersion) + clc.white(''));
                    })
                }catch (error){
                    neg("HTTP Version: " + error);
                }   
            }
        }else if (url.startsWith('http')){
            pos('http <true>');
            pos("URL: " + clc.red(url))
            action('try to pooling connection ...');
            console.log()

            if (argv.includes('--status')){

                try{
                    http.get(url, (res) => {
                        pos("Status Code: " + clc.yellow(res.statusCode) + clc.white(''));
                    })
                }catch (error){
                    neg("Status Code: " + error);
                }
            }if (argv.includes('--url')){

                try{
                    http.get(url, (res) => {
                        pos("Url: " + clc.yellow(res.url) + clc.white(''));
                    })
                }catch (error){
                    neg("Url: " + error);
                }
            }if (argv.includes('--header')){

                try{
                    http.get(url, (res) => {
                        pos("Header: " + clc.yellow(res.headers) + clc.white(''));
                    })
                }catch (error){
                    neg("Header: " + error);
                }   
            }if (argv.includes('--raw-header')){

                try{
                    http.get(url, (res) => {
                        pos("Raw Header: " + clc.yellow(res.rawHeaders) + clc.white(''));
                    })
                }catch (error){
                    neg("Raw Header: " + error);
                }   
            }if (argv.includes('--encoding')){

                try{
                    http.get(url, (res) => {
                        pos("Encoding: " + clc.yellow(res.setEncoding) + clc.white(''));
                    })
                }catch (error){
                    neg("Encoding: " + error);
                }   
            }if (argv.includes('--method')){

                try{
                    http.get(url, (res) => {
                        pos("Method: " + clc.yellow(res.method) + clc.white(''));
                    })
                }catch (error){
                    neg("Method: " + error);
                }   
            }if (argv.includes('--construct')){
                

                try{
                    http.get(url, (res) => {
                        pos("Construct: " + clc.yellow(res._construct) + clc.white(''));
                    })
                }catch (error){
                    neg("Construct: " + error);
                }   
            }if (argv.includes('--http-version')){
                

                try{
                    http.get(url, (res) => {
                        pos("HTTP Version: " + clc.yellow(res.httpVersion) + clc.white(''));
                    })
                }catch (error){
                    neg("HTTP Version: " + error);
                }   
            }
        }else{
            neg("Invalid Type: " + clc.red('NOT ') + clc.white('https') + clc.red('/') + clc.white('http'));
        }
    }
}else if (argv[2] === "-h" || argv[2] === "--help"){
    helpx()
}else{
    helpx()
}
