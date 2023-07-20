import { check } from "k6";
import http from "k6/http";

export const options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 1, // 1 iteration every second
      timeUnit: '1s', // 1 iterations per second, i.e. 1000 RPS
      duration: '20s',
      preAllocatedVUs: 10, // how large the initial pool of VUs would be
      maxVUs: 10, // if the preAllocatedVUs are not enough, we can initialize more
    },
  },
};

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