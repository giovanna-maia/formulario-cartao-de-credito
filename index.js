const inputs = document.querySelectorAll('input')
const userName = document.querySelector('[data-userName]')
const cardNumber = document.querySelector('[data-cardNumber]')
const expDateMonth = document.querySelector('[data-expDateMonth]')
const expDateYear = document.querySelector('[data-expDateYear]')
const securityCode = document.querySelector('[data-securityCode]')
const formError = document.querySelectorAll('.invalid')


inputs.forEach(input => {
    input.addEventListener('keyup',() => {
        if(inputs[0].value !== ''){
           userName.innerText = inputs[0].value
        //    formError[0].innerText = ''
        }if(inputs[0].value.length === 0){
            userName.innerText = 'José Maria da Silva';
        }

        if(inputs[1].value !== ''){
            cardNumber.innerHTML = inputs[1].value;
            // formError[1].innerHTML = ''
        }if(inputs[1].value === ''){
            cardNumber.innerHTML = '0000 0000 0000 0000';
        }


        if(inputs[2].value !== ''){
            expDateMonth.innerHTML = inputs[2].value
            // formError[2].innerHTML = ''
        }if(inputs[2].value === ''){
            expDateMonth.innerHTML = '00'
        }

        if(inputs[3].value !== ''){
            expDateYear.innerHTML = inputs[3].value
        //   formError[2].innerHTML = ''
        }if(inputs[3].value === ''){
            expDateYear.innerHTML = '00'
        }

        if(inputs[4].value !== ''){
            securityCode.innerHTML = inputs[4].value
            // formError[3].innerHTML = ''
          }if(inputs[4].value === ''){
            securityCode.innerHTML = '000'
        }
    })
})


// Formatando o input do cartão, para separar os números
inputs[1].addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
})

// Limpando os inputs após o envio
function clearInput(){
   inputs[0].value = ''
   inputs[1].value = ''
   inputs[2].value = ''
   inputs[3].value = ''
}

window.onload = clearInput;