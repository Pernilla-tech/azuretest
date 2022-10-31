import React, { useState } from "react";

function FetchApi() {
  const [data, setData] = useState([]);

  //Get Method
  const apiGet = () => {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  return (
    <div>
      My API <br />
      <button onClick={apiGet}>Fetch API</button>
      <br />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h3>{item.setup}</h3>
              <p>
                {item.punchline}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FetchApi