import { multiplication } from "./multiplications";

export function puissance(a:number, b:number):number{
    let res = a;
    if(b < 0){
        throw new Error('les chiffres sont abligatoirement positif');
    }
    if (b === 0) {
        return 1;
    }
    if (b === 1) {
        return a;
    }
        for (let index = 0; index < b; index++) {
            res = multiplication(res,a)
        }
    return res
}