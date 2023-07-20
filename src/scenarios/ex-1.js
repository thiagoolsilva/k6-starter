import { check } from "k6";
import http from "k6/http";

//  k6 run src/scenarios/exercice-1.js -u 5 -d 20s
export default function () {
  let body = {
    "email": "fulano@qa.com",
    "password": "teste"
  }
  let response = http.post("http://localhost:3000/login", body);
  check(response, {
    "checking request duration": (val) => val.timings.duration < 50
  });  
}