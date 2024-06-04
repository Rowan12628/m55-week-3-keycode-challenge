console.log("Hello, world");

const mainBody = document.getElementById("mainBody");

document.addEventListener("keypress", (event) => {
  console.log(event.key);
  console.log(event.which);
  console.log(event.code);

  let keyReport = ` event key = ${event.key}`;
  let whichReport = ` event which = ${event.which}`;
  let codeReport = ` event code = ${event.code}`;

  mainBody.innerHTML =
    `<il id = "key">${keyReport}</il>` +
    `<il id = "which">${whichReport}</il>` +
    `<il id = "code">${codeReport}</il>`;
});
