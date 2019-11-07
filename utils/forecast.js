const request = require('request');


const forecast = (latittude,longtitude,callback) => {
    const url = `https://api.darksky.net/forecast/YOURKEY/${latittude},${longtitude}`;
    request({url,json: true},(error,{body}) => {

        const {temperature,precipProbability} = body.currently;
        if(error){
            callback('Unable to find weatrher data',undefined)
        } else if (body.error){
            callback('Unable to find location',undefined)
        } else {
            callback(undefined,
            body.daily.data[0].summary +` It is currently ${temperature} degreees out.There is ${precipProbability} chance of rain`)
        }
    });
};

module.exports = forecast;

