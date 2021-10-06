//VALOR MENSUAL LIGHT Y ONE
const cantidadLightOneRef = document.querySelectorAll(".cantidadLightOne");
const priceLightOneRef = document.querySelectorAll(".precioMensualLightOne");
const totalLightOneRef = document.querySelectorAll(".precioTotalLightOne");
console.log(cantidadLightOneRef, priceLightOneRef, totalLightOneRef);

for (let i = 0; i < 2; i++){
    let cantidadTotal = 0;
    cantidadLightOneRef[i].addEventListener('input', () => {
        cantidadTotal = Number(cantidadLightOneRef[0].value) + Number(cantidadLightOneRef[1].value);
        let valorMensual = priceLightOneRef[i].innerHTML;
        valorMensual = valorMensual.substring(1);
        let valorTotal = 0;
        if (cantidadTotal == "2"){
            if (cantidadLightOneRef[0].value == "2"){
                valorTotal = 2100;
                totalLightOneRef[0].innerHTML = "$" + valorTotal;
                totalLightOneRef[1].innerHTML = "$" + 0;
            }
            else if (cantidadLightOneRef[1].value == "2"){
                valorTotal = 2100;
                totalLightOneRef[1].innerHTML = "$" + valorTotal;
                totalLightOneRef[0].innerHTML = "$" + 0;
            }
            else {
            totalLightOneRef[0].innerHTML = "$" + 1000;
            totalLightOneRef[1].innerHTML = "$" + 1100;
            }
        }
        else if (cantidadTotal == "0"){
            totalLightOneRef[0].innerHTML = "$" + 0;
            totalLightOneRef[1].innerHTML = "$" + 0;
        }
        else if (cantidadTotal == "1"){
            if (cantidadLightOneRef[0].value == "1"){
                valorTotal = 1800;
                totalLightOneRef[0].innerHTML = "$" + valorTotal;
                totalLightOneRef[1].innerHTML = "$" + 0;
            }
            else if (cantidadLightOneRef[1].value == "1"){
                valorTotal = 1800;
                totalLightOneRef[1].innerHTML = "$" + valorTotal;
                totalLightOneRef[0].innerHTML = "$" + 0;
            }
        }
        else{
            let valorTotalOne = cantidadLightOneRef[0].value * priceLightOneRef[0].innerHTML.substring(1);
            totalLightOneRef[0].innerHTML = "$" + valorTotalOne;

            let valorTotalLight = cantidadLightOneRef[1].value * priceLightOneRef[1].innerHTML.substring(1);
            totalLightOneRef[1].innerHTML = "$" + valorTotalLight;

        }
    });

};




//METO EN UNA LISTA LA REFERENCIA A TODOS LOS PRECIOS, CANTIDADES Y TOTALES QUE FALTAN ,CADA UNO VA A CORRESPONDER CON SU INDICE
const cantidadRefs = document.querySelectorAll(".valorMensualCant");
const priceRefs = document.querySelectorAll(".valorMensualPrice");
const priceTotal = document.querySelectorAll(".valorMensualTotal");

for (let i = 0; i < 7; i++){
    
    cantidadRefs[i].addEventListener('input', () => {
        let cantidad = cantidadRefs[i].value;
        let valorMensual2 = priceRefs[i].innerHTML;
        valorMensual2 = valorMensual2.substring(1);
        let newValorMensual = 0;
        newValorMensual = cantidad * valorMensual2;
        priceTotal[i].innerHTML = "$" + newValorMensual;
    });
};

// FUNCION DE IMPRIMIR
const printButtonRef = document.querySelector("#printButton");
printButtonRef.addEventListener('click', () => {
    window.print();
});

//SUMAR TOTATLES
//DEBO AGARRAR LAS REFERENCIAS A LO QUE SUMA A COSTO UNICO Y COSTO MENSUAL Y SUMARLO, 
//LO QUE PUEDO HACER ES UNA MEGA NODELIST DE TODOOOOS LAS REFERNCIAS, INCLUIDO LIGHT Y ONE, ESTO ES PONIENDO UAN CLASE NUEVA
//Y DESPUES SUMO LAS QUE ME PINTE

//preciototal es UNICO PAGO
const nodeListTotal = document.querySelectorAll(".precioTotal");
const totalPagoUnicoRef = document.querySelector("#pagoUnicoId")

for (let i = 0; i < 7; i++){
    let pagoUnico = 0;
    cantidadRefs[i].addEventListener('input', () => {
        let precioSumar1 = Number(nodeListTotal[0].innerHTML.substring(1));
        let precioSumar2 = Number(nodeListTotal[1].innerHTML.substring(1));        
        let precioSumar3 = Number(nodeListTotal[2].innerHTML.substring(1));        
        let precioSumar4 = Number(nodeListTotal[3].innerHTML.substring(1));        
        let precioSumar5 = Number(nodeListTotal[4].innerHTML.substring(1));        
        let precioSumar6 = Number(nodeListTotal[5].innerHTML.substring(1));
        let precioSumar7 = Number(nodeListTotal[6].innerHTML.substring(1));
        pagoUnico = precioSumar1 + precioSumar2 + precioSumar3 + precioSumar4 + precioSumar5 +precioSumar6 + precioSumar7;
        console.log(pagoUnico)
        totalPagoUnicoRef.innerHTML = "$" + pagoUnico;
        
    });
};