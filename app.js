const express = require("express");
const app = express();
const userController = require("./controllers/user1");
const { use } = require("./routers/auth");
const routes = require("./routers/auth3")
app.set('view engine','hbs');
app.use(express.static('public'));

app.get('',(req,res)=>{
    res.render('login');
});
app.get('/register',(req,res)=>{
    res.render('register');
});
app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/admin',(req,res)=>{
    res.render('admin');
});
app.get('/admincheck',(req,res)=>{
    res.render('admincheck');
});
app.get('/searchbus',(req,res)=>{
    res.render('searchbus');
});
app.get('/bookticket',(req,res)=>{
    res.render('bookticket'); 
});
app.get('/pay',(req,res)=>{
    res.render('pay');
});
app.get('/busroute',(req,res)=>{
    res.render('busroute');
});
app.use(express.urlencoded({extended:false}));
app.use("/auth",require("./routers/auth"));
app.use("/auth1",require("./routers/auth1"));
app.use("/auth2",require("./routers/auth2"));7
app.use("/",routes);
app.listen(5000);
