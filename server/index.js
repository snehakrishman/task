const express =require('express');
const cors =require('cors');
const mycon =require('mysql');
const bodyparser =require('body-parser');
 const fileupload =require("file-upload");

const app =express();
app.use(cors());
    
app.use(bodyparser.json());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

const c=mycon.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"snehakrishnan",
    database:"users"
});
c.connect(function(err){
if(err){console.log(err);}
else{console.log("Database connected")}
})


    let sql = 'insert into users(firstname,lastName,email,password) values(?,?,?,?)';

     c.query(sql,[firstname,lastName,email,password],(error,result)=>{  

if(error){
        console.log(error);
    }
    else{
        console.log("Inserted");
    }
})
app.post('/',(req,res)=>{
    let firstname = req.body.firstname;
    let lastName =req .body.lastName;
    let email= req.body.email;
    let password= req.body.password;


    
    app.listen(3004);


})














