// Interfaces

interface PaymentMethod {
  tax: number;
  createPayment(orderId: string): boolean;
  refoundPayment(orderId: string): boolean;
}

// Abstract

abstract class PaymentFactory {
  abstract create(): PaymentMethod;
}

// Concretos
class PaypalMethod implements PaymentMethod {
  tax: number = 0.05;

  createPayment(orderId: string): boolean {
    console.log(
      `Cria a ordem de pagamento ${orderId} via Paypal com a taxa ${this.tax}`
    );
    return true;
  }

  refoundPayment(orderId: string): boolean {
    console.log(`Reembolsa a ordem de pagamento ${orderId} via Paypal`);
    return true;
  }
}

class PagseguroMethod implements PaymentMethod {
  tax: number = 0.02;

  createPayment(orderId: string): boolean {
    console.log(
      `Cria a ordem de pagamento ${orderId} via Pagseguro com a taxa ${this.tax}`
    );
    return true;
  }

  refoundPayment(orderId: string): boolean {
    console.log(`Reembolsa a ordem de pagamento ${orderId} via Pagseguro`);
    return true;
  }
}

// Factorys

class PaypalFactory extends PaymentFactory {
  create(): PaymentMethod {
    return new PaypalMethod();
  }
}

class PagseguroFactory extends PaymentFactory {
  create(): PaymentMethod {
    return new PagseguroMethod();
  }
}

// Client Code

const clientCode = () => {
  let paymentMethod: PaymentMethod;

  // entrou um pagamento via paypal
  const paypalFactory = new PaypalFactory();
  paymentMethod = paypalFactory.create();
  paymentMethod.createPayment("Order01");

  // entrou pagamento pelo pagseguro
  const pagseguroFactory = new PagseguroFactory();
  paymentMethod = pagseguroFactory.create();
  paymentMethod.createPayment("Order02");
  paymentMethod.refoundPayment("Order02");
};

clientCode();

// Factory Function

class DatabaseInstance2 {}
class EmiteNotaFiscal {}

class AddNewOrder {
  constructor(database: DatabaseInstance2, notaFiscal: EmiteNotaFiscal) {}
}

function makeDatabaseInstance2() {
  return new DatabaseInstance2();
}

function makeEmiteNotaFiscal(){
  return new EmiteNotaFiscal();
}

function makeAddNewOrder(): AddNewOrder {
  return new AddNewOrder(makeDatabaseInstance2(), makeAddNewOrder());
}

// const usecase = makeAddNewOrder();
