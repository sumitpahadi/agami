import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [data, setdata] = useState(false);

  const tokken = localStorage.getItem("tokken");

  useEffect(() => {
    axios
      .get("http://localhost:4000/dash", {
        headers: {
          Authorization: `Bearer ${tokken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setdata(response.data.msg);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return <div>{data ? <h1> {data}</h1> : <h1>you are not authorised</h1>}</div>;
}

export default Home;
