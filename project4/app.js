//1. change the boack ground color  by genarateing random hex color by clicling a button
//2. also display the hex color code a disabled input field
// 3. add a button to the hex color code

// add a toast message when you copy it.
// goval variable
let div = null;
//  step - 1 create a load function
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const output = document.getElementById("output");
  const changeBtn = document.getElementById("cng-btn");
  const copyBtn = document.getElementById("copy-btn");

  changeBtn.addEventListener("click", function () {
    const bgColor = generatHEXColor();

    root.style.backgroundColor = bgColor;
    output.value = bgColor;
  });
  copyBtn.addEventListener("click", function () {
    window.navigator.clipboard.writeText(output.value);

    if (div !== null) {
      div.remove();
      div = null;
    }
    genarateToastMessage(`${output.value} copied`);
  });
}
// step -2 -random color genarate function

function generatHEXColor() {
  // #000000
  // 255,255,255
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

function genarateToastMessage(meg) {
  div = document.createElement("div");
  div.innerText = meg;
  div.className = " toast-messsage toast-messsage-slide-in  ";

  div.addEventListener("click", function () {
    div.classList.remove("toast-messsage-slide-in");
    div.classList.add("toast-messsage-slide-out");
    div.addEventListener("animationend", function () {
      div.remove();
      div = null;
    });
  });

  document.body.appendChild(div);
}

// step-3 collect all necessary refersnce

// step -4 handle the change button  click event

// step-5 handle the copy button click event
// step 6 actived toasst message
//7. create dynamic toast message
// 8 clear toast message
