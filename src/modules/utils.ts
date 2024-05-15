export function createEmpltyArray(size:number) {
    return new Array(size).fill("")
}

export function explodeOneNumber(numA:number){
    let copy = numA;
    let array = []

    while (copy !== 0) {
        array.push(copy % 10);
        copy = Math.floor(copy /10)
    }

    return array;
}

export function explodeNumbers(numA: number, numB: number){
    const explodeA = explodeOneNumber(numA)
    const explodeB = explodeOneNumber(numB);
    const aIsLonger = explodeA.length > explodeB.length;

    const longestArr = aIsLonger ? explodeA : explodeB;
    const other = aIsLonger ? explodeB : explodeA;

    return longestArr
        .reduce((acc: number[][], val, i) => [...acc, [val, other[i] || 0]], [])
        .map((e) => (aIsLonger ? e : e.reverse()))
}