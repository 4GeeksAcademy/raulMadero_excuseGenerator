/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const excuse = document.querySelector("#excuse");
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  function calculateRandomNumber(max) {
    let result = Math.floor(Math.random() * max);
    return result;
  }
  excuse.innerHTML = `${who[calculateRandomNumber(who.length)]} ${
    action[calculateRandomNumber(action.length)]
  } ${what[calculateRandomNumber(what.length)]} ${when[calculateRandomNumber(when.length)]}`;
};
