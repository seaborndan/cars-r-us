import { Cars_R_Us } from "./Cars-R-Us.js";

const mainContainer = document.querySelector("#container")

const makeHTML = () => {
  mainContainer.innerHTML = Cars_R_Us();
}

makeHTML();

document.addEventListener("stateChanged", event => {
  console.log("State of data has changed. Regenerating HTML...")
  makeHTML()
})