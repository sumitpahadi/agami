import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
function Updatetime() {
    const [data,setdata]=useState(
        {
            date:"",
            description:"",
           
        }
    )
  const { id } = useParams();

  const handlechange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const handleclick = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:4000/edit/"+id,data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <div>
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
</div>;
}

export default Updatetime;
