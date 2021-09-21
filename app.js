function getNumber(data) {
    let result = document.getElementById("result");
    result.value += data;
}

function clearScreen() {
    document.getElementById('result').value = "";
}

function displayResult() {
    let result = document.getElementById('result');
    result.value = eval(result.value);
}

function back() {
    let result = document.getElementById('result');
    result.value = result.value.slice(0, result.value.length - 1);
}
