import React, { useState, useEffect } from "react";
import API from "../utils/API";
import moment from "moment";

function App() {
  const [time, setTime] = useState(null);
  const [woke, setWoke] = useState(null);

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
      <h1>{time}</h1>
      <button
        onClick={(() => setWoke(time), () => API.postTime({ time }))}
      >
        Woke up at
      </button>
      {!woke ? null : <h3>Woke up at: {woke}</h3>}
    </div>
  );
}

export default App;
