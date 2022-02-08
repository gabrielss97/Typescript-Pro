// Classes

class PessoaPadrao {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

interface IUsuario {
    getEmail(): string
}

class Aluno extends PessoaPadrao implements IUsuario {
  email: string;
  constructor(public name: string, email: string) {
    super(name);
    this.email = email;
  }

  getEmail(): string {
      return this.email
  }
}

const a = new Aluno('Gabriel','gabriel@gmail.com')
console.log(a.getName());