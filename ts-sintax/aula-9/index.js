"use strict";
// Classes
class PessoaPadrao {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Aluno extends PessoaPadrao {
    constructor(name, email) {
        super(name);
        this.name = name;
        this.email = email;
    }
    getEmail() {
        return this.email;
    }
}
const a = new Aluno("Gabriel", "gabriel@gmail.com");
console.log(a.getName());
console.log(a.getEmail());
