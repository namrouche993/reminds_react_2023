 export const customRenderer = (instance, td, row, col, prop, value, cellProperties,value1) => {


  console.log('value1 from store : ')
  console.log(value1)

  const formatter = new Intl.NumberFormat('fr-FR', {
    useGrouping: true,
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const value_without_whitespace = value.toString().replace(/^\s*([-+])?\s*(\d+)\s*$/, '$1$2');
  const formattedNumber = formatter.format(Number(value_without_whitespace));
  // Handsontable.renderers.TextRenderer.apply(this, arguments);
  td.innerHTML = formattedNumber + value1;

};
