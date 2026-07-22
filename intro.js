const intro = document.getElementById("intro");
const envelope = document.querySelector(".envelope");

// При клике открываем конверт
envelope.addEventListener("click", () => {
    const tap = document.querySelector(".tap");
    tap.style.opacity = "0";
    tap.style.transition = "opacity 0.3s ease";

    // чтобы нельзя было нажать второй раз
    if (intro.classList.contains("open")) return;
    tap.style.display = "none";  
    // открываем клапан
    envelope.classList.add("open");

    // через 0.8 сек начинает выезжать письмо
    setTimeout(() => {
        intro.classList.add("open");
    }, 1200);

    // через 3 секунды скрываем заставку
    setTimeout(() => {
        intro.classList.add("finish");
    }, 4200);

    // через 4 секунды полностью удаляем заставку
    setTimeout(() => {
        intro.remove();
    }, 5600);

});
