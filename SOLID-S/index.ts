// Single Responsability Principle

type Database = {
  livros: {
    save: () => {};
  };
};

class DatabaseInstance {
  connect(param: string, param2: string[]): Database {
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
  constructor(private titulo: string, private resumo: string) {}

  getTitulo() {
    return this.titulo;
  }

  getResumo() {
    return this.resumo;
  }
}

class LivroRepository {
  private database: Database;

  constructor() {
    const db = new DatabaseInstance();
    this.database = db.connect("connectionstring", ["livros"]);
  }

  save(livro: Livro) {
    this.database.livros.save();
  }
}
