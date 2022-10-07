import { getWheels, setWheels } from "./database.js"

const wheelArray = getWheels();

document.addEventListener(
  "change",
  (event) => {
      if(event.target.id === "wheels") {
        setWheels(parseInt(event.target.value))
      }
  }
)



export const wheels = () => {
  let html = ""

  html += '<select id="wheels">'
  html += '<option value="0">Select a wheel package</option>'

  const arrayOfOptions = wheelArray.map( (wheel) => {
          return `<option value="${wheel.id}">${wheel.wheelType}</option>`
      }
  )

  html += arrayOfOptions.join("")
  html += "</select>"
  return html
}