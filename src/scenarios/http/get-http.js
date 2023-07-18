import http from "k6/http";

// 1. You need to start the local web service using the project https://github.com/ServeRest/ServeRest
export default function () {
  let response = http.get('http://localhost:3000/usuarios', {
    headers: {
      "Content-type": "application/json"
    }
  });
  console.log(JSON.stringify(response, null, 2));
}