import { getColors, getInteriors, getTechnologies, getOrders, getWheels } from "./database.js";

const colors = getColors();
const wheels = getWheels();
const technologies = getTechnologies();
const interiors = getInteriors();

const buildOrderListItem = (order) => {
  const foundColor = colors.find((color) => {
    return color.id === order.colorId
  })
  const foundInterior = interiors.find((interior) => {
    return interior.id === order.interiorId
  })
  const foundTech = technologies.find((tech) => {
    return tech.id === order.techId
  })
  const foundWheels = wheels.find((wheel) => {
    return wheel.id === order.wheelId
  })

  const totalCost = foundColor.price + foundInterior.price + foundTech.price + foundWheels.price;
  const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  })
  return `<li>
    Order #${order.id} cost ${costString}
  </li>`
}

export const Orders = () => {
    const orders = getOrders();
    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}