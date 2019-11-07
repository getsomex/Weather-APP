const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const address = process.argv[2];


if(!address){
  console.log('Please provide address');

} else{

  geoCode(address,(error,{latitude,longtitude,location}) => {
    // const {latitude,longtitude,location} = data;
    if(error){     
      return console.log(error)
    }
   
      forecast(latitude, longtitude, (error, forecast) => {      
        if(error){
          return console.log(error)
        }
        console.log(location)
        console.log(forecast)
      })
  });
}













