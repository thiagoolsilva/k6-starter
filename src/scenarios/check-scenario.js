import http from "k6/http";
import { check } from "k6";


export default function () {
  let response = http.get('https://test.k6.io');

  console.log(response.body.length);

  check(response, {"check response" : (val) => val.timings.duration < 200 })
  check(response, {"check response" : (val) => val.body.length < 200 })

}