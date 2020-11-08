const url = require('url');
const gotoGoogle = require('./goToGoogle');
const DBFunctions = require('./DBRequests');

const mainProccess = async(req, response) => {
    //get the params
    const queryObject = url.parse(req.url,true).query;

    // geocoding the addresses
    const sourceLatLong = await gotoGoogle.geocodeAddress(queryObject.source);
    const destLatLong = await gotoGoogle.geocodeAddress(queryObject.destination);

    if (sourceLatLong == destLatLong) {  res.distance = 0; } 
    else {

        //request from DB -
        const res = await DBFunctions.isInDB(sourceLatLong, destLatLong);
        if(!res.answer){// if no in DB

            //google api request to get distance
            const distance = await gotoGoogle.getDistanceMatrix(queryObject.source, queryObject.destination);

            //insert data to DB
            DBFunctions.insertToDB(sourceLatLong, destLatLong, distance);
            res.distance = distance;
        }
    }
return res.distance;
}


module.exports = {mainProccess}