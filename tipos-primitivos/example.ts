//Bolean
function descuento(curso): boolean {
    if(curso === 'TypeSctipt')
        return true;
    return false; 
}

console.log(`tieneDescuento('TypeSctipt'): `, descuento('TypeSctipt')); 

//Number
function getCantidadEstudiantes(curso): number {
    if(curso === 'Java')
        return 100;
    return 0;
}

console.log(getCantidadEstudiantes('Java')); 

//Number Hexadecimal
let decimal: number = 10;
let hexadecimal: number = 0xf00d;
console.log('decimal', decimal);
console.log('hexadecimal', hexadecimal);
