const Sequelize = require('sequelize')

//const sequelize = new Sequelize('postgres://mattyk:1234@localhost:5432/myDB');

const connectToDB = async(params) => {

  sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
};

const isInDB = async(sourceLatLong, destLatLong) => {

  const res = {
    answer: false,
    distance: 0
  };

  //select from DB,
  //if the data returned update num++
  //update the res object

  return res;
}

const insertToDB = (sourceLatLong, destLatLong, distance) => {
  //insert row to table: source lat-long, destination lat-long, distance and num=1;
}

const createTable = async(tableName) => {
 
}

module.exports ={insertToDB, isInDB, connectToDB, createTable};

