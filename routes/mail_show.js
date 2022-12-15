const express=require('express');
const router=express.Router();

const db=[
    {name:'taro',mail:'taro@gmail.com',},
    {name:'hanako',mail:'hanako@gmail.com'},
    {name:'shinnji',mail:'shinnji@gmail.com'}
];



router.get('/',function(req,res,next) {
    const data={
        title:'mail',message:'This is a mail table',
        db:db,
    };
    res.render('mail_show',data);
});

module.exports = router;