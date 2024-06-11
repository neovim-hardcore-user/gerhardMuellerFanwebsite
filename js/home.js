function close_popup() {
	const disclaimer = document.getElementById("disclaimer");
	disclaimer.classList.remove("visible");
	setTimeout(() => {
        disclaimer.classList.remove("active");
		console.log("tf");
    }, 200);
}
