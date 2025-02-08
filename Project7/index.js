//1. change the boack ground color  by genarateing random hex color by clicling a button
//2. also display the hex color code a disabled input field
// 3. add a button to the hex color code

// 4.add a toast message when you copy it.
// 5.goval variable
// 6. user can type their hex code to own
// show rgb color too, but donot edit it, only show it. user can also copy the rgb color code

let div = null;

window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const output = document.getElementById("output");
  const output2 = document.getElementById("output2");
  const changeBtn = document.getElementById("cng-btn");
  const copyBtn = document.getElementById("copy-btn");

  changeBtn.addEventListener("click", function () {

    const color = generatDecimalColor();
    const hex = generatHEXColor(color);
    const rgb = generatRGBColor(color);

    root.style.backgroundColor = hex;
    output.value =  hex.substring(1);
    output2.value = rgb;
  });
  copyBtn.addEventListener("click", function () {
    window.navigator.clipboard.writeText(`#${output.value}`);

    if (div !== null) {
      div.remove();
      div = null;
    }

    if (isValidHEX(output.value)) {
      genarateToastMessage(`#${output.value} copied`);
    } else {
      alert("invalid color code");
    }
  });

  output.addEventListener("keyup", function (e) {
    e.preventDefault();
    const color = e.target.value;
    if (color) {
      output.value = color.toUpperCase();
      if (color && isValidHEX(color)) {
        root.style.backgroundColor = `#${color}`;
      }
    }
  });
}

// fuction -1 genarate thr random decimal number for red, green, blue
// return as an object
function generatDecimalColor() {
  let red = Math.floor(Math.random() * 255);

  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return { red, green, blue };
}
function generatHEXColor(color) {
  // #000000
  // 255,255,255

  //   const { red, green, blue } = generatDecimalColor();

  // function -2 convert decimal to hex
  const getToCode = (value) => {
    const hex = value.toString(16);

    return hex.length === 1 ? `0${hex}` : hex;
  };
  return `#${getToCode(color.red)}${getToCode(color.green)}${getToCode(
    color.blue
  )}`.toUpperCase();
}

// function -3 genarate  rgba color code

function generatRGBColor(color) {
  //   const { red, green, blue } = generatDecimalColor();

  return `rgb(${color.red},${color.green},${color.blue})`;
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
  if (color.length !== 6) return false;

  return /^[0-9a-fA-F]{6}$/i.test(color);
}

//  step - 1 create a load function
// step -2 -random color genarate function
// step-3 collect all necessary refersnce

// step -4 handle the change button  click event

// step-5 handle the copy button click event
// step 6 actived toasst message
//7. create dynamic toast message
// 8 clear toast message
// 9. create isHEXValid function
// 10. implement change handler on input field
// 11. prevent copying hex code if it not valid
// 12. refactor the color genarator  function
// 13. update color code input field when user type
