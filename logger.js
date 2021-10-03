var url =  'http://mylogger.io/log'

function log(message){
    //send and HTTP request using URL
    console.log(message)
}

module.exports = log;

console.log(__filename);
console.log(__dirname);
