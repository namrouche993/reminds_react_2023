export function cols(userLocale3) {
    var fa=[]
    for(let i=0;i<=1;i++){
        if(i==0){
            var dd = {data:i}
        }
        else if (i==1){
            var dd={ data:i,
                validator: function (value, callback) {
                    if (Number(value) > 20) {
                      callback(true);
                    } else {
                      callback(false);
                    }
                  },
                  renderer: function (instance, td, row, col, prop, oldvalue, cellProperties) { // renderer of integers
                    alert('we are inside renderer and userLocale3 is : ' + userLocale3.current)
                    console.log('renderer : ');
                    console.log('userLocale3 in renderer : ');
                    console.log(userLocale3.current); // Use the value11 from the useSelector directly      
                    console.log(oldvalue)              
                    //var userLocale3 = 'en';
                    //var value3 = '15754.156';
                    const formatter = new Intl.NumberFormat(userLocale3.current, {
                            style: 'decimal',
                          });
                    const formattedNumber = formatter.format(Number(oldvalue));
                    console.log(formattedNumber)
                    td.innerHTML=formattedNumber
                  }
                }
    }
    fa.push(dd)
}
return fa
}
