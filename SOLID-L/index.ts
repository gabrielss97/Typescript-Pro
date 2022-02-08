// Liskov Substitution Principle

class Empregado {
  protected salario: number = 0;
  protected lider: Empregado | null = null;

  constructor(protected nome: string) {}

  setLider(lider: Manager) {
    this.lider = lider;
  }

  calculaSalario(rank: number) {
    this.salario = (12.5 + rank * 2) * 220;
  }
}

class Manager extends Empregado {
  constructor(nome: string) {
    super(nome);
  }

  calculaSalario(rank: number): void {
      this.salario = (20.5 + (rank*2))*220
  }

  gerarRelatorioDePerformance(){
      console.log("Relatorio de manager gerado com sucesso");
  }
}

class CEO extends Empregado{
    constructor(nome: string){ super(nome)}

    calculaSalario(rank: number): void {
        this.salario = (30.5 + (rank*2))*220
    }
}

