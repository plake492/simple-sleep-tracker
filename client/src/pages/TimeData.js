import React, { useState, useEffect } from "react";
import API from "../utils/API";

function TimeData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.getTimes().then(data => setData(data.data));
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      {data.map((x, i) => (
        <div key={i}>
          <p>time: {x.time}</p>
        </div>
      ))}
    </div>
  );
}

export default TimeData;
