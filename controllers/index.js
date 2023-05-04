const express = require('express');
const router = express.Router();

const categoryRoutes = require("./categorycontroller");
//const productRoutes = require("./productcontroller");
//const producttagsRoutes = require("./producttagcontroller");
//const tagRoutes = require("./tagcontroller");

router.get("/",(req,res)=>{
    res.send("this is the homepage!")
})

console.log(categoryRoutes);
router.use("/api/category",categoryRoutes)
//router.use("/api/product",productRoutes)
//router.use("/api/producttag",producttagsRoutes)
//router.use("/api/tag",tagRoutes)

module.exports = router;