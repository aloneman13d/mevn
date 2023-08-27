const { Router } = require("express");
const router = Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Register
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body  
    // return res.json({
    //     username:username,
    //     password:password
    // })
    if(username==""||password==""){
        return res.json({
            status:"bad",
            msg:" Username Password เป็นค่าว่าง"
        })
    }
    if(!username||!password){
        return res.json({
            status:"bad",
            msg:" ไม่มีตัวแปร Username Password"
        })
    }
    if (username.trim().length < 5) {
      return res.json({
        status: "bad",
        msg: "Username ต้องไม่ต่ำกว่า 5 ตัวอักษร",
      });
    }
    if (username.trim().length > 20) { 
      return res.json({
        status: "bad",
        msg: "สามารถกรอกตัวอักษรได้ไม่เกิน 20 ตัวอักษร", 
      });
    }
    if (password.trim().length < 5) {
      return res.json({
        status: "bad",
        msg: "Password ต้องไม่ต่ำกว่า 5 ตัวอักษร",
      });
    }

    const exisUser = await User.findOne({ username });
    if (exisUser) {
      return res.json({
        status: "bad",
        msg: "Username นี้มีการใช้งานแล้ว",
      });
    }

    const hashedPass = await bcrypt.hash(password,20)

    const newUser = await new User({
        username: username.trim(),
        password: hashedPass
    })

    const savedUser = await newUser.save()

    const token = await jwt.sign({savedUser},"tokensecret")
    res.json({
        status:"ok",
        msg:"บันทึกข้อมูบเรียบร้อย ",
        user:savedUser,
        token,
    })
 
  } catch (error) {
    console.log(error.message)
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body  

    if(username==""||password==""){
        return res.json({
            status:"bad",
            msg:" Username Password เป็นค่าว่าง"
        })
    }
    if(!username||!password){
        return res.json({
            status:"bad",
            msg:" ไม่มีตัวแปร Username Password"
        })
    }

    const exisUser = await User.findOne({ username });
    if (!exisUser) {
      return res.json({
        status: "bad",
        msg: "Username ไม่ถูกต้อง",
      });
    }

    const comparePass = await bcrypt.compare(password,exisUser.password)

    if(!comparePass){
        return res.json({
            status:"bad",
            msg:" รหัสผ่านไม่ถูกต้อง"
        })
    }

    const token = await jwt.sign({user:exisUser},"tokensecret")
    res.json({
        status:"ok",
        msg:"เข้าสู่ระบบสำเร็จ",
        user:exisUser,
        token,
    })
 
  } catch (error) {
    console.log(error.message)
  }
});

module.exports = router;
