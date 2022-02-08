// Utility Types

//Partial

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

// user.nome = 'Jorgin'

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

// type Usuario = {
//     nomeCompleto: string
//     nomeDeUsuario: string
//     senha: string
// }

// type PessoaNova = Pick<Usuario, 'nomeCompleto' | 'senha'>

// const pessoinha: PessoaNova = {
//     nomeCompleto: 'Gabriel Salvador',
//     senha: 'asdasd'
// }

// Omit

// type Usuario = {
//     nomeCompleto: string
//     nomeDeUsuario: string
//     senha: string
// }

// type PessoaNova = Omit<Usuario, 'nomeCompleto' | 'senha'>

// const pessoinha: PessoaNova = {
//     nomeDeUsuario: 'Zukew'
// }