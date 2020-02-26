import axios from "axios";

// import axios from "axios";

export default {
  getTimes: () => {
    return axios.get("/api/timedata");
  },
  postTime: time => {
    console.log(time);
    return axios.post("/api/timedata", time);
  }
};
