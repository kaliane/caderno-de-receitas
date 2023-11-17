import { Receita } from "../model/receita";
import { Constants } from "./constants";

export class Shared {
    constructor() {}

    public static initializeWebStorage(): void {
        if (localStorage.getItem(Constants.RECEITA_KEY) != null) {
          return;
        }

        let receita : Receita[] = [];;
    
        localStorage.setItem(Constants.RECEITA_KEY, JSON.stringify(receita));
    }
}