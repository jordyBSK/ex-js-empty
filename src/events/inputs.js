/**
 * You should trigger an alert when the user hits enter after entering text on the
 * input with id "write-some-text". The text on the alert should be the text typed in the input.
 * If input his empty, you should not trigger the alert
 */
export function displayInputContentInAlertOnEnterKey() {
  //
  const text = document.getElementById("write-some-text")

  text.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      alert(text.value)
    }
  })
}

/**
 * On the page, you have an HTML input with the id "list-input".
 * The user can write text into it, and when he presses enter or blur the field,
 * the text should be added to a list of elements with id "list".
 */
export function addElementsInListOnEnterKey() {
  //
  const text = document.getElementById("list-input")
  const list = document.getElementById("list")
  function addLI() {
    const li = document.createElement("li")
    li.className
    li.textContent = text.value
    list.appendChild(li)
    text.value = ""
  }

  text.addEventListener("keypress", (event) => {
    if (text.value !== "") {
      if (event.key === "Enter") {
        addLI()
      }
    }
  })
  text.addEventListener("blur", (event) => {
    console.log(event)
    if (text.value !== "") {
      if (event.isTrusted === true) {
        addLI()
      }
    }
  })
}

/**
 * Add functionalities to the list. Now, when you click on one of the li, the element should be removed.
 * Use the same list as the previous exercise. "#list"
 */
export function removeElementsFromListWhenClicked() {
  //
  const list = document.getElementById("list")

  list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      event.target.remove()
    }
  })
}
