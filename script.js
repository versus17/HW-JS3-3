'use strict';

window.addEventListener('click', countDown);

function countDown () {
	setTimeout(flashLights, 1000);
}

let i = 0;
let start;
function flashLights () {
	let lightStrips = document.querySelectorAll('.light-strip'),
		lights = lightStrips[i].children;
		lights[2].classList.add('red');
		lights[3].classList.add('red');
		i++;
		if (i < lightStrips.length) {
			setTimeout(flashLights, 1000);
		}
		else {
			window.removeEventListener('click', countDown);
			setTimeout(lightsOff, 1000);
		}
}

function lightsOff () {
	let lights = document.querySelectorAll('.light');
	lights.forEach ((item) => {
	item.classList.remove('red');
	});
	start = new Date();
	console.log(start);
}

