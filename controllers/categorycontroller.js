const express = require('express');
const router = express.Router();
const Category = require('../models/Category');


router.get("/",(req,res)=>{
    Category.findAll().then(data=>{
        res.json(data)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"invalid syntax hence ,error occurred",err})
    })
})
router.post("/",(req,res)=>{
    Category.create({
        category_name:req.body.name,  
    }).then(newAni=>{
        res.json(newAni)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"invalid syntax hence,error occurred",err})
    })
})
// post the data
// router.post("/",async (req,res)=>{
//     try{
//     const newdata = await Category.create(req.body)
//     res.status(200).json(newdata)
//     }catch(err){
//         console.log(err)
//         res.status(500).json({msg:"category name already exist, please enter new category name"})
//     }
//     })

// fetch the data with id
  router.get('/:id', (req, res) => {
    Category.findByPk(req.params.id).then(ans=>{
        if(!ans){
            return res.status(404).json({msg:"no category with that id in database!"})
        }
        res.json(ans)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
})

// updates the category name with id
router.put('/:id', (req, res) => {
    Category.update({
        category_name:req.body.name
    },{
        where:{
            id:req.params.id
        }
    }).then(ans=>{
        if(!ans[0]){
            return res.status(404).json({msg:"no category with this id in database!"})
        }
        res.json(ans)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
      });
  
    // deletes the particular item with id

    router.delete('/:id', (req, res) => {
        Category.destroy({
            where:{
                id:req.params.id
            }
        }).then(ans=>{
            if(!ans){
                return res.status(404).json({msg:"no category with this id in database!"})
            }
            res.json(ans)
        }).catch(err=>{
            console.log(err);
            res.status(500).json({msg:"error occurred",err})
        })
  });
  

module.exports = router;