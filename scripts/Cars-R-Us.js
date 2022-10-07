import { wheels } from "./Wheels.js";
import { technologies } from "./Technologies.js";
import { paints } from "./Paints.js";
import { interiors } from "./Interiors.js";
import { Orders } from "./Orders.js"
import {addCustomOrder} from "./database.js"
document.addEventListener(
  "click",
  (event) => {
      if(event.target.id === "orderButton") {
          addCustomOrder();
      }
  }
)



export const Cars_R_Us = () => {
  return `
      <h1> Cars-R-Us </h1>

      <article class="choices">
        <section class = "choices_paints">
          <h2>Paints</h2>
          ${paints()}
        </section>
        <section class = "choices_interiors">
          <h2>Interiors</h2>
          ${interiors()}
        </section>
        <section class = "choices_technologies">
          <h2>Technologies</h2>
          ${technologies()}
        </section>
        <section class = "choices_wheels">
          <h2>Wheels</h2>
          ${wheels()}
        </section>
      </article>

      <article>
        <button id="orderButton">Create Custom Order</button>
      </article>

      <article class="customOrders">
        <h2>Custom Car Orders</h2>
        ${Orders()}
      </article>
  `
}