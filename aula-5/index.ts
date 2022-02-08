// Interface

// Interface para objeto abaixo

interface IPessoa {
    name: string,
    idade: number
}

const pe: IPessoa = {
    name: 'Gabriel Salvador',
    idade: 30
}

// Interface para classe abaixo

interface IRelogio{
    dataAtual(): Date
}

class Relogio implements IRelogio {
    dataAtual(): Date {
        return new Date()
    }
}

//com a interface podemos fazer sobrecarga, que seria declarar ela duas vezes com propriedades diferentes, ja com o type nao é possivel fazer isso

interface IAluno {
    name: string
}

interface IAluno {
    idade: number
}

const aluno: IAluno = {
    name: "Bruno Braga",
    idade:30
}

//geralmente usa types para tipar funcões ou objetos ou coisas pequenas so para variaveis
// e usa interface para tipar uma classe que também pode falar que é obrigatorio usar um metodo