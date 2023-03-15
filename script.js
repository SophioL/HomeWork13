const secondsLabel = document.getElementById("seconds");
let sec = 0;

function pad(num) { return num > 999 ? num : "0" + num; }
setInterval(function () {
    secondsLabel.innerHTML = (pad(++sec % 100));
}, 50);

if (secondsLabel == 100){
    

}
