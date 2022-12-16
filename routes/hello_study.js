const express=require('express');
const router=express.Router();

router.get('/',function(req,res,next){
    if(req.session.comments==undefined){
        req.session.comments=[];
    }
    const data={
        title:'Hello',
        message:'Fill in the form',
        comments: req.session.comments
    }
    res.render('hello_study',data);

});

router.post('/',function(req,res,next){
    req.session.comments.unshift(req.body.comment);
    const data={
        title:'Hello',
        message:'the save of your comments',
        comments: req.session.comments
    }
    res.render('hello_study',data);
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