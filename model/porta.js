export default class Porta {
    #numero
    #temPresente
    #selecionada
    #aberta

    constructor(numero, temPresente = false, selecionada = false, aberta = false){
        this.#aberta = aberta
        this.#numero = numero
        this.#selecionada = selecionada
        this.#temPresente = temPresente
    }

    get numero(){
        return this.#numero
    }

    get temPresente(){
        return this.#temPresente
    }

    get aberta(){
        return this.#aberta
    }

    get selecionada(){
        return this.#selecionada
    }

    desmarcar(){
        const selecionada = false
        return new Porta(this.numero, this.temPresente, selecionada, this.aberta) 
    }

    // Verifica se a porta está selecionada e gera uma nova instância
    alternarSelecao(){
        const selecionada = !this.#selecionada
        return new Porta(this.numero, this.temPresente, selecionada, this.aberta)
    }

    abrir(){
        const aberta = true
        return new Porta(this.numero, this.temPresente, this.selecionada, aberta)
    }
}