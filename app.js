let buttons = document.querySelectorAll("#button");
let screenTxt = document.querySelector("#screenText");
let clear = document.querySelector("#clear");
let rng = document.querySelector("#rng");
let num1 = 0;
let result = "";


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonPress = button.innerText;
    console.log(buttonPress);
    getNumber(buttonPress);
  });
});

const getNumber = (buttonPress) => {
  if (buttonPress === "AC" || buttonPress === "XX") {
    screenTxt.innerText = "";
    buttons.forEach((button) => {
      button.disabled = false;
    });
  }
  else if (buttonPress === "C" || buttonPress === "◀"){
    let len = screenTxt.innerText.length;
    screenTxt.innerText = screenTxt.innerText.substring(0,len-1)
  }
   else {
    screenTxt.innerText = screenTxt.innerText + `${buttonPress}`;

    if (buttonPress === "=") {
      let new1 = screenTxt.innerHTML;

      let lenEqual = new1.lastIndexOf("=");

      num1 = screenTxt.innerText.substring(0, lenEqual);
      console.log(num1);

      calculate(num1);
    }
  }
};

const calculate = (num1) => {
  result = result = eval(num1);
  let newres = Number(result);
  console.log(newres);
  screenTxt.innerText = `${newres}`;
};





rng.addEventListener('input', () => {

    const value = rng.value;
    

    rng.textContent = value;
    console.log(value);
    setBrightness(value);
});


const setBrightness = (value) => {
    // Calculate opacity
    let opacity = value / 10;
    
    // Set the color style with RGBA and calculated opacity
    screenTxt.style.color = `rgba(42, 45, 43, ${opacity})`;
}