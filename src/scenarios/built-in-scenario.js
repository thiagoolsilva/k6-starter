import http from "k6/http";


export default function () {
  http.setResponseCallback(http.expectedStatuses(201));
  let response = http.get('https://test.k6.io');

  http.setResponseCallback(http.expectedStatuses(200));
  let response2 = http.get('https://test.k6.io');
  
}