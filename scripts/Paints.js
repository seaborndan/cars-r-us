import { getColors, setColors } from "./database.js"

const paintArray = getColors();

document.addEventListener(
  "change",
  (event) => {
      if(event.target.id === "paints") {
        setColors(parseInt(event.target.value))
      }
  }
)

export const paints = () => {
  let html = ""

  html += '<select id="paints">'
  html += '<option value="0">Select a paint color</option>'

  const arrayOfOptions = paintArray.map( (paint) => {
          return `<option value="${paint.id}">${paint.color}</option>`
      }
  )

  html += arrayOfOptions.join("")
  html += "</select>"
  return html
}