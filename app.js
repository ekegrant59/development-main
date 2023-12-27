require('dotenv').config()
const express = require('express') 
const ejs = require('ejs')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const session = require('express-session')
// const adminschema = require('./schema/adminschema')
const userschema = require('./schema/userschema')

const adminkey = process.env.ADMINKEY
const secretkey = process.env.SECRETKEY

const mongodb = process.env.MONGODB
mongoose.connect(mongodb)
.then(() => {
   console.log('Connection successful')
}).catch((err) => {
    console.log(err, "Connection failed")
})

const app = express()
app.use('/assets', express.static('assets')) 
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(express.json())
app.use(
    session({
      resave: false,
      saveUninitialized: true,
      secret: 'secret',
    })
);

app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

app.get('/', function(req,res){ 
    res.render('home')
})

app.get('/about', function(req,res){ 
    res.render('about')
})

app.get('/pricing', function(req,res){ 
    res.render('pricing')
})

app.get('/signup', function(req,res){ 
    res.render('signup')
})

app.post('/signup', async (req,res)=>{
    const details = req.body
    const password11 = details.password11
    const password22 = details.password22
    const email = details.email

    const date = new Date()
    // console.log(date)
    

    userschema.findOne({email: email}, (err, details)=>{
        if(details){
            req.flash('danger', 'This Email Has Already Been Used')
            res.redirect('/signup')
        }else{
            if ( password11 != password22){
                req.flash('danger', 'Your Passwords Do Not Match')
                res.redirect('/signup')
            }else {
                registerUser()
            }
        } 
    })


    async function registerUser(){
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password11,salt)
        const number = "+" + details.country +" "+ details.number
        try{
            const user = new userschema({
                firstName: details.firstName,
                lastName: details.lastName,
                email: details.email,
                encryptedpassword: hashedPassword,
                password: password11,
                number: number,
                date: date
            })
            await user.save()

            // const balance = new balanceSchema({
            //     name: `${details.firstName} ${details.lastName}`,
            //     email: details.email,
            //     balance: 0.00,
            //     ROI: 0.00,
            //     bonus: 0.00
            // })
            // await balance.save()

            console.log(user)
            req.flash('success', 'Sign Up Successful, Please Login')
            res.redirect('/signup')
        }catch(err){
            console.log(err)
        }

    }

})

app.post('/login', (req,res)=>{
    const loginInfo = req.body

    const email = loginInfo.email
    const password = loginInfo.password

    userschema.findOne({email})
    .then((user)=>{
        userschema.findOne({email: email}, (err, details)=>{
            if (!details){
                req.flash('danger', 'User Does Not Exist, Please Try Again')
                res.redirect('/signup')
            } else {
                bcrypt.compare(password, user.encryptedpassword, async (err,data)=>{
                    if (data){
                        const payload = {
                            user: {
                                email: user.email
                            }
                        }
                        const token = jwt.sign(payload, secretkey,{
                            expiresIn: '3600s'
                        })
    
                        res.cookie('logintoken', token, {
                            httpOnly: false
                        })
    
                        // res.redirect('/dashboard')
                        console.log('Login Sucessful')
                        req.flash('success', 'Login Up Successful')
                        res.redirect('/signup')
                    } else {
                        req.flash('danger', 'Incorrect Password, Please Try Again!')
                        res.redirect('/signup')
                    }
                })
            }
        } )
    }).catch((err)=>{
        console.log(err)
    })
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`App started on port ${port}`)
} )