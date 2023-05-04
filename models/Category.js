const { Model, DataTypes } = require('sequelize');
// calling the sequelize to connect
const sequelize = require('../config/connection ');

class Category extends Model {}

Category.init({
    // add properites here, ex:
    id:{
         type: DataTypes.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
         unique: true
    },
    category_name:{
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
       
    },
    
},{
    sequelize,
    modelName: 'category',
});

// exporting the category class
module.exports=Category