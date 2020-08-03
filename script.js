'use strict';

// window.addEventListener('click', setInterval(flashLights, 1000));
// function redLights () {
// 	let lightStrips = document.querySelectorAll('.light-strip');	
// 	lightStrips.forEach ((item) => {
// 		let lights = item.children;	
// 		function red (i) {
// 			if (i > 1) {					
// 				lights[i].classList.add('red');					
// 			}
// 		}
// 		for (let i = 0; i < lights.length; i++) {
// 			setTimeout(red, 1000, i);
			
				
// 			}		
// 		}
// 	);
// }
// redLights ();

let i = 0;
setInterval(flashLights, 1000);

function flashLights () {
	let lightStrips = document.querySelectorAll('.light-strip'),
		lights = lightStrips[i].children;
		lights[2].classList.add('red');
		lights[3].classList.add('red');
		i++;
}



// function addRed () {
// 	let lightStrips = document.querySelectorAll('.light-strip');

// 	lightStrips.forEach((item,i) => {
		
// 	});
// }





