// Utility Types

// Partial

// type Usuario = {
//     nome: string
//     idade: number
// }

// function atualizarUsuario(u: Partial<Usuario>) {

// }

// const user = {
//     nome: 'Gabriel Salvador'
// }

// atualizarUsuario(user)

// Required

// type Usuario = {
//     nome?: string
//     idade?: number
// }

// const user: Usuario = {
//     nome: "Gabriel Salvador"
// }

// const userCompleto: Required<Usuario> = {
//     nome: "Gabriel Salvador",
//     idade: 30
// }

// Readonly

// type Usuario = {
//     nome: string
//     idade: number
// }

// const user: Readonly<Usuario> = {
//     nome: 'Gabriel',
//     idade: 30
// }

//Record

// type Gato = {
//   raca: string;
//   idade: number;
// };

// type Gatos = "frajola" | "tom";

// const gatos: Record<Gatos, Gato> = {
//   frajola: {
//     idade: 2,
//     raca: "pesa",
//   },
//   tom: {
//     idade: 3,
//     raca: "siames",
//   },
// };

// Pick

// type UsuarioCompleto = {
//     nomeCompleto: string
//     nomeDeUsuario: string
//     senha: string
//     endereço: string
//     email: string
//     cpf: string
//     cel: string
// }

// type UsuarioInicial = Pick<UsuarioCompleto, 'nomeCompleto' | 'email'>

// const pessoinha: UsuarioInicial = {
//     nomeCompleto: 'Gabriel Salvador',
//     email: 'gabriel@gmail.com'
// }

// Omit

// type Adm = {
//     nomeCompleto: string
//     nomeDeUsuario: string
//     senha: string
//     permissao: boolean
// }

// type User = Omit<Adm, 'permissao'>

// const pessoinha: User = {
//     nomeDeUsuario: 'Zukew',
//     nomeCompleto: 'Gabriel',
//     senha:'asd'
// }