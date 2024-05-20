import React from "react";
import "./HomePage.css";
let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      // eslint-disable-next-line no-eval
      string = eval(string);
      input.value = string;
      string = "";
    } else if (e.target.innerHTML === "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML === "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
const HomePage = () => {
  return (
    <div>
      {" "}
      <div class="calculator">
        <input type="text" placeholder="0" id="inputBox" />
        <div>
          <button class="opBtn">AC</button>
          <button class="opBtn">DEL</button>
          <button class="opBtn">%</button>
          <button class="opBtn">/</button>
        </div>
        <div>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button class="opBtn">*</button>
        </div>
        <div>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button class="opBtn">-</button>
        </div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button class="opBtn">*</button>
        </div>
        <div>
          <button>00</button>
          <button>0</button>
          <button>.</button>
          <button class="eqlBtn">=</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
