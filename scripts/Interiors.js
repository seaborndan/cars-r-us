import { getInteriors, setInteriors } from "./database.js"

const interiorArray = getInteriors();

document.addEventListener(
  "change",
  (event) => {
      if(event.target.id === "interiors") {
        setInteriors(parseInt(event.target.value))
      }
  }
)


export const interiors = () => {
  let html = ""

  html += '<select id="interiors">'
  html += '<option value="0">Select an interior package</option>'

  const arrayOfOptions = interiorArray.map( (interior) => {
          return `<option value="${interior.id}">${interior.seatType}</option>`
      }
  )

  html += arrayOfOptions.join("")
  html += "</select>"
  return html
}