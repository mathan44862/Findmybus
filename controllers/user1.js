var nodemailer = require('nodemailer')
let pdf = require('handlebars-pdf')
const puppeteer = require('puppeteer');
const hbs = require('handlebars');
const fs = require('fs-extra');
const mysql=require("mysql")
const url=require("url");
const path = require('path');
var da=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"bus"
})
var db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"bus"
})
var db1=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"route"
})
var db2=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"ticket"
})
da.connect(function(err){
    if (err) throw err;
    else{
        console.log("conneted");
    }
})
db1.connect(function(err){
    if (err) throw err;
    else{
        console.log("conneted");
    }
})
db2.connect(function(err){
    if (err) throw err;
    else{
        console.log("conneted");
    }
})
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'findmybusss@gmail.com',
      pass: 'ilaeejirmulfspxa'
    }
  });
var email
exports.register=(req,res)=>{ 
    email=req.body.email
    var password=req.body.password
    da.query("select email and password from login where email=? and password=?",[email,password],(err,result)=>{
        if(err){
            throw err
        }
        if(result.length > 0){
            res.redirect('/about')
        }
        else{
            return res.render('login',{msg:'*invlaid email and password'})
        }   
    })
}
exports.login=(req,res)=>{
    console.log(req.body)
    email=req.body.email
    var password=req.body.password
    var confirm_password=req.body.confirm_password
    var phonenumber=req.body.phonenumber
    da.query("select email and password from login where email=?",[email],(err,result)=>{
        if(err){
            throw err
        }
        if(result.length >0){
            return res.render('register',{msg:'* email id already taken'})
        }
        else
        {
             if(password==confirm_password){
                da.query('insert into login set ?',{email: email,password: password,phone: phonenumber},(err,result)=>{
                    if(err){
                        throw err
                    }
                    var composemail = {
                    from: 'findmybusss@gmail.com',
                    to: ''+email,
                    subject: 'SUCCESSFULLY LOGIN!',
                    html: '<h4>YOUR ARE SUCESSFULLY LOGIN YOU CAN FIND YOUR BUS AND BOOK YOUR TICKET EASILY</h4>'
                    };
                    transporter.sendMail(composemail, function(error, info){
                    if (error) {
                    console.log(error);
                    } else {
                    console.log('Email sent: ');
                    }
                    });
                    res.redirect('/about')
                })
             }
             else{
                return res.render('register',{msg:'*password do not match'})
             }
        }
    })
}
var a;
var b;
var c=[];
exports.bus=(req,res)=>{
    a=req.body.from;
    b=req.body.to;
    console.log(req.body);
    for(var i=0;i<1;i++){
        if(c.length == 0){
            db.getConnection(function(err,connection){
                if (err) throw err;
                connection.query('SELECT no,time FROM bus WHERE ?  IN (route1,route2,route3,route4,route5,route6,route7,route8,route9,route10) AND ? IN (route1,route2,route3,route4,route5,route6,route7,route8,route9,route10)',[a,b],
                (err,result)=>{
                    for(let i=0;i<result.length;i++){
                        db1.query('SELECT * FROM '+result[i].no,(err,result1)=>
                            {
                                if(err){
                                    console.log(err);
                                }
                                else{
                                    let no=0;
                                    console.log("inside")
                                    for(let j=0;j<result1.length;j++){
                                        if(result1[j].route==a){
                                            no+=1
                                        }
                                        if(result1[j].route==b){
                                            if(result1[j].no > no){
                                                c.push({no:result[i].no,time:result[i].time})
                                            }
                                        }
                                    }
                                } 
                            }
                        )
                    }
                })
            })
        }
        else{
            return res.render("searchbus",{from:a,to:b,c})
        }
    }
}
d=[]
exports.busroute=(req,res)=>{
    let no = req.params.no;
    db1.query("select route,time from "+no,(err,result)=>
    {
        for(let i=0;i<result.length;i++){
            d.push({route:result[i].route,time:result[i].time})
        }
        return res.render("busroute",{title:no,wet:d})
    })
} 
let no
let m
exports.bookticket=(req,res)=>{
    no = req.params.no;
    m = req.params.time
    return res.render("bookticket",{from:a,to:b,no:no,m:m,mail:email})
} 
let T
exports.pay=(req,res)=>{  
    let phoneno = req.body.number
    let nooftickets = req.body.tickets
    let debit = req.body.debitcardno
    let cvv =req.body.cvv
    let expdate=req.body.expdate
    let stop=1
    let tno=0
    db1.query("select route from "+no,(err,result)=>{
        for(let k=0;k < result.length;k++){
            if(result[k].route == a){
                break
            }
            else{
                stop++
            }
        }
    })
    db2.query("select * from "+no,(err,result1)=>{
        if(result1.length > 0){
            tno = result1.length
            console.log(result1.length)
            db2.query("insert into "+no+"(ticket,time,stop) values(?,?,?)",[tno,m,stop],(err,result3)=>{
                if(err){
                    throw err
                }
            }) 
            tno++
            T = ""+no+stop.toString()+tno.toString() ; 
            console.log(T)
            var composemail = {
                from: 'findmybusss@gmail.com',
                to: ''+email,
                subject: 'SUCCESSFULLY BOOK!',
                html: '<h3>Email :'+email+'</h3>'+
                '<h3>From :'+a+'</h3>'+
                '<h3>To : '+b+'</h3>'+
                '<h3>BUS NO:'+no+'</h3>'+
                '<h3>No of tickets : '+nooftickets+'</h3>'+
                '<h3>Phone no : '+phoneno+'</h3>'+
                '<h3>Ticket no :'+T+'</h3>'
                };
                transporter.sendMail(composemail, function(error, info){
                if (error) {
                console.log(error);
                } else {
                console.log('Email sent: ');
                 }
            });
            res.render("pay",{from:a,to:b,ticketno:T,busno:no,time:m,notick:nooftickets,phone:phoneno})
        }
        else{
            db2.query("insert into "+no+"(ticket,time,stop) values(?,?,?)",[tno,m,stop],(err,result3)=>{
                if(err){
                    throw err
                }
            })
            T =""+no+stop.toString()+tno.toString() ; 
            console.log(T)
            var composemail = {
                from: 'findmybusss@gmail.com',
                to: ''+email,
                subject: 'SUCCESSFULLY BOOK!',
                html: '<h3>Email :'+email+'</h3>'+
                '<h3>From :'+a+'</h3>'+
                '<h3>To : '+b+'</h3>'+
                '<h3>No of tickets : '+nooftickets+'</h3>'+
                '<h3>Phone no : '+phoneno+'</h3>'+
                '<h3>Ticket no :'+T+'</h3>'+
                '<h3>Bus no :'+no+'</h3>'
                };
                transporter.sendMail(composemail, function(error, info){
                if (error) {
                console.log(error);
                } else {
                console.log('Email sent: ');
                 }
            });
            res.render("pay",{from:a,to:b,ticketno:T,busno:no,time:m,notick:nooftickets,phone:phoneno})
        }
    }) 
    let document = {
        template: '<h3>EMAIL : {{email}}</h3>'+
        '<h3>FROM : {{from}}</h3>'+
        '<h3>TO : {{to}}</h3>'+
        '<h3>TICKET NO : {{T}}</h3>'+
        '<h3>TIME : {{m}}</h3>'+
        '<h3>BUS NO : {{no}}</h3>'+
        '<h3>HAPPY JOURNEY</h3>',
        context: {
            from:a,
            to:b,
            T:T,
            no:no,
            m:m,
            email:email
        },
        path: "./ticket"+".pdf"
    }
    pdf.create(document)
    .then(res1 => {
        console.log(res1)
    })
    .catch(error => {
    console.error(error)
    })  
}
let password
let time
exports.admin=(req,res)=>{
    var mail=req.body.email
    password=req.body.password
    da.query("select email and password from admin where email=? and password=?",[mail,password],(err,result)=>{
        if(err){
            throw err
        }
        if(result.length > 0){
            db.getConnection(function(err,connection){
                if (err) throw err;
                connection.query('select time from bus where no=?',[password],
                (err,result1)=>{
                    for(var p=0;p<result1.length;p++)
                    {
                        time=result1[p].time
                        return res.render('admincheck',{time:''+time,no:''+password})
                    }
                })
            })
        }
        else{
            return res.render('admin',{msg:'*invlaid email and password'})
        }   
    })
}
exports.admincheck=(req,res)=>{
    var quary='select stop,ticket from '+password
    db2.query(quary,(err,result5)=>{
        if (err){
            throw err
        }
        return res.render('admincheck',{time:''+time,no:''+password,result5})
    })
}