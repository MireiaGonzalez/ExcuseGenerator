/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

  document.querySelector("#excuse").innerHTML = excuseGenerator();
  console.log("Hello Rigo from the console!");
  function excuseGenerator() {
    let who = [
      "El gato del vecino",
      "La amiga de tu madre",
      "Tu hermano gemelo",
      "El profesor de matemáticas",
      "La directora del instituto",
      "El pájaro de mi tía",
      "Un gato callejero",
      "La mesa de ping-pong de mi padre"
    ];
    let action = [
      "se ha comido",
      "ha roto",
      "me ha robado",
      "ha pisado y ha roto",
      "ha cocinado",
      "ha dado una patada a"
    ];
    let what = [
      "mi casa",
      "mis deberes",
      "mi trabajo de plástica",
      "mi trabajo de fin de curso",
      "mis ganas de quedar contigo",
      "mi ordenador"
    ];
    let when = [
      "esta tarde",
      "por la mañana mientras desayunaba",
      "mientras miraba una serie",
      "mientras yo dormía",
      "cuando tu me has llamado"
    ];

    let randomWho = Math.floor(Math.random() * who.length);
    let randomActWhat = Math.floor(Math.random() * action.length);
    let randomWhen = Math.floor(Math.random() * when.length);

    return (
      who[randomWho] +
      " " +
      action[randomActWhat] +
      " " +
      what[randomActWhat] +
      " " +
      when[randomWhen]
    );
  }
};
