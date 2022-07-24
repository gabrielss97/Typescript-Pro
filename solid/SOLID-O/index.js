"use strict";
// Open-Closed Principle
class Professor {
    constructor(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    getOla() {
        return `Olá turma sou o professor ${this.getNome()}`;
    }
}
class AlunoTurma {
    constructor(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    getOla() {
        return `Ooi gente sou o aluno ${this.getNome()}`;
    }
}
class Diretor {
    constructor(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    getOla() {
        return `Olá pessoal sou o diretor ${this.getNome()}`;
    }
}
class Coordenadora {
    constructor(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    getOla() {
        return `Olá pessoal sou a coordenadora ${this.getNome()}`;
    }
}
// Forma Errada
// class HandlerPessoas {
//     listaPessoas(pessoas: Array<any>){
//         for(const pessoa of pessoas){
//             if(pessoa instanceof AlunoTurma){
//                 console.log(`Oi, eu sou o aluno ${pessoa.getNome()}`);
//             }
//             if (pessoa instanceof Professor) {
//                 console.log(`Ola turma sou o professor ${pessoa.getNome()}`);
//             }
//         }
//     }
// }
// FORMA CORRETA
class HandlerPessoas {
    listaPessoas(pessoas) {
        for (const pessoa of pessoas) {
            console.log(pessoa.getOla());
        }
    }
}
const handler = new HandlerPessoas();
handler.listaPessoas([
    new AlunoTurma("Bruno"),
    new AlunoTurma("Camila"),
    new Professor("Jose"),
    new Professor("Ronildo"),
    new AlunoTurma("Giselda"),
    new Diretor("Rodolpho"),
    new Coordenadora("Enedi")
]);
