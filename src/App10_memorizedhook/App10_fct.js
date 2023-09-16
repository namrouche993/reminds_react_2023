export function App10_fct(len,val2) {
    let total = 0;
    for (let index = 0; index < len; index++) {
        total = total+Math.random();
    }
    total = total * val2
    return total
}