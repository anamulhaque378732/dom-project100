
// change the boack ground color in click

//  step - 1 create a load function
window.onload = () => {
    main()
};


function main() {
    const root = document.getElementById("root");
    const btn = document.getElementById("cng-btn")
    console.log(root, btn);


    btn.addEventListener('click', function () {
        const bgColor = generateRGBColor();
        root.style.backgroundColor = bgColor
    })
};
// step -2 -random color genarate function


function generateRGBColor() {
    // rgb(0,0,0) , rgb(255,255,255)
    let red = Math.floor(Math.random() * 255);

    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue})`

};
// step-3 collect all necessary refersnce




// step -4 handle the click event







