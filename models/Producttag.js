const { Model, DataTypes } = require('sequelize');
// calling the sequelize to connect
const sequelize = require('../config/connection ');

class Producttags extends Model {}

Producttags.init({
    // add properites here, ex:
    id:{
         type: DataTypes.INTEGER,
         allowNull:false,
         autoIncrement: true,
         primaryKey:true
    },
    product_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: 'product',
            key:'id',
          },
    },
    tag_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: 'tag',
            key: 'id',
          },
    },
    
},{
    sequelize,
    modelName: 'producttags',
    
});

// exporting the category class
module.exports=Producttags