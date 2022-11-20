const name = document.getElementById('name');
const cardNumber = document.getElementById('cardNumber');
const expDate = document.getElementById('expDate');
const securityCode = document.getElementById('securityCode');


name.addEventListener('input', function () {
    if (name.value.length == 0) {
        document.getElementById('nameTransform').innerHTML = 'José Maria da Silva';
    } else {
        document.getElementById('nameTransform').innerHTML = this.value;
    }
});

cardNumber.addEventListener('input', function () {
    if (cardNumber.value.length == 0) {
        document.getElementById('numberTransform').innerHTML = '0000 0000 0000 0000';
    } else {
        document.getElementById('numberTransform').innerHTML = this.value;
    }
});

expDate.addEventListener('input', function () {
    if (expDate.value.length == 0) {
        document.getElementById('expDateTransform').innerHTML = '00/00';
    } else {
        document.getElementById('expDateTransform').innerHTML = this.value;
    }
});

securityCode.addEventListener('input', function () {
    if (securityCode.value.length == 0) {
        document.getElementById('securityCodeTransform').innerHTML = '000';
    } else {
        document.getElementById('securityCodeTransform').innerHTML = this.value;
    }
});