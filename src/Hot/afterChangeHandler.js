export  function afterChangeHandler(changes,src,hot) {
    console.log('afterChange : ')
    console.log(changes)
    console.log(src)
    console.log('Data changes:', changes, 'Source:', src);
    console.log('hot : ')
    console.log(hot.getData())
    console.log('end afterChange : ')


}
