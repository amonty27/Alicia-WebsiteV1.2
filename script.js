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

function toProjects() {
	window.location.href = "projects.html";
}

function toResume() {
	// open a new tab
	window.open("MontgomeryAlicia_Resume_Web.pdf", "_blank", "noopener");
}

function toGBCSWeb() {
	const name = document.querySelector("#toGBCS");
	// open a new tab
	window.open("https://www.gbcsgroup.com/", "_blank", "noopener");
}

function toSpa() {
	const name = document.querySelector("#toSpa");

	// open a new tab
	window.open(
		"https://www.figma.com/file/1GAJ04hvYdnSnrLCw8wF9r/Spa-Website-Redesign---IT-649---AliciaMontgomery?type=design&node-id=105%3A359&mode=design&t=2oepzuc3MuZ4qZ37-1",
		"_blank",
		"noopener"
	);
}

function display(id) {
	var content = document.getElementById(id);

	if (content.style.display !== "none") {
		content.style.display = "none";
	} else {
		content.style.display = "block";
	}
}
