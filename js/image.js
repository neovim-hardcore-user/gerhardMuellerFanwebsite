document.addEventListener('DOMContentLoaded', () => {
    const images = document.getElementsByClassName('lean-image');

    Array.from(images).forEach(image => {
        image.addEventListener('mousemove', (e) => {
            const rect = image.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;


            const maxTilt = 5000 / (image.clientWidth + image.clientHeight);

            const deltaX = x - centerX;
            const deltaY = y - centerY;

            const rotateX = (deltaY / centerY) * -maxTilt;
            const rotateY = (deltaX / centerX) * maxTilt;

            image.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        image.addEventListener('mouseleave', () => {
            image.style.transform = 'rotateX(0) rotateY(0)';
        });
    });
});
