const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please Give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please Give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    result.innerHTML = `<span>${bmi}</span>`;
  }
  const toPrint  = (weight / ((height * height) / 10000)).toFixed(2);
  if (toPrint < 18.6) {
    result.innerHTML = `BMI is ${toPrint}, The person is Under Weight`;
  } else if (18.6 <= toPrint >= 24.9) {
    result.innerHTML = `BMI is ${toPrint}, The person is Normal`;
  } else {
    result.innerHTML = `BMI is ${toPrint}, The person is Overweight`;
  }
});