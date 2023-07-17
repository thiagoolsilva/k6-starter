import firstScenario from "../scenarios/first-scenario.js";
import { group } from "k6";

export default function () {
  group("Load Testing", () => {
      firstScenario();
  });  
}