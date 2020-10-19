import _ from "lodash";
import "./style.css";
import Icon from "./icon.png";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  // Lodash, now imported by this script

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");
  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.classList.add("icon");

  btn.innerHTML = "Click me and check the console!";
  btn.classList.add("button");
  btn.onclick = printMe;

  element.appendChild(btn);
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
