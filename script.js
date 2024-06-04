console.log("Hello, world");

const mainBody = document.getElementById("mainBody");

document.addEventListener("keypress", (event) => {
  console.log(event.key);
  console.log(event.which);
  console.log(event.code);

  mainBody.innerHTML = ` event key = ${event.key}`;
  mainBody.innerHTML += ` event which = ${event.which}`;
  mainBody.innerHTML += ` event code = ${event.code}`;
});
