//1. change the boack ground color  by genarateing random hex color by clicling a button
//2. also display the hex color code a disabled input field
// 3. add a button to the hex color code

// 4.add a toast message when you copy it.
// 5.goval variable
// 6. user can type their hex code to own

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

    if (isValidHEX(output.value)) {
      genarateToastMessage(`${output.value} copied`);
    } else {
      alert("invalid color code");
    }
  });

  output.addEventListener("keyup", function (e) {
    e.preventDefault();
    const color = e.target.value;
    if (color && isValidHEX(color)) {
      root.style.backgroundColor = color;
    }
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

/***
 * @param {string} color : ;
 */
function isValidHEX(color) {
  if (color.length !== 7) return false;
  if (color[0] !== "#") return false;
  color = color.substring(1);
  return /^[0-9a-fA-F]{6}$/i.test(color);
}

// step-3 collect all necessary refersnce

// step -4 handle the change button  click event

// step-5 handle the copy button click event
// step 6 actived toasst message
//7. create dynamic toast message
// 8 clear toast message
// 9. create isHEXValid function
// 10. implement change handler on input field
// 11. prevent copying hex code if it not valid
// 12. 


