const { Model, DataTypes } = require('sequelize');
// calling the sequelize to connect
const sequelize = require('../config/connection ');

class Product extends Model {}

Product.init({
    // add properites here, ex:
    id:{
         type: DataTypes.INTEGER,
         allowNull:false,
         autoIncrement: true,
         primaryKey:true
    },
    product_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.DECIMAL,
        allowNull:false,
        validate: {
            isDecimal: true,
          },
     },
     stock:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue: 10,
        validate: {
            isNumeric: true,
          },
    },
    category_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: 'category',
            key:'id',
          },
    },
    
},{
    sequelize,
    modelName: 'product',
    
});

// exporting the category class
module.exports=Product