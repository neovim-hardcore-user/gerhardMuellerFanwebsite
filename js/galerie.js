document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("images");

    const images = [];

    for (let i = 1; i < 19; ++i) {
        images.push("../images/galerie/" + i + ".jpg");
    }

    console.log(images);

    function loadImages(paths) {
        paths.forEach((path) => {
            const img = document.createElement("img");
            img.src = path;
            img.alt = "Image";
            img.className = "image";
            imageContainer.appendChild(img);

			const id = parseInt(path.match(/(\d+)\.jpg$/));

			img.onclick = () => switchView(id);
        });
    }
	overlay.onclick = () => {
		overlay.style.display = "none";

		const child = document.getElementById("overlay-image");
		overlay.removeChild(child);
	};

    loadImages(images);
});

function switchView(index) {
	overlay = document.getElementById("overlay");
	if (overlay.childElementCount >= 1) {
		overlay.innerHTML = '';
	}
		
	const img = document.createElement("img");
	img.src = '../images/galerie/' + index + '.jpg';
	img.id = "overlay-image"

	overlay.style.display = "block";
	overlay.appendChild(img);

	fbutton = document.createElement("button");
	fbutton.onclick = () => {
		const overlayimage = document.getElementById("overlay-image");
		overlayimage.src = '../images/galerie/' + index++ + '.jpg';
	}
	

	console.log("id:", index);
}
