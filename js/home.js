setTimeout(() => {
	const disclaimer = document.getElementById("disclaimer");

	disclaimer.classList.add("active");
	setTimeout(() => {
		disclaimer.classList.add("visible");
	 }, 10);

}, 2000);

function close_popup() {
	const disclaimer = document.getElementById("disclaimer");
	disclaimer.classList.remove("visible");
	setTimeout(() => {
        disclaimer.classList.remove("active");
		console.log("tf");
    }, 400);
}
