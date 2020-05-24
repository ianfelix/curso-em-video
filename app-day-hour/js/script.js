window.addEventListener("load", () => {
  const msg = document.querySelector("#msg");
  const img = document.querySelector("#img");
  const hour = new Date().getHours();
  const min = new Date().getMinutes();
  msg.innerHTML = `Agora são ${hour}:${min} horas.`;

  if (hour >= 0 && hour <= 12) {
    msg.innerHTML += `<br/>Bom dia!`;
    img.src = "images/fotomanha.jpg";
    document.body.style.background = "#f6be51";
  } else if (hour > 12 && hour <= 18) {
    msg.innerHTML += `<br/>Boa tarde!`;
    document.body.style.background = "#cd6c5b";
    img.src = "images/fototarde.jpg";
  } else {
    msg.innerHTML += `<br/>Boa noite!`;
    document.body.style.background = "#0c1719";
    img.src = "images/fotonoite.jpg";
  }
});
