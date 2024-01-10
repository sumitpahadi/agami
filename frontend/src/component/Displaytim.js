import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Displaytim() {
  const type = localStorage.getItem("type");
  console.log(type);

  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/display")
      .then((response) => {
        setdata(response.data.msg);
        console.log(response.data.msg);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div style={{ display: "block", margin: "auto" }}>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <hr/>
            <label htmlFor="date">date</label>
            <input type="text" id="date" name="date" value={item.date} />
            <br />

            <p>rating: is {item.rating}</p>
            <label htmlFor="description">description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={item.description}
            />
            {type === "employee" ? (
              <div>{
                item.rating?<button>you cant edit</button>
                :<Link to={`/update/${item.userid}`}>
                  <button>edit</button>
                </Link>
      }
              </div>
            
            ) : (
              <Link to={`/rating/${item.userid}`}>
                <button>rate the employee</button>
              </Link>
            )}
            <br />
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Displaytim;
