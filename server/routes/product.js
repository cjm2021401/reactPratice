const express = require('express');
const router = express.Router();
const multer = require('multer');
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

module.exports = router;
