import http from "k6/http";

// Seu teste fica no escopo da função
export default function () {
  const body = {
    "email": "fulano@qa.com",
    "password": "teste"
  }

  let response = http.post("http://localhost:3000/login", body);
  console.log(response.timings);
}