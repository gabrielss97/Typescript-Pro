"use strict";
// Single Responsability Principle
class DatabaseInstance {
    connect(param, param2) {
        return {
            livros: {
                save: () => ({}),
            },
        };
    }
}
//FORMA ERRADA ABAIXO
// class Livro {
//   private database: Database;
//   private titulo: string;
//   private resumo: string;
//   constructor(titulo: string, resumo: string) {
//     this.titulo = titulo;
//     this.resumo = resumo;
//     const db = new DatabaseInstance();
//     this.database = db.connect("conectionstring", ["livros"]);
//   }
//   getTitulo(){
//       return this.titulo
//   }
//   save(){
//       this.database.livros.save()
//   }
// }
// FORMA CORRETA
class Livro {
    constructor(titulo, resumo) {
        this.titulo = titulo;
        this.resumo = resumo;
    }
    getTitulo() {
        return this.titulo;
    }
    getResumo() {
        return this.resumo;
    }
}
class LivroRepository {
    constructor() {
        const db = new DatabaseInstance();
        this.database = db.connect("connectionstring", ["livro"]);
    }
    save(livro) {
        this.database.livros.save();
    }
}
