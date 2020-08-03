'use strict';

// window.addEventListener('click', setInterval(flashLights, 1000));
function redLights () {
	let lightStrips = document.querySelectorAll('.light-strip');	
	lightStrips.forEach ((item) => {
		let lights = item.children;	
		function red (i) {
			if (i > 1) {					
				lights[i].classList.add('red');					
			}
		}
		for (let i = 0; i < lights.length; i++) {
			setTimeout(red, 1000, i);
			
				
			}		
		}
	);
}
redLights ();

// function addRed () {
// 	let lightStrips = document.querySelectorAll('.light-strip');

// 	lightStrips.forEach((item,i) => {
		
// 	});
// }





