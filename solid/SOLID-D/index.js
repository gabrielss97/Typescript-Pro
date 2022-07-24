"use strict";
//Dependency Inversion Principle
class LivroCrud2 {
    insert(livro) { }
    destroy(livroId) { }
}
//forma errada, estou criando um objeto dentro da inserção
// class LivroInsertUseCase {
//   livroCrud: any;
//   constructor() {
//     this.livroCrud = new LivroCrud2();
//   }
//   insert(livro: ILivro){
//       this.livroCrud.insert(livro)
//   }
// }
//forma correta
class LivroInsertUseCase {
    constructor(livroAdd) {
        this.livroAdd = livroAdd;
    }
    insert(livro) {
        this.livroAdd.insert(livro);
    }
}
const useCase = new LivroInsertUseCase(new LivroCrud2());
