export function mouseMovements() {
  const coordinatesParagraph = document.getElementById("mouse-coordinates")

  document.addEventListener("mousemove", (event) => {
    coordinatesParagraph.textContent = `x: ${event.clientX}, y: ${event.clientY}`
  })
}

/**
 * On the page, you have an input with the id "focus-me".
 * You need to add three behaviors to this input.
 * First, when you hover it, you have to display a message in his label with
 *        the text "Yes, you hover me !". and remove the message when the hover is loosed.
 * Second, when you focus the input, you have to change hist border color to a random one,
 *         but different from all the previously used and different from the original one.
 * Third, when you loose focus of the field, you need to reset the border color to the default one.
 */
const input = document.getElementById("focus-me")
const originalColor = input.style.borderColor
export function hoverFocusAndBlur() {
  const labels = document.querySelectorAll("label[for='focus-me']")
  const originalLabels = Array.from(input.labels, (label) => label.textContent)
  const usedColors = [originalColor]

  labels.forEach((label) => {
    input.addEventListener("mouseout", () => {
      input.labels.forEach((label, i) => {
        label.textContent = originalLabels[i]
      })
    })

    input.addEventListener("mouseover", () => {
      input.labels.forEach((label) => {
        label.textContent = "Yes, you hover me!"
      })
    })
  })

  input.addEventListener("focus", () => {
    let newBorderColor
    do {
      let x = Math.floor(Math.random() * 256)
      let y = Math.floor(Math.random() * 256)
      let z = Math.floor(Math.random() * 256)
      newBorderColor = `rgb(${x},${y},${z})`
    } while (usedColors.includes(newBorderColor))
    usedColors.push(newBorderColor)
    input.style.borderColor = newBorderColor
  })

  input.addEventListener("blur", () => {
    input.style.borderColor = originalColor
  })
}

/**
 * On the same input from the previous exercise, you need to add a new behavior :
 * Now, each new letter on the input should randomly change the default color of the input border.
 * You don't need to change the current border color, which is controlled by the previous exercise,
 * but you need to change the original color, the one that will be applied when the
 * precedent exercise will lose focus of the field.
 * Take the opportunity to also apply this colour to the text of the 2 input labels.
 */
export function changesOnInputEvents() {
  input.addEventListener("input", () => {
    const newColor = getRandomColor()
    input.style.borderColor = newColor

    const labels = document.querySelectorAll(`label[for='${input.id}']`)
    labels.forEach((label) => {
      label.style.color = newColor
    })
  })
}

function getRandomColor() {
  let x = Math.floor(Math.random() * 256)
  let y = Math.floor(Math.random() * 256)
  let z = Math.floor(Math.random() * 256)

  return `rgb(${x},${y},${z})`
}
