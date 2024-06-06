const images = [];

document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("images");
    const overlay = document.getElementById("overlay");
    const overlayImage = document.getElementById("overlay-image");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentIndex = 0;

    for (let i = 1; i < 19; ++i) {
        let img = document.createElement("img");
        img.src = "../images/galerie/" + i + ".jpg";
        img.className = "image";
        imageContainer.appendChild(img);
        images.push(img);

        img.addEventListener("click", () => {
            currentIndex = i - 1;
            openOverlay(currentIndex);
        });
    }

    function openOverlay(index) {
        overlayImage.src = images[index].src;
        overlay.classList.add("active");
        setTimeout(() => {
            overlayImage.classList.add("active");
        }, 1);
    }

    function closeOverlay() {
        overlay.classList.remove("active");
        overlayImage.classList.remove("active");
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        changeImage(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        changeImage(currentIndex);
    }

    function changeImage(index) {
        overlayImage.classList.remove("active");
        setTimeout(() => {
            overlayImage.src = images[index].src;
            overlayImage.classList.add("active");
        }, 200);
    }

    overlay.addEventListener("click", (event) => {
        if (event.target === overlay || event.target === closeBtn) {
            closeOverlay();
        }
    });

    nextBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        showNextImage();
    });

    prevBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        showPrevImage();
    });
});
