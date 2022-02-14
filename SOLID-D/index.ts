//Dependency Inversion Principle

interface ILivro {
  nome: string;
}

interface ILivroInsert {
  insert(livro: ILivro): any;
}

interface ILivroDestroy {
  destroy(livroId: number): any;
}

class LivroCrud2 implements ILivroInsert, ILivroDestroy {
  insert(livro: ILivro) {}

  destroy(livroId: number) {}
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
  constructor(private livroAdd: ILivroInsert) {}

  insert(livro: ILivro) {
    this.livroAdd.insert(livro);
  }
}

const useCase = new LivroInsertUseCase(new LivroCrud2())
