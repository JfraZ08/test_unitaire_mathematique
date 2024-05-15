export function additionPetitsNombres(a: number, b: number): number {
    if(a < 0 || b < 0) {
        throw new Error('Les nombres doivent être positifs');
    }
    if(a > 9 || b > 9) {
        throw new Error('Les nombres doivent être inférieurs à 10');
    }

    return a + b;
}

export function explodeOneNumber(numA: number) {
  let copy: number = numA;
  let array: number[] = [];
 
  while (copy !== 0) {
    array.push(copy % 10);
    copy = Math.floor(copy / 10);
  }
 
  return array;
}
 
export function fastSum(a: number, b: number): number {
    if(a === -b){
        return 0;
    }
    if(Math.abs(a) === 0){
        return b;
    }
    else if(Math.abs(b) === 0){
        return a;
    }
 
    if(a < 0 && b < 0){
        return -sum(-a, -b);
    }
 
    if(a >= 0 && a < 10 && b >= 0 && b < 10){
        return additionPetitsNombres(a, b);
    }
 
    throw new Error("not a fast sum")
}
 
export function explodeNumbers(numA: number, numB: number) {
    const explodesA = explodeOneNumber(numA);
    const explodesB = explodeOneNumber(numB);
    const aIsLonger = explodesA.length > explodesB.length;
    
    const longestArr = aIsLonger ? explodesA : explodesB;
    const other = aIsLonger ? explodesB : explodesA;
    
    return longestArr
    .reduce((acc: number[][], val, i) => [...acc, [val, other[i] || 0]], [])
    .map((e) => (aIsLonger ? e : e.reverse()));
}
 
// for sum of 2 numbers only
export function sum(numA: number, numB: number): number{
    if(Math.sign(numA) * Math.sign(numB) === -1){
        throw new Error("can't sum two number with distinct sign => substraction");
    }
 
    try {
        return fastSum(numA, numB);
    }
    catch(e){
        const explodes = explodeNumbers(numA, numB);
        let retenue = 0;
        let smallSumsConcat = explodes.map( ([a, b], i) => {
            let result = additionPetitsNombres(a, b) + retenue;
            if(result >= 10 && i < explodes.length - 1){
                retenue = 1;
                result = result % 10;
            }
            else {
                retenue = 0;
            }
            return result;
        });
        const stringResult = smallSumsConcat.reverse().join('');
        const intResult = parseInt(stringResult);
 
        return intResult;
    }
};