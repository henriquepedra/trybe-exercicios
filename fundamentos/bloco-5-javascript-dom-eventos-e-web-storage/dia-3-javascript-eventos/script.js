function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function calendario() {
  let getList = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let daysList = document.createElement('li');
    let day = decemberDaysList[index];
    daysList.innerHTML = day;

    if (day === 24 || day === 31) {
      daysList.className = 'day holiday';
      getList.appendChild(daysList);
    } else if (day === 4 || day === 11 || day === 18) {
      daysList.className = 'day friday';
      getList.appendChild(daysList);
    } else if (day === 25) {
      daysList.className = 'day holiday friday';
      getList.appendChild(daysList);
    } else {
      daysList.className = 'day';
      getList.appendChild(daysList);
    }
  }
}

calendario();

// Exercício 2
function holidayButton(string) {
  let buttonClass = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  let buttonID = 'btn-holiday';

  button.innerHTML = string;
  button.id = buttonID;

  buttonClass.appendChild(button);
}

holidayButton('Feriados');

// Exercício 3
function showHolidays() {
  let holidayButton = document.querySelector('#btn-holiday');
  let holidays = document.querySelectorAll('.holiday');
  let bgColor = 'rgb(238,238,238)';
  let color = 'white';


  holidayButton.addEventListener('click', function () {
    for (let index = 0; index < holidays.length; index += 1) {
      if (holidays[index].style.backgroundColor === color) {
        holidayButton[index].style.backgroundColor = bgColor;
      } else {
        holidays[index].style.backgroundColor = color;
      }
    }
  });
}

showHolidays();