// Liskov Substitution Principle

// interface para implementar o principio
interface IEmpregado {
  salario: number;
  nome: string;
  calculaSalario(rank: number): void;
}

interface ILider {
  gerarRelatorioDePerformance(): void;
}

interface IGerenciado {
  lider: ILider;
  setLider(lider: ILider): void;
}

// o abstract serve somente para herdar funcionalidades, eu não posso fazer um new EmpregadoBase
abstract class EmpregadoBase implements IEmpregado {
  salario: number = 0;
  nome: string = "";
  constructor(nome: string) {
    this.nome = nome;
  }

  calculaSalario(rank: number): void {
      this.salario = (12.5 + rank * 2) * 220
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

class Empregado extends EmpregadoBase implements IGerenciado{
  salario: number = 0;
  lider: ILider = null!;

 constructor(nome: string) { super(nome)}

 setLider(lider: ILider) {
   this.lider = lider;
 }

}

class Manager extends EmpregadoBase implements ILider, IGerenciado {
  lider: ILider = null!
 constructor(nome: string) {
   super(nome);
 }

 setLider(lider: ILider) {
  this.lider = lider;
}

 calculaSalario(rank: number): void {
   this.salario = (20.5 + rank * 2) * 220;
 }

 gerarRelatorioDePerformance() {
   console.log("Relatorio de manager gerado com sucesso");
 }
}

class CEO extends EmpregadoBase {
 constructor(nome: string) {
   super(nome);
 }

 calculaSalario(rank: number): void {
   this.salario = (30.5 + rank * 2) * 220;
 }

 gerarRelatorioDePerformance() {
   console.log("Relatorio de manager gerado com sucesso");
 }
}

function main() {
  const manager = new Manager("Bruno Braga");
  manager.calculaSalario(4);

  const empregado = new Manager("Matheus");
  // const empregado = new Empregado('Matheus')
  // const empregado = new CEO('Matheus')
  empregado.setLider(manager);
  empregado.calculaSalario(2);

  console.log(empregado);
}

main();
