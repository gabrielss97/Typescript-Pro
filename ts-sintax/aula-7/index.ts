//Enums

enum TiposDePagamento {
    Pagarme = 'PagarMe',
    Paypal = 'Paypal',
    Pagseguro = 'PagSeguro'
}

function processaPagamento(tipoDePagamento:TiposDePagamento) {
    console.log(`Processado pelo: ${tipoDePagamento}`);
}

processaPagamento(TiposDePagamento.Pagarme)
