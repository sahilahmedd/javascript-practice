const form = document.querySelector('form');

form.addEventListener("submit", (e)=>{
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please enter vaild height ${height}`;
  } else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please enter vaild weight ${weight}`;
  } else {
    const bmi = (weight / ((height*height) / 10000)).toFixed(2);
    // Show result
    if (bmi < 18.6) {
      results.innerHTML = `<span>Your BMI is: ${bmi}, you are underweight</span>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>Your BMI is: ${bmi}, you are Normal</span>`;
    } else {
      results.innerHTML = `<span>Your BMI is: ${bmi}, you are Overweight</span>`;
    }    
  }

})