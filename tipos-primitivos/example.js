//Bolean
function descuento(curso) {
    if (curso === 'TypeSctipt')
        return true;
    return false;
}
console.log("tieneDescuento('TypeSctipt'): ", descuento('TypeSctipt'));
//Number
function getCantidadEstudiantes(curso) {
    if (curso === 'Java')
        return 100;
    return 0;
}
console.log(getCantidadEstudiantes('Java'));
//Number Hexadecimal
var decimal = 10;
var hexadecimal = 0xf00d;
console.log('decimal', decimal);
console.log('hexadecimal', hexadecimal);
