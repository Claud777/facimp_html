function addToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === '0' || display.value === '⚠️Erro⚠️' || display.value === '⚠️imps, dividir por 0⚠️') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}

function clearEntry() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
        display.value = '0';
    }
}

function calculate() {
    const display = document.getElementById('display');
    try {
        let result = eval(display.value.replace('^', '**'));
        if (result === Infinity || result === -Infinity) {
            display.value = '⚠️impos, dividir por 0⚠️';
            // Ou
            // display.value = 'Valor Infinito';
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = '⚠️Erro⚠️';
    }
}