import React from "react";
import Register from "./component/Register";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";
import Displaytim from "./component/Displaytim";
import { Link } from "react-router-dom";
import Createtime from "./component/Createtime";
import Updatetime from "./component/Updatetime";
import Managerrate from "./component/Managerrate";
function App() {
  return (
    <div>
      <header>
        <div>
          <Link to={"/"}>
            <h2>Home</h2>
          </Link>
          <Link to={"/login"}>
            <h2>Login</h2>
          </Link>
          <Link to={"/register"}>
            <h2>Register</h2>
          </Link>
          <Link to={"/dis"}>
            <h2>Display data</h2>
          </Link>
          <Link to={"/timestamp"}>
            <h2>Create timesheet</h2>
          </Link>
        </div>
      </header>

      <Routes>
        <Route path="/timestamp" element={<Createtime />} />
        <Route path="/" element={<Home />} />
        <Route path="/dis" element={<Displaytim />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/update/:id" element={<Updatetime/>}/>
        <Route path="/rating/:id" element={<Managerrate/>}/>
      </Routes>
    </div>
  );
}

export default App;
