const express=require('express');
const app=express();
app.get('/',(_,res)=>res.json({service:'backend',status:'running'}));
app.get('/health',(_,res)=>res.send('OK'));
app.listen(8080);