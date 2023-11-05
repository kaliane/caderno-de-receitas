export class Receita {
    titulo: string;
    ingredientes: string;
    comoFazer: string;
    dificuldade: string;
    categoria: string;
    jaFeita: boolean;

    constructor() {
        this.titulo = "";
        this.ingredientes = "";
        this.comoFazer = "";
        this.dificuldade = "";
        this.categoria = "";
        this.jaFeita = false;
    }
}