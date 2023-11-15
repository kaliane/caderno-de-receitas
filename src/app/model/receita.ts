export class Receita {
    id: number;
    titulo: string;
    ingredientes: string;
    comoFazer: string;
    dificuldade: string;
    categoria: string;
    jaFeita: boolean;
    avaliacao: number;

    constructor() {
        this.id = 0;
        this.titulo = "";
        this.ingredientes = "";
        this.comoFazer = "";
        this.dificuldade = "";
        this.categoria = "";
        this.jaFeita = false;
        this.avaliacao = 0;
    }
}