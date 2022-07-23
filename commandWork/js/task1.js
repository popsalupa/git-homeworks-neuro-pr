'use strict';

// function solveEquation(a, b, c) {
// let arr;
// let root1, root2;
// let discr = Math.pow(b, 2)-4*a*c;
//     if (discr > 0) {
//         root1 = (-b + Math.sqrt(discr) )/2(2*a);
//         root2 = (-b - Math.sqrt(discr) )/2(2*a);
//         arr = [root1, root2]
//     } else if (discr == 0) {
//         roo1 = -b/(2*a);
//         arr = [root1]
//     } else if (discr < 0){
//         arr = [];
//     }
//     return arr;
// }
console.log(solveEquation)

let quadraticEquation = (a, b, c) => {
    if(a == 0)
        return false;
    let res = {};
    let D = b * b - 4 * a * c;
    console.log('D = ' + D);
    if(D < 0)
        return false;
    res['discriminant'] = D;
    if(D == 0)
        res["quadratic roots"] = (-b + Math.sqrt(D)) / (2 * a);
    else if(D > 0){
        let tmp = [];
        tmp.push((-b + Math.sqrt(D)) / (2 * a));
        tmp.push((-b - Math.sqrt(D)) / (2 * a));
        res["quadratic roots"] = tmp;
    }
    return res;
}
console.log(quadraticEquation(1,12,36));