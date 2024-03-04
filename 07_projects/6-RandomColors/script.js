//generate random colour
const randomColour = function () {
    let color = '#';
    const hex = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color; 
  };
  let intervalId;
  const startchangeColor = function () {
    if (!intervalId) {
      intervalId = setInterval(changeBgColor, 1000);
    }
    function changeBgColor() {
      document.body.style.backgroundColor = randomColour();
    }
  };
  const stopchangeColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  document.querySelector('#start').addEventListener('click', startchangeColor);
  document.querySelector('#stop').addEventListener('click', stopchangeColor);
  
