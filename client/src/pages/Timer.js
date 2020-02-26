import React, { useState, useEffect } from "react";
import API from "../utils/API";
import moment from "moment";

function App() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(moment().format("h:mm:ss a"));
    }, 1000);

    return () => window.clearInterval(id);
  }, []);

  if (!time) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container">
      <p>{time}</p>
      <button onClick={() => API.postTime({ time })}>Woke up at</button>
    </div>
  );
}

export default App;
