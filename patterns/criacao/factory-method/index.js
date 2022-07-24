"use strict";
// Interfaces
// Abstract
class PaymentFactory {
}
// Concretos
class PaypalMethod {
    constructor() {
        this.tax = 0.05;
    }
    createPayment(orderId) {
        console.log(`Cria a ordem de pagamento ${orderId} via Paypal com a taxa ${this.tax}`);
        return true;
    }
    refoundPayment(orderId) {
        console.log(`Reembolsa a ordem de pagamento ${orderId} via Paypal`);
        return true;
    }
}
class PagseguroMethod {
    constructor() {
        this.tax = 0.02;
    }
    createPayment(orderId) {
        console.log(`Cria a ordem de pagamento ${orderId} via Pagseguro com a taxa ${this.tax}`);
        return true;
    }
    refoundPayment(orderId) {
        console.log(`Reembolsa a ordem de pagamento ${orderId} via Pagseguro`);
        return true;
    }
}
// Factorys
class PaypalFactory extends PaymentFactory {
    create() {
        return new PaypalMethod();
    }
}
class PagseguroFactory extends PaymentFactory {
    create() {
        return new PagseguroMethod();
    }
}
// Client Code
const clientCode = () => {
    let paymentMethod;
    // entrou um pagamento via paypal
    const paypalFactory = new PaypalFactory();
    paymentMethod = paypalFactory.create();
    paymentMethod.createPayment('Order01');
};
