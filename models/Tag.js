const { Model, DataTypes } = require('sequelize');
// calling the sequelize to connect
const sequelize = require('../config/connection ');

class Tags extends Model {}

Tags.init({
    // add properites here, ex:
    id:{
         type: DataTypes.INTEGER,
         allowNull:false,
         autoIncrement: true,
         primaryKey:true
    },
    tag_name:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize,
    modelName: 'tag',
    
});

// exporting the category class
module.exports=Tags