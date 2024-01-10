const jwt = require("jsonwebtoken");
const secretkey = "sumitrawat";
const userauth = async (req, res,next) => 
{
  try {
    const bearer = req.headers["authorization"];
  if (bearer == undefined) {
    return res.status(401).json({
      msg: "no tokken",
    });
  } else {
    const token = bearer.split(" ")[1];
    console.log(token);
    if (token == undefined) {
      return res.status(401).json({
        msg: "there is no tooken",
      });
    } else {
     
        const verify = await jwt.verify(token, secretkey);
        if (verify) {
          next();
        } else {
          return res.status(401).json({
            msg: "user is authorized",
          });
        }
   
    }
  }
    
  } catch (error) {
    return res.status(500).json(
        {
            msg:"error occure",
            err:error
        }
    )
    
  }
};

module.exports = userauth;
