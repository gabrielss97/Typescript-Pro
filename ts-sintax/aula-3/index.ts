//union types
const saldoBitcoin: string = "0.047"
const b: boolean | Array<string> = ['bruno', 'braga']


function calcularTaxa(quantidadeBtc:string): number {
    const valorConvertido: number = +quantidadeBtc;
    return valorConvertido * 0.08
}

calcularTaxa(saldoBitcoin)
console.log("🚀 ~ file: index.ts ~ line 12 ~ calcularTaxa", calcularTaxa(saldoBitcoin))
