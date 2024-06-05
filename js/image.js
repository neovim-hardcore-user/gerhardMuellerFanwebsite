document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('lean-image');

    if (image) {
        document.addEventListener('mousemove', (e) => {
            const rect = image.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const maxTilt = 2;

            const deltaX = x - centerX;
            const deltaY = y - centerY;

            const rotateX = (deltaY / centerY) * -maxTilt;
            const rotateY = (deltaX / centerX) * maxTilt;

            image.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        document.addEventListener('mouseleave', () => {
            image.style.transform = 'rotateX(0) rotateY(0)';
        });
    } else {
        console.error('Element with id "lean-image" not found');
    }
});

