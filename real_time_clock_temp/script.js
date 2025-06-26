function startClock()
{

    document.getElementById("h").innerHTML  = (hour %12 || 12).toString().padStart(2,"0");
    document.getElementById("m").innerHTML  = minute.toString().padStart(2,"0");
    document.getElementById("s").innerHTML  = second.toString().padStart(2,"0");
    document.getElementById("ampm").innerHTML  =  ampm;   

    document.getElementsByClassName("hour").style.transform = `rotate(${hour*30+minute/2+second/120 }deg)`;
    document.getElementsByClassName("minute").style.transform = `rotate(${minute * 6+second/10}deg)`;
    document.getElementsByClassName("second").style.transform = `rotate(${second * 6}deg)`;

} 

function startClock() {
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    var ampm = "AM";

    if (hour >= 12) ampm = "PM";

    document.getElementById("h").innerHTML = (hour % 12 || 12).toString().padStart(2, "0");
    document.getElementById("m").innerHTML = minute.toString().padStart(2, "0");
    document.getElementById("s").innerHTML = second.toString().padStart(2, "0");
    document.getElementById("ampm").innerHTML = ampm;

    const hourHand = document.querySelector(".hour");
    const minuteHand = document.querySelector(".minute");
    const secondHand = document.querySelector(".second");

    const hourDeg = (hour % 12) * 30 + minute * 0.5 + second * (0.5 / 60);
    const minuteDeg = minute * 6 + second * 0.1;
    const secondDeg = second * 6;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
}
