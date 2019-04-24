"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Kassidy Cantrell
   Date:   4/22/19

*/

myFunction(); /* created a function to run the code(not necessary) */

function myFunction() {
	var thisTime = new Date(); /* creating a new varibale called thisTime using the new date method with zero paramaters (started out with a date) */
	

	var timeStr = thisTime.toLocaleString(); /* putting thisTime variable into timeStr and converting it to the locale string*/
	document.getElementById("timeStamp").innerHTML = 	timeStr; /* calling timeStamp from inner HTML document to dispay time */
	
	var thisHour = thisTime.getHours();	/* creating thisHour variable, using the get element */
	var thisMonth = thisTime.getMonth();	/* creating thisMonth variable, using the get element */
	var mapNum = (2*thisMonth + thisHour)%24; /* using modulo to find the remainder */
	var imgStr = "<img src='sd_sky"+mapNum+".png'>"; /* pulling mapNum into the img */
	
	document.getElementById("planisphere").insertAdjacentHTML("afterbegin",imgStr);
	
}

