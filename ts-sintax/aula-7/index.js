"use strict";
//Enums
var TiposDePagamento;
(function (TiposDePagamento) {
    TiposDePagamento["Pagarme"] = "PagarMe";
    TiposDePagamento["Paypal"] = "Paypal";
    TiposDePagamento["Pagseguro"] = "PagSeguro";
})(TiposDePagamento || (TiposDePagamento = {}));
function processaPagamento(tipoDePagamento) {
    console.log(`Processado pelo: ${tipoDePagamento}`);
}
processaPagamento(TiposDePagamento.Pagarme);
