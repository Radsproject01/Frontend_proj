const clickSound = document.getElementById("clickSound");

function playClick() {
    clickSound.currentTime = 0;
    clickSound.play();
}

function appendValue(val) {
    playClick();
    document.getElementById("display").value += val;
}

function clearDisplay() {
    playClick();
    document.getElementById("display").value = "";
}

function backspace(){
    playClick();
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
 }
function calculate() {
    playClick();
    try {
        const input = document.getElementById("display").value;
        const result = eval(input);
        document.getElementById("display").value = result;
    } catch (err) {
        document.getElementById("display").value = "Error";
    }
}