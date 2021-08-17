const express = require('express');
const router = express.Router();
const multer = require('multer');
const {Product} =require('../models/Product')
const {admin}=require("../middleware/admin");
const {auth}=require("../middleware/auth")
//=================================
//             Product
//=================================

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`)  //시간 + 파일이름
    }
})

var upload = multer({ storage: storage }).single("file")


router.post('/image', (req,res)=>{

    //가져온이미지를 저장 해주면 된다
    upload(req,res, err =>{
        if(err){
            return res.status(400).json({ success: false, err })  //파일저장실패
        }
        return res.json({ success : true, filePath: res.req.file.path, fileName: res.req.file.filename }) //저장위치와 파일이름
    })


})

router.post('/', auth, admin,(req,res)=>{

   //받아온 정보들을 db에 넣어준
    const product=new Product(req.body)
    product.save((err)=>{
        if(err) return res.status(400).json({success:false, err})
        return res.status(200).json({success:true})
    });

})

router.post('/products', (req,res)=>{

    let limit=req.body.limit ? parseInt(req.body.limit) : 20;
    let skip=req.body.skip ? parseInt(req.body.skip) : 0;
    let term = req.body.searchTerm
    let findArgs = {};
    for(let key in req.body.filters){
        if(req.body.filters[key].length>0){

            if(key=="price"){
                findArgs[key]={
                    //greater than equal
                    $gte:req.body.filters[key][0],
                    //les than equal
                    $lte:req.body.filters[key][1]
                }
            }else{
                findArgs[key]=req.body.filters[key];
            }

        }
    }

    if(term){
        Product.find(findArgs)//찾는것 지금은 조건 x
            .find({$text:{$search: term}})
            .populate("writer")//writer의 모든 정보 가져옴
            .skip(skip)
            .limit(limit)
            .exec((err, productsInfo) => {
                if (err) return res.status(400).json({success: false, err})
                return res.status(200).json({success: true, productsInfo, postSize: productsInfo.length})
            })
    }else {
        //product collectoin에 들어있는 모든 상품 정보를 가져오기
        Product.find(findArgs)//찾는것 지금은 조건 x
            .populate("writer")//writer의 모든 정보 가져옴
            .skip(skip)
            .limit(limit)
            .exec((err, productsInfo) => {
                if (err) return res.status(400).json({success: false, err})
                return res.status(200).json({success: true, productsInfo, postSize: productsInfo.length})
            })
    }
})

router.get('/products_by_id', (req,res)=>{

    let type = req.query.type
    let productIds = req.query.id

    if(type==="array"){
        let ids =req.query.id.split(',')
        productIds = ids.map(item=>{
            return item
        })
    }
    //productId를 이용해서 db에서 productid와 같은 상품 가져옴
    Product.find({_id: { $in : productIds}})
        .populate('writer')
        .exec((err,product)=>{
            if(err) return res.status(400).send(err)
            return res.status(200).send( product)
        })
})




module.exports = router;
