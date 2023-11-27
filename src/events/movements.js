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
export function hoverFocusAndBlur() {
  const input = document.getElementById("focus-me")
  const originalBorderColor = window.getComputedStyle(input).borderColor
  let labels = document.querySelectorAll("label[for='focus-me']")
  let originalLabels = []

  for (let i of input.labels) {
    originalLabels.push(i.textContent)
  }

  labels.forEach((label) => {
    input.addEventListener("mouseout", () => {
      for (let i = 0; i < input.labels.length; i++) {
        input.labels[i].textContent = originalLabels[i]
      }
    })

    input.addEventListener("mouseover", () => {
      for (let i of input.labels) {
        i.textContent = "Yes, you hover me !"
      }
    })
  })

  input.addEventListener("focus", () => {
    let newBorderColor
    do {
      let x = Math.floor(Math.random() * 256)
      let y = Math.floor(Math.random() * 256)
      let z = Math.floor(Math.random() * 256)
      newBorderColor = `rgb(${x},${y},${z})`
    } while (newBorderColor === originalBorderColor)

    input.style.borderColor = newBorderColor
  })

  input.addEventListener("blur", () => {
    input.style.borderColor = originalBorderColor
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
  //
}
