console.log("balls")

document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById('images');

    const images = [];

	for (let i = 1; i < 19; ++i) {
		images.push("../images/galerie/" + i + ".jpg")
	}

	console.log(images);

    function loadImages(paths) {
        paths.forEach(path => {
            const img = document.createElement('img');
            img.src = path;
            img.alt = "Image";
			img.className = "image"
            imageContainer.appendChild(img);
        });
    }

    loadImages(images);
});

