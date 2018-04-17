// weather.js
// Displays the weather station data on the canvas.

function draw() {
	var dashboard = document.getElementById('dashboard');
	if (dashboard.getContext) {
		var ctx = dashboard.getContext('2d');

		ctx.fillRect(25, 25,  100, 100);
		ctx.clearRect(45, 45, 60, 60);
		ctx.strokeRect(50, 50, 50, 50);
	}
}
