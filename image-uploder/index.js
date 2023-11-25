const express = require("express");
const multer=require("multer")
const path = require("path")
const app=express();
const port = 8000;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
     return  cb(null, './uploads')
    },
    filename: function (req, file, cb) {

      return cb(null, `${Date.now()}-${file.originalname}`)
    }
  })
  
const upload = multer({ storage })
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))

app.get("/",(req,res)=>{
    return res.render("homepage");
});

app.use(express.urlencoded({extended:false}));

app.post("/profile",upload.single("profileimage"),(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    return res.redirect("/")
})

app.listen(port,()=>{
    console.log(`the srver started in ${port}`);
});