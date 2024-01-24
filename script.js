window.onload = function () {
	console.log("I see you looking in here 👀");
	setInterval(function () {
		const d = new Date();
		const localTime = d.getTime();
		const localOffset = d.getTimezoneOffset() * 60000;
		const utc = localTime + localOffset;
		const offset = -5;
		const usa = utc + 3600000 * offset;

		const time = new Date(usa).toLocaleTimeString();

		document.getElementById("time").innerHTML = time;
	}, 1000); // 1000 milliseconds = 1 second
};

function toResume() {
	const name = document.querySelector("#projectsButton");
	// add click event listener
	name.addEventListener("click", () => {
		// open a new tab
		window.location.href = "projects.html";
	});
}
