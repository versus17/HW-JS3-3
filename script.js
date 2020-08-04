'use strict';

window.addEventListener('click', countDown);
let timerID,
	j = 0,
	i = 0,
	start,
	time = document.querySelector('.time'),
	result;


function countDown () {
	time.innerHTML = '00.000';
	if (j % 2 === 0) {
		timerID = setInterval(flashLights, 1000, timerID);
	}	
	else {
		finish();
	}
	j++;
}

function flashLights () {
	let lightStrips = document.querySelectorAll('.light-strip'),
		lights = lightStrips[i].children;
		lights[2].classList.add('red');
		lights[3].classList.add('red');
		i++;
		if (i >= lightStrips.length) {
			let timeOut = randomTime();
			setTimeout(lightsOff, timeOut);
			i = 0;
		}
}

function lightsOff () {
	clearTimeout(timerID);
	let lights = document.querySelectorAll('.light');
	lights.forEach ((item) => {
	item.classList.remove('red');
	});
	start = new Date();
	i = 0;
}

function finish () {	
	if (start == undefined) {
		lightsOff ();
		time.innerHTML = 'Фальстарт';
	}
	else {
		let finishTime = new Date();
		result = (finishTime - start) / 1000;
		time.innerHTML = result;
		writeRecord ();		
	}
	start = undefined;
}

function randomTime () {
	return Math.trunc((Math.random() * (2 - 0.2) + 0.2) * 1000) ;
}

function writeRecord () {
	let record = document.querySelector('span');
	if (localStorage.record == undefined) {
		localStorage.record = result;
		record.innerHTML = result;
	}
	else  if (localStorage.record > result) {
		localStorage.record = result;
		record.innerHTML = result;
	}
}