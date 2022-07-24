"use strict";
// Liskov Substitution Principle
// o abstract serve somente para herdar funcionalidades, eu não posso fazer um new EmpregadoBase
class EmpregadoBase {
    constructor(nome) {
        this.salario = 0;
        this.nome = "";
        this.nome = nome;
    }
    calculaSalario(rank) {
        this.salario = (12.5 + rank * 2) * 220;
    }
}
//agora precisamos extender o empregado base em todas as classes
//modo errado sem interface
// class Empregado {
//    salario: number = 0;
//    lider: Empregado | null = null;
//   constructor(protected nome: string) {}
//   setLider(lider: Manager) {
//     this.lider = lider;
//   }
//   calculaSalario(rank: number) {
//     this.salario = (12.5 + rank * 2) * 220;
//   }
// }
// class Manager extends Empregado {
//   constructor(nome: string) {
//     super(nome);
//   }
//   calculaSalario(rank: number): void {
//     this.salario = (20.5 + rank * 2) * 220;
//   }
//   gerarRelatorioDePerformance() {
//     console.log("Relatorio de manager gerado com sucesso");
//   }
// }
// class CEO extends Empregado {
//   constructor(nome: string) {
//     super(nome);
//   }
//   calculaSalario(rank: number): void {
//     this.salario = (30.5 + rank * 2) * 220;
//   }
//   gerarRelatorioDePerformance() {
//     console.log("Relatorio de manager gerado com sucesso");
//   }
//   setLider(lider: Manager) {
//     throw new Error("CEO não tem lider");
//   }
// }
// modo correto implementando as classes e interfaces
class Empregado extends EmpregadoBase {
    constructor(nome) {
        super(nome);
        this.salario = 0;
        this.lider = null;
    }
    setLider(lider) {
        this.lider = lider;
    }
}
class Manager extends EmpregadoBase {
    constructor(nome) {
        super(nome);
        this.lider = null;
    }
    setLider(lider) {
        this.lider = lider;
    }
    calculaSalario(rank) {
        this.salario = (20.5 + rank * 2) * 220;
    }
    gerarRelatorioDePerformance() {
        console.log("Relatorio de manager gerado com sucesso");
    }
}
class CEO extends EmpregadoBase {
    constructor(nome) {
        super(nome);
    }
    calculaSalario(rank) {
        this.salario = (30.5 + rank * 2) * 220;
    }
    gerarRelatorioDePerformance() {
        console.log("Relatorio de manager gerado com sucesso");
    }
}
function main() {
    const manager = new Manager("Bruno Braga");
    manager.calculaSalario(4);
    const empregado = new CEO("Matheus");
    // const empregado = new Empregado('Matheus')
    // const empregado = new CEO('Matheus')
    // empregado.setLider(manager);
    empregado.calculaSalario(2);
    empregado.gerarRelatorioDePerformance();
    console.log(empregado);
}
main();
