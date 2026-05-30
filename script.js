const noBtn = document.getElementById("noBtn");

document.addEventListener("mousemove", (e) => {

    const rect = noBtn.getBoundingClientRect();

    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;

    const distance = Math.hypot(
        e.clientX - btnCenterX,
        e.clientY - btnCenterY
    );

    if (distance < 120) {

        const maxX = window.innerWidth - rect.width;
        const maxY = window.innerHeight - rect.height;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    }
});