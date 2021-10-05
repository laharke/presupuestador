//VALOR MENSUAL MODELO ONE
const valorMensualCantRef = document.querySelector("#valorMensualCant");
const valorMensualCant = document.querySelector("#valorMensualCant").value;
const valorMensualPrice = document.querySelector("#valorMensualPrice").innerHTML;
const valorMensualTotal = document.querySelector("#valorMensualTotal");
let newValorMensualTotal = 0;

valorMensualCantRef.addEventListener('input', () => {
    newValorMensualTotal = valorMensualCantRef.value * valorMensualPrice;
    valorMensualTotal.innerHTML = newValorMensualTotal;
});

console.log(valorMensualCant)
console.log(valorMensualCant, valorMensualPrice, valorMensualTotal);