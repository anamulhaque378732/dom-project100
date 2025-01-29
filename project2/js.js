
// change the boack ground color  by genarateing random hex color by clicling a button 
// also display the hex color code a disabled input field

//  step - 1 create a load function
window.onload = () => {
    main()
};


function main() {
    const root = document.getElementById("root");
    const output = document.getElementById("output");
    const btn = document.getElementById("cng-btn");

    btn.addEventListener('click', function () {
        const bgColor = generatHEXColor();


        root.style.backgroundColor = bgColor;
output.value = bgColor;

    });

};
// step -2 -random color genarate function


function generatHEXColor() {
    // #000000
    // 255,255,255
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
};
// step-3 collect all necessary refersnce



 

// step -4 handle the click event







