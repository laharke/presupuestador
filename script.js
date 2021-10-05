//VALOR MENSUAL MODELO ONE
const valorMensualCantRef1 = document.querySelector("#valorMensualCant1");
const valorMensualCant1 = document.querySelector("#valorMensualCant1").value;
let valorMensualPrice1 = document.querySelector("#valorMensualPrice1").innerHTML;
valorMensualPrice1 = valorMensualPrice1.substring(1);
const valorMensualTotal1 = document.querySelector("#valorMensualTotal1");
let newValorMensualTotal1 = 0;

valorMensualCantRef1.addEventListener('input', () => {
    newValorMensualTotal1 = valorMensualCantRef1.value * valorMensualPrice1;
    if (newValorMensualTotal1 == "1600" || newValorMensualTotal1 == "800"){
        valorMensualTotal1.innerHTML = "$" + 2400;
    }
    else{
    valorMensualTotal1.innerHTML = "$" + newValorMensualTotal1;
    }
});


//VALOR MENSUAL MODELO LIGHT
const valorMensualCantRef2 = document.querySelector("#valorMensualCant2");
const valorMensualCant2 = document.querySelector("#valorMensualCant2").value;
let valorMensualPrice2 = document.querySelector("#valorMensualPrice2").innerHTML;
valorMensualPrice2 = valorMensualPrice2.substring(1);
const valorMensualTotal2 = document.querySelector("#valorMensualTotal2");
let newValorMensualTotal2 = 0;

valorMensualCantRef2.addEventListener('input', () => {
    newValorMensualTotal2 = valorMensualCantRef2.value * valorMensualPrice2;
    if (newValorMensualTotal2 == "900" || newValorMensualTotal2 == "1800"){
        valorMensualTotal2.innerHTML = "$" + 2700;
    }
    else {
    valorMensualTotal2.innerHTML = "$" + newValorMensualTotal2;
    }
});

//METO EN UNA LISTA LA REFERENCIA A TODOS LOS PRECIOS, CANTIDADES Y TOTALES QUE FALTAN ,CADA UNO VA A CORRESPONDER CON SU INDICE
const cantidadRefs = document.querySelectorAll(".valorMensualCant");
const priceRefs = document.querySelectorAll(".valorMensualPrice");
const priceTotal = document.querySelectorAll(".valorMensualTotal");

for (let i = 0; i < 7; i++){
    
    cantidadRefs[i].addEventListener('input', () => {
        let cantidad = cantidadRefs[i].value;
        let valorMensual = priceRefs[i].innerHTML;
        valorMensual = valorMensual.substring(1);
        let newValorMensual = 0;
        newValorMensual = cantidad * valorMensual;
        priceTotal[i].innerHTML = "$" + newValorMensual;
    });
};