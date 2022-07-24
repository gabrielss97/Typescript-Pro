"use strict";
//union types
const saldoBitcoin = "0.047";
const b = ['bruno', 'braga'];
function calcularTaxa(quantidadeBtc) {
    const valorConvertido = +quantidadeBtc;
    return valorConvertido * 0.08;
}
calcularTaxa(saldoBitcoin);
console.log("🚀 ~ file: index.ts ~ line 12 ~ calcularTaxa", calcularTaxa(saldoBitcoin));
