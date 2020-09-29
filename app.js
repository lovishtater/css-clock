const sec = document.querySelector(".second-hand");
const min = document.querySelector(".min-hand");
const hr = document.querySelector(".hour-hand");

function secHand() {
    const time = new Date();
    const second = time.getSeconds();
    const secondRotateDegree = (second / 60) * 360 + 90;
    sec.style.transform = `rotate(${secondRotateDegree}deg)`;

    const minute = time.getMinutes();
    const minRotateDegree = (minute / 60) * 360 + 90;
    console.log(minRotateDegree, min);
    min.style.transform = `rotate(${minRotateDegree}deg)`;

    const hour = time.getHours();
    const hourRotateDegree = (hour / 12) * 360 + 90;
    hr.style.transform = `rotate(${hourRotateDegree}deg)`;
};


setInterval(secHand, 1000);