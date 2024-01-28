/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let person = ["Clown ", "Dog ", "Firefighter ", "Snake ", "Grandma "];
  let action = [
    "Destroyed my ",
    "Stole my ",
    "Ate my ",
    "Bit my ",
    "Broke my "
  ];
  let posession = ["Car ", "Phone ", "House ", "Homework ", "Laptop "];
  let time = [
    "On my way to class",
    "While I was driving",
    "Before I could leave",
    "While I was eating",
    "While i was sleeping"
  ];

  let perIndx = Math.floor(Math.random() * person.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let posIndx = Math.floor(Math.random() * posession.length);
  let timIndx = Math.floor(Math.random() * time.length);

  return (
    person[perIndx] +
    "" +
    action[actIndx] +
    "" +
    posession[posIndx] +
    "" +
    time[timIndx]
  );
};
