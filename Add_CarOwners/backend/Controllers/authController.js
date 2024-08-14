import { errorHandler } from "../utills/error.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import User from "../models/UserModel.js";
import Carowner from "../models/Carowner.js";

export const signup = async (req, res, next) => {
  const { username, email, password,nic,mobile } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All field are requrired"));
  }

  const hashedpassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    nic,
    mobile,
    password: hashedpassword,
    role:"User"
  });

  try {
    await newUser.save();
    res.json("Sign up successful");
  } catch (error) {
    next(error);
  }
};

// Sign In

export const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password || email === "" || password === "") {
    throw new Error( "All fields are required");
    }

    const validUser = await User.findOne({ email });
    const validOwner=await Carowner.findOne({email})
    // if (!validUser || !validOwner) {
    //   throw new Error( "User not found");
    // }

    let validPassword = false;
    let tokendata = null;
    let userData = null;

    if (validUser) {
      validPassword = bcryptjs.compareSync(password, validUser.password);

       tokendata={
        id:validUser._id,
        email:validUser.email
      }

      userData=validUser

    } else if (validOwner) {
      validPassword = bcryptjs.compareSync(password, validOwner.password);

       tokendata={
        id:validOwner._id,
        email:validOwner.email
      }

      userData=validOwner

    }

    if (!validPassword) {
      throw new Error("Invalid password");
    }

    

    const token = jwt.sign(tokendata, process.env.JWT_SECRET);
    // const { password: pass, ...rest } = validUser._doc;

    const tokenOption ={
      httpOnly:true,
      secure:true
  }

    res.status(200).cookie("access_token", token, tokenOption).json({
      message:"Login successfully",
      token:token,
      data:userData,
      success:true,
      error:false
  });

  } catch (err) {
    res.json({
      message: err.message || err,
      error:true,
      success:false,
    })
  }
};

