import getHttpExample from "../scenarios/http/get-http.js";
import postHttpExample from "../scenarios/http/post-http.js";
import { group } from "k6";

export default function () {
  group("Load Testing", () => {
    getHttpExample();
    postHttpExample();
  });  
}