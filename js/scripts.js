// UI Logic

function getShoutingValues()  {
  const echoInput = document.getElementById("echoInput").value;
  console.log("echoInput =" + echoInput)
  document.querySelector("span#echoInput") = echoInput.toUpperCase();
}

function setFormSubmissionEventHandler()  {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    console.log("Submit form successfully reached.");
    event.preventDefault();
    getShoutingValues();
    document.querySelector("div#shout").removeAttribute("class");
  }
}

window.onload = function()  {
  setFormSubmissionEventHandler();
}