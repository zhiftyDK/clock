const clockDiv = document.querySelector(".analog-clock");

//Global variables
const clockSize = 400

//Clock styling
clockDiv.style.width = `${clockSize}px`;
clockDiv.style.height = `${clockSize}px`;
clockDiv.style.backgroundColor = "rgba(255, 255, 255, .8)";
clockDiv.style.borderRadius = "50%";
clockDiv.style.border = "5px solid black";
clockDiv.style.position = "relative";

//Append div content
clockDiv.innerHTML = `
<div style="position: absolute; background-color: black; z-index: 11; width: ${clockSize / 100 * 5}px; height: ${clockSize / 100 * 5}px; top: 50%; left: 50%; transform: translate(-50%, -50%); border-radius: 50%;"></div>
<div style="--rotation: 0; position: absolute; bottom: 50%; left: 50%; border: 1px solid white; border-top-left-radius: 10px; border-top-right-radius: 10px; transform-origin: bottom; z-index: 10; transform: translateX(-50%) rotate(calc(var(--rotation) * 1deg)); width: 10px; height: 35%; background-color: black;" data-hour-hand></div>
<div style="--rotation: 0; position: absolute; bottom: 50%; left: 50%; border: 1px solid white; border-top-left-radius: 10px; border-top-right-radius: 10px; transform-origin: bottom; z-index: 10; transform: translateX(-50%) rotate(calc(var(--rotation) * 1deg)); width: 7px; height: 40%; background-color: black;" data-minute-hand></div>
<div style="--rotation: 0; position: absolute; bottom: 50%; left: 50%; border: 1px solid white; border-top-left-radius: 10px; border-top-right-radius: 10px; transform-origin: bottom; z-index: 10; transform: translateX(-50%) rotate(calc(var(--rotation) * 1deg)); width: 3px; height: 45%; background-color: red;" data-second-hand></div>
<div style="--rotation: 30deg; position: absolute; width: 100%; height: 100%; text-align: center; transform: rotate(var(--rotation)); font-size: 1.5rem;"><span style="display: inline-block; transform: rotate(-30deg); -moz-transform: rotate(-30deg);">1</span></div>
<div style="--rotation: 60deg; position: absolute; width: 100%; height: 100%; text-align: center; transform: rotate(var(--rotation)); font-size: 1.5rem;"><span style="display: inline-block; transform: rotate(-60deg); -moz-transform: rotate(-60deg);">2</span></div>
<div style="--rotation: 90deg; position: absolute; width: 100%; height: 100%; text-align: center; transform: rotate(var(--rotation)); font-size: 1.5rem;"><span style="display: inline-block; transform: rotate(-90deg); -moz-transform: rotate(-90deg);">3</span></div>
<div style="--rotation: 120deg; position: absolute; width: 100%; height: 100%; text-align: center; transform: rotate(var(--rotation)); font-size: 1.5rem;"><span style="display: inline-block; transform: rotate(-120deg); -moz-transform: rotate(-120deg);">4</span></div>
<div style="--rotation: 150deg; position: absolute; width: 100%; height: 100%; text-align: center; transform: rotate(var(--rotation)); font-size: 1.5rem;"><span style="display: inline-block; transform: rotate(-150deg); -moz-transform: rotate(-150deg);">5</span></div>
<div style="--rotation: 180deg; position: absolute; width: 100%; height: 100%; text-align: center; transform: rotate(var(--rotation)); font-size: 1.5rem;"><span style="display: inline-block; transform: rotate(-180deg); -moz-transform: rotate(-180deg);">6</span></div>
<div style="--rotation: 210deg; position: absolute; width: 100%; height: 100%; text-align: center; transform: rotate(var(--rotation)); font-size: 1.5rem;"><span style="display: inline-block; transform: rotate(-210deg); -moz-transform: rotate(-210deg);">7</span></div>
<div style="--rotation: 240deg; position: absolute; width: 100%; height: 100%; text-align: center; transform: rotate(var(--rotation)); font-size: 1.5rem;"><span style="display: inline-block; transform: rotate(-240deg); -moz-transform: rotate(-240deg);">8</span></div>
<div style="--rotation: 270deg; position: absolute; width: 100%; height: 100%; text-align: center; transform: rotate(var(--rotation)); font-size: 1.5rem;"><span style="display: inline-block; transform: rotate(-270deg); -moz-transform: rotate(-270deg);">9</span></div>
<div style="--rotation: 300deg; position: absolute; width: 100%; height: 100%; text-align: center; transform: rotate(var(--rotation)); font-size: 1.5rem;"><span style="display: inline-block; transform: rotate(-300deg); -moz-transform: rotate(-300deg);">10</span></div>
<div style="--rotation: 330deg; position: absolute; width: 100%; height: 100%; text-align: center; transform: rotate(var(--rotation)); font-size: 1.5rem;"><span style="display: inline-block; transform: rotate(-330deg); -moz-transform: rotate(-330deg);">11</span></div>
<div style="position: absolute; width: 100%; height: 100%; text-align: center; transform: rotate(var(--rotation)); font-size: 1.5rem;">12</div>
`

//Clock controlling
setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
const digitalClock = document.querySelector(".digital-clock");

function setClock() {
    //Analog clock
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)

    //Digital clock
    const hours = new Date().getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    const minutes = new Date().getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    const seconds = new Date().getSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    digitalClock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()