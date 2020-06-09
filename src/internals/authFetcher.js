import fetch from "node-fetch";
export default (...args) =>
  fetch(...args, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
  }).then((res) => res.json());
