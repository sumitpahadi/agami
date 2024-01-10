import React, { useState } from "react";
import axios from "axios";

function Createtime() {
    const id=localStorage.getItem("id")
  const [data, setdata] = useState({
    userid: id,
    date: "",
    description: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };
  const handleclick = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/time", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div>
        <form action="">
          <label htmlFor="date">Date</label>
          <input
            type="text"
            id="date"
            name="date"
            placeholder="enter the date"
            onChange={handlechange}
            value={data.date}
          />
          <br />
          <br />
          <label htmlFor="description">description</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="enter the description"
            onChange={handlechange}
            value={data.description}
          />
          <br />
          <br />
          <input type="submit" value={"submit"} onClick={handleclick} />
        </form>
      </div>
    </div>
  );
}

export default Createtime;
