"use strict";

const btns = document.getElementsByTagName("button");
const {
  [0]: { style: contentStyle },
} = document.getElementsByClassName("content-wrapper");

const handlerBtn = ({ target: { style, dataset } }) => {
  for (const { style } of btns) {
    style.color = "black";
    style.backgroundColor = "white";
  }
  style.color = dataset.color;
  style.backgroundColor = dataset.bgColor;
  contentStyle.flexDirection = dataset.direction;
};

for (const btn of btns) {
  btn.addEventListener("click", handlerBtn);
}
