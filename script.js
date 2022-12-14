// FETCH API
// This tells the browser to pay attention to the following elements:
const id = document.querySelector("#id");
const quote = document.querySelector("#quote");
const button = document.querySelector("#button");

function getQuote() {
  // Call the fetch function:
  fetch("https://api.adviceslip.com/advice")
    // When you've called the fetch function, then a response (stream of data) comes back as part of a Promise
    // A promise initially is in a "Pending" state
    .then((response) => {
      return response.json();
      // The JSON data will be converted (parsed) into native JavaScript objects
      // The response gives a stream of data in the format of JSON
    })
    // .then () is a function that receives a function to be executed when it has been fulfilled
    .then((data) => {
      const number = data.slip.id;
      const advice = data.slip.advice;

      id.textContent = number;
      quote.innerHTML = `<blockquote>&ldquo;${advice}&rdquo;</blockquote>`;
    })
    // .catch () is a function that receives a function to be executed if and when it has been rejected
    .catch((error) => {
      // Log the error to the console to see what's going wrong:
      console.log("Error");
      console.log(error);
    });
}
// Trigger this event when the button is clicked:
button.addEventListener("click", function () {
  getQuote();
});
// Display initial quote when the window is reloaded
window.unload = () => {
  getQuote();
};
