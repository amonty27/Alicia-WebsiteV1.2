window.onload = function () {
	setInterval(function () {
		const d = new Date();
		const localTime = d.getTime();
		const localOffset = d.getTimezoneOffset() * 60000;
		const utc = localTime + localOffset;
		const offset = -5;
		const usa = utc + 3600000 * offset;

		const time = new Date(usa).toLocaleTimeString();
		const date = new Date(usa).toLocaleDateString();

		document.getElementById("date").innerHTML = date + "&nbsp;";
		document.getElementById("time").innerHTML = time;
	}, 1000); // 1000 milliseconds = 1 second
};
