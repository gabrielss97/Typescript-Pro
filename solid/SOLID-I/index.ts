// Interface Segregation Principle

interface ILivro{
    name: string
}

//forma errada
// interface ILivro1 {
//   insert(livro: ILivro): any;
//   update(livro: ILivro): any;
//   destroy(livroId: number): any;
//   select(livroId: number): any;
// }

//forma correta
interface ILivroInsert {
    insert(livro: ILivro): any
}

interface ILivroUpdate {
    update(livro: ILivro): any
}

interface ILivroDestroy {
    destroy(livroId: number): any
}

interface ILivroSelect {
    select(livro: number): any
}
// 
class LivroCrud implements ILivroInsert, ILivroUpdate, ILivroDestroy, ILivroSelect {
  insert(livro: ILivro) {}
  update(livro: ILivro) {}
  destroy(livroId: number) {}
  select(livro: number) {}
}

class LivroInsert implements ILivroInsert {
    insert(livro: ILivro) {

    }
}
