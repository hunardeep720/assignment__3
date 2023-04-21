/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
const full_day = 35;
const half_day = 20;
let days = [];
let select_day = document.querySelectorAll('.day-selector li');
let full_button = document.getElementById('full');
let half_button = document.getElementById('half');
let clear_button = document.getElementById('clear-button');
let cost = document.getElementById('calculated-cost');


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function toggleDaySelection(event) {
  let clickedDay = event.target;
  if (!days.includes(clickedDay.id)) {
    days.push(clickedDay.id);
    clickedDay.classList.add('clicked');
  } else {
    let dayIndex = days.indexOf(clickedDay.id);
    days.splice(dayIndex, 1);
    clickedDay.classList.remove('clicked');
  }
  calculateCost();
}

select_day.forEach(function(dayElement) {
  dayElement.addEventListener('click', toggleDaySelection);
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clearDays() {
  days = [];
  select_day.forEach(function(dayElement) {
    dayElement.classList.remove('clicked');
  });
  full_button.classList.add('clicked');
  half_button.classList.remove('clicked');
  calculateCost();
}

clear_button.addEventListener('click', clearDays);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function setRate(rateType) {
  if (rateType === 'half') {
    half_button.classList.add('clicked');
    full_button.classList.remove('clicked');
  } else {
    full_button.classList.add('clicked');
    half_button.classList.remove('clicked');
  }
  calculateCost();
}
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
full_button.addEventListener('click', function()  {
  setRate('full');
});


half_button.addEventListener('click', function() {
  setRate('half');
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
  let dayCount = days.length;
  let rate = full_button.classList.contains('clicked') ? full_day : half_day;
  let totalCost = dayCount * rate;
  cost.innerHTML = totalCost;
}
