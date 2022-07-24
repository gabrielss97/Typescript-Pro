"use strict";
// Interface Segregation Principle
// 
class LivroCrud {
    insert(livro) { }
    update(livro) { }
    destroy(livroId) { }
    select(livro) { }
}
class LivroInsert {
    insert(livro) {
    }
}
