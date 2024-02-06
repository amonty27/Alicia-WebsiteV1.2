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
function toWeb() {
	const name = document.querySelector("#toWeb");
	// open a new tab
	window.open(
		"https://github.com/amonty27/Alicia-WebsiteV1.2",
		"_blank",
		"noopener"
	);
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
		"https://www.figma.com/proto/1GAJ04hvYdnSnrLCw8wF9r/Spa-Website-Redesign---IT-649---AliciaMontgomery?page-id=511%3A1139&type=design&node-id=537-2&viewport=566%2C272%2C0.1&t=5g0qMGNzB376FVZ0-1&scaling=contain&starting-point-node-id=537%3A2&mode=design",
		"_blank",
		"noopener"
	);
}

function toMoth() {
	const name = document.querySelector("#toMoth");

	// open a new tab
	window.open(
		"https://amonty27.github.io/MothClassifierWebsite/",
		"_blank",
		"noopener"
	);
}

function display(id) {
	var content = document.getElementById(id);

	/* content.style.display = content.style.display != "none" ? "none" : "block"; */
	if (content.style.display !== "none") {
		content.style.display = "none";
	} else {
		content.style.display = "block";
	}
}
