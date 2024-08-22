var firstNumber = document.querySelector('input:first-child');
var operation = document.querySelector('input[placeholder="Nhập phép tính"]');
var lastNumber = document.querySelector('input:last-child');

var solveBtn = document.querySelector('#solve');
var result = document.querySelector('#result');
solveBtn.onclick = function() {
    if(operation.value == '+') {
        result.innerHTML = `${Number(firstNumber.value) + Number(lastNumber.value)}`;
    }
    if(operation.value == '-') {
        result.innerHTML = `${Number(firstNumber.value) - Number(lastNumber.value)}`;
    }
    if(operation.value == '*') {
        result.innerHTML = `${Number(firstNumber.value) * Number(lastNumber.value)}`;
    }
    if(operation.value == '/') {
        if(lastNumber.value == '0') {
            result.innerHTML = 'Phép tính không hợp lệ';
        }
        else {
            result.innerHTML = `${Number(firstNumber.value) / Number(lastNumber.value)}`;
        }
    }
}