const express=require('express');
const router=express.Router();


router.get('/', function(req, res, next) {
    const data={
    title: 'Hello',
    message:'Welcome to the website',
    id:'',
    pass:''

    };
    res.render('hello', data);
});

router.post('/', function(req, res, next) {
    const data={
    title: 'Hello',
    message:req.body.id+"さん"+"ようこそ",
    id:req.body.id,
    pass:req.body.pass

    };
    res.render('hello', data);
});

router.post('/ajax', function(req, res, next) {
    const result={
        id:req.body.id,
        pass:req.body.pass,
        message:req.body.id+"bcdjchjsdbjfbvhbdhvbdv"
    }
    res.send(result);
}

);

module.exports = router;