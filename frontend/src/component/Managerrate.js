import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Managerrate() {
  const [data, setdata] = useState({
    rating: "",
  });
  const { id } = useParams();

  const handlechange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const handleclick = (e) => {
    e.preventDefault();
    console.log("rating data", data);
    axios
      .put("http://localhost:4000/rating/" + id, data)
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
          <label htmlFor="rating">give rating to employee</label>
          <select name="rating" id="rating" onChange={handlechange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input type="submit" value={"submit"} onClick={handleclick} />
        </form>
      </div>
    </div>
  );
}

export default Managerrate;
