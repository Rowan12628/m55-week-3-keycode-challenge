console.log("Hello, world");

const mainBody = document.getElementById("mainBody");

document.addEventListener("keypress", (event) => {
  console.log(event.key);
  console.log(event.which);
  console.log(event.code);

  let keyReport = ` event key<br>${event.key}`;
  let whichReport = ` event which<br>${event.which}`;
  let codeReport = ` event code<br>${event.code}`;

  bigKey.innerHTML = event.key;

  mainBody.innerHTML =
    `<il class = "box">${keyReport}</il>` +
    `<il class = "box">${whichReport}</il>` +
    `<il class = "box">${codeReport}</il>`;
});
