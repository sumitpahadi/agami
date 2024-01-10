const routes = require("express").Router();
const {
  register,
  login,
  dash,
  edittime,
  timesheetdata,
  display,managerrating
} = require("../controller/usercontroller");
const userauth = require("../middleware/userauth");
routes.post("/register", register);
routes.post("/login", login);
routes.post("/time", timesheetdata);
routes.put("/edit/:id", edittime);

routes.get("/dash", userauth, dash);
routes.get("/display", display);
routes.put("/rating/:id", managerrating);
module.exports = routes;
