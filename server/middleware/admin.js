let admin = (req,res,next) => {

    if(req.user.role === 0 ){

        return res.send('관리자만 사용 할수 있는 기능입니다.');
        //0은 관리자 x
    }


    next();

}



module.exports = { admin };