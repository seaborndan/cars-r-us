import { getTechnologies, setTechnologies } from "./database.js"

const techArray = getTechnologies(); 

document.addEventListener(
  "change",
  (event) => {
      if(event.target.id === "tech") {
        setTechnologies(parseInt(event.target.value))
      }
  }
)


export const technologies = () => {
  let html = ""

  html += '<select id="tech">'
  html += '<option value="0">Select a technology package</option>'

  const arrayOfOptions = techArray.map( (tech) => {
          return `<option value="${tech.id}">${tech.name}</option>`
      }
  )

  html += arrayOfOptions.join("")
  html += "</select>"
  return html
}