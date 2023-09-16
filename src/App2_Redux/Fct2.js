
export  function Fct2(lena,ipt) {
    console.log('we are inside Fct2')
    var total = 0;
    for (let index = 0; index < lena; index++) {
        total = total+Math.random()
    }
    total = total+ipt;
    return total
}
