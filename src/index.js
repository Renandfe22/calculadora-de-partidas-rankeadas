patente(11, 4)
function patente(v, d){
    const vitorias = v
    const derrotas = d
    let nivel = ""
    let rank = (vitorias - derrotas)
    if(rank <= 10){
        nivel = "ferro"
    }
    if(rank >= 11){
        nivel = "bronze"
    }
    console.log(`O Herói tem de saldo de ${vitorias} vitórias e está no nivel ${nivel}`)
}