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

    listaReceitas () {
        let listaReceita: Receita[] = [];

        let receita = new Receita();
        receita.id = 1;
        receita.titulo = "Bolo de Chocolate";
        receita.ingredientes = "Farinha, açucar, chocolate, ovos, leite";
        receita.comoFazer = "Misturar tudo e assar";
        receita.categoria = "Bolos";
        receita.dificuldade = "dificil";
    
        listaReceita.push(receita);
    
        receita = new Receita();
        receita.id = 2;
        receita.titulo = "Pudim de Leite";
        receita.ingredientes = "Leite, açucar, ovos";
        receita.comoFazer = "Misturar tudo e assar";
        receita.categoria = "Sobremesas";
        receita.dificuldade = "medio";
        receita.jaFeita = true;
        receita.avaliacao = 1;
    
        listaReceita.push(receita);
    
        receita = new Receita();
        receita.id = 3;
        receita.titulo = "Drink Morango";
        receita.ingredientes = "Morango, leite, açucar, vodka";
        receita.comoFazer = "Bater tudo no liquidificador";
        receita.categoria = "Bebidas";
        receita.dificuldade = "facil";
        receita.jaFeita = true;
        receita.avaliacao = 3;
    
        listaReceita.push(receita);

        return listaReceita;
    }
}