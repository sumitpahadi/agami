const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require("../model/user");
const timesheet = require("../model/timesheet");
const saltround = 10;
const secretkey = "sumitrawat";
const register = async (req, res) => {
  try {
    const { name, email, password, typeuser } = req.body;
    const finding = await user.findOne({ email: email });
    if (finding) {
      return res.status(200).json({
        msg: "email is already register",
      });
    } else {
      const hashpassword = bcrypt.hashSync(password, saltround);
      const userdata = await user.create({
        name: name,
        email: email,
        password: hashpassword,
        typeuser: typeuser,
      });

      return res.status(200).json({
        data: userdata,
        msg: "user is register",
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: error,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password, typeuser } = req.body;
    const finding = await user.findOne({ email: email });

    if (!finding) {
      return res.status(200).json({
        msg: "email is not registered",
      });
    }

    const id = finding._id; // Moved this line after the check for 'finding' existence
  

    const tokken = jwt.sign({ email: email }, secretkey, {
      expiresIn: "21 days",
    });

    const compare = bcrypt.compareSync(password, finding.password);
    if (!compare) {
      return res.status(200).json({
        msg: "password does not match",
      });
    }

    return res.status(200).json({
      token: tokken,
      msg: "user is logged in",
      typeuser: typeuser,
      user: id, // Using 'id' obtained from 'finding._id'
    });
  } catch (error) {
    return res.status(500).json({
      msg: error.message, // Access the error message for better clarity
    });
  }
};

const timesheetdata = async (req, res) => {
  try {
    const { userid, date, description } = req.body;
    console.log(userid, date, description);
    const data = await timesheet.create({
      userid: userid,
      date: date,
      description: description,
    });
 

    return res.status(200).json({
      employeedata: data,
      msg: "data is stored in array",
    });
  } catch (error) {
    return res.status(500).json({
      msg: error,
    });
  }
};

const edittime = async (req, res) => {
  try {
    const { date, description } = req.body;
   
    const setdata = await timesheet.updateOne(
      { userid: req.params.id },
      { $set: { date: date, description: description } }
    );
    
    return res.status(200).json({
      msg: "data is updated",
      data: setdata,
    });
  } catch (error) {
    return res.status(500).josn({
      msg: error,
    });
  }
};
const display=async(req,res)=>{
  try {
    
    
  const data=await timesheet.find({})
  return res.status(200).json({
    msg:data
  })
  
  } catch (error) {
    return res.status(500).josn({
      msg: error,
    });
    
  }
}
const dash = async (req, res) => {
  return res.status(200).json({
    msg: "you are authicated",
  });
};

const managerrating=async(req,res)=>{
  try {
    const { rating } = req.body;
    console.log(req.params.id, rating,"rating is");
    console.log(rating)
    const setdata = await timesheet.updateOne(
      { userid: req.params.id },
      { $set: { rating:rating } }
    );
    console.log(setdata);
    return res.status(200).json({
      msg: "user is rated",
      data: setdata,
    });
  } catch (error) {
    return res.status(500).josn({
      msg: error,
    });
  }

}

module.exports = { register, login, dash, edittime, timesheetdata,display,managerrating };
