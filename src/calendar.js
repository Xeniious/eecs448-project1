/*
==============================
Filename     : calendar.js
Authored by  : team "Team"
Last Updated : 09 16 17
==============================
*/

var days_of_the_week = '<div class="days_of_the_week">Su</div><div class="days_of_the_week">M</div><div class="days_of_the_week">T</div><div class="days_of_the_week">W</div><div class="days_of_the_week">T</div><div class="days_of_the_week">F</div><div class="days_of_the_week">S</div>';

function Calendar() {

  var month = monthToString(day.getMonth());
  var tempDate = new Date(day.getFullYear(), day.getMonth(), 1);

  if(month == "February") {
	this.number_of_days = checkLeapYear();
  } else if (month == "January" || month == "March" || month == "May" || month == "July" || month == "August" || month == "October" || month == "December") {
	this.number_of_days = 31;
  } else {
	this.number_of_days = 30;
  }

  this.draw = function() {
	  var wrapper = document.getElementById('Calendar');
	  wrapper.style.width = '182px';
	  wrapper.innerHTML += '<div class="monthname">' + monthToString(day.getMonth()) + ' ' + day.getFullYear() + '</div>'
	  wrapper.innerHTML += days_of_the_week;
	  drawDays(day.getMonth(), this.number_of_days, tempDate.getDay());
  };
}

function drawDays(month_num, number_of_days, weekday) {
	var wrapper = document.getElementById('Calendar'); 																					//EVERY LINE OF CODE IN THIS FUNCTION IS NECESSARY

	var today = new Date(); 																															//NECESSARY LINE
	var currentMonth = today.getMonth();																												//NECESSARY LINE
	var currentYear = today.getFullYear(); 																												//NECESSARY LINE

	for(var i = 1; i <= number_of_days; i++) {  																										//NECESSARY LINE

		if(i == 1) { 																																	//NECESSARY LINE
			if(weekday == 0) { //wrap around when day is sunday (create a new row for the next week) 													//NECESSARY LINE
				var margin_left = 0; 																													//NECESSARY LINE
			} else { 																																	//NECESSARY LINE
				var margin_left = weekday * 26; 																										//NECESSARY LINE
			} 																																			//NECESSARY LINE

			if (day.getDate() == i) { //setup for first day of the month (getting month lined up) 														//NECESSARY LINE
				wrapper.innerHTML += '<div style="color:orange; margin-left:' + margin_left + 'px;" class="day">' + i + '</div>'; 						//NECESSARY LINE
			} else if(day.getDate() == i) { 																											//NECESSARY LINE
				wrapper.innerHTML += '<div class="day" style="color:orange; margin-left:' + margin_left + 'px;">' + i + '</div>'; 						//NECESSARY LINE
			} else { 																																	//NECESSARY LINE
				wrapper.innerHTML += '<div style="margin-left:' + margin_left + 'px;" class="day">' + i + '</div>'; // Unselected cell/day # 1 			//NECESSARY LINE
			} 																																			//NECESSARY LINE
		} else { 																																		//NECESSARY LINE
			if(day.getMonth() == currentMonth && day.getFullYear() == currentYear && today.getDate() == i) { 											//NECESSARY LINE
				wrapper.innerHTML += '<div class="day" style="background-color:#02779E;color:lightyellow;">' + i + '</div>';  							//NECESSARY LINE
			} else if(day.getDate() == i) { 																											//NECESSARY LINE
				wrapper.innerHTML += '<div class="day" style="color:orange;">' + i + '</div>'; 															//NECESSARY LINE
			} else { 																																	//NECESSARY LINE
				wrapper.innerHTML += '<div class="day" >' + i + '</div>'; // Unselected cells/days except cell # 1  									//NECESSARY LINE
			} 																																			//NECESSARY LINE
		} 																																				//NECESSARY LINE
	} 																																					//NECESSARY LINE
}


function checkLeapYear() {
	if(day.getFullYear() % 4 == 0) {
		if(day.getFullYear() % 100 == 0) {
			if(day.getFullYear() % 400 == 0) {
				return 29;
			}
			return 28;
		}
		return 29;
	}
	return 28;
}

function fixCalendar() {
	dayForward();
	dayBackward();
}

function fixCalendarLeft() {
	cal = new Calendar();
	document.getElementById('Calendar').innerHTML = '';
	day.setDate(day.getDate() - 1);
	updateTime();
	removeExistingEvents();
	displayEvents();
	cal.draw();

	cal = new Calendar();
	document.getElementById('Calendar').innerHTML = '';
	day.setDate(day.getDate() + 1);
	updateTime();
	removeExistingEvents();
	displayEvents();
	cal.draw();
}

function fixCalendarRight() {
	cal = new Calendar();
	document.getElementById('Calendar').innerHTML = '';
	day.setDate(day.getDate() + 1);
	updateTime();
	removeExistingEvents();
	displayEvents();
	cal.draw();

	cal = new Calendar();
	document.getElementById('Calendar').innerHTML = '';
	day.setDate(day.getDate() - 1);
	updateTime();
	removeExistingEvents();
	displayEvents();
	cal.draw();
}
