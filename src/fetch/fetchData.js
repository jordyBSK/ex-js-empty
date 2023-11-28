/**
 * In javascript we can use the fetch function to make HTTP calls to the network
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * In the next exercise, when the user clicks ont the button with id "click-to-fetch"
 * you have to call this url : https://api.github.com/octocat
 * Then, you have to display the content returned by the api on the "pre" tag with id "display-here"
 */
export function fetchDataOnClick() {
  document.getElementById("click-to-fetch").addEventListener("click", fetchData)

  async function fetchData() {
    try {
      const response = await fetch("https://api.github.com/octocat")

      if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status}`)
        return
      }

      const data = await response.text()
      displayData(data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  function displayData(data) {
    document.getElementById("display-here").innerText = data
  }
}
