import{
    //decimalSeparator,userLocale,navigator_language,
    userTimeZone,usTimeZones,

    last_row_after_header,
  
    currencyht_nbnb,currencyht_toshow_nbnb,afterdigit_nbnb, smallafterdigit_nbnb, afterdigitsmallnb_nbnb,
    bignb_nbnb,smallnb_nbnb,decimalnumbers_toshow_withoutrenderer_innumbers_nbnb,usegrouping_nbnb_if_true,
    is_negativenb_accepted_nbnb,
    // is_float_accepted_nbnb,
  
    currencyht_intint,currencyht_toshow_intint,afterdigit_intint,smallafterdigit_intint,afterdigitsmallnb_intint,
    bignb_intint,smallnb_intint,decimalnumbers_toshow_withoutrenderer_innumbers_intint,usegrouping_intint_if_true,
    is_negativenb_accepted_intint,is_float_accepted_intint,
  
    afterdigit_percentage_percperc,smallafterdigit_percentage_percperc,afterdigitsmallnb_percentage_percperc,
    bignbpercent_percperc,smallnbpercent_percperc,decimalnumbers_toshow_withoutrenderer_inpercentage_percperc,
    is_negativenb_accepted_percperc,is_float_accepted_percperc,
  
    emails_length_em,
    phonenumbers_length_pn,
    onlynumbers_length_on
  } from './intials_inputs_nb.js';

  import { comments_messages } from './comments_messages.js'

/*
  else if( i == 1 ) {
    var dd={
      className: "htLeft htMiddle" ,
      validator: function (oldvalue, callback) { // validator of numbers or amounts
          const thisrow = this.row;
          const thiscol = this.col;
          if(thisrow>5){ // editable
            validator_phonenumber(oldvalue, callback,phonenumbers_length_pn)
        }
        },
        
      renderer: function (instance, td, row, col, prop, oldvalue, cellProperties,phonenumbers_length_pn,...otherArgs) { // renderer of numbers or amounts
        td.innerHTML=oldvalue;
        td.style.whiteSpace = 'normal' // wrap text
        td.className = 'htLeft htMiddle custom-normalcell';
        }
     
    }
    }

    afterValidatefct_phonenumber(isValid, oldvalue, row, prop, source,hot,commentsPlugin,phonenumbers_length_pn)
  */

  

  export function renderer_phonenumber(instance, td, row, col, prop, oldvalue, cellProperties,phonenumbers_length_pn,...otherArgs){
    const data22 = otherArgs[otherArgs.length - 1];
    td.innerHTML=oldvalue;
    td.style.whiteSpace = 'normal' // wrap text
    data22[row][col] = td.innerHTML;      
    cellProperties.className = 'htRight'; 
    td.style.textAlign = 'right';

                  }
  
  export function validator_phonenumber(value, callback,phonenumbers_length_pn){
    console.log(value)
    //if(value==null || /^[\d+\(\)\/\s-]+$/.test(value.trim()) ) {
    //if(value==null || /^\+?[\d\(\)\/\s-]+$/g.test(value.trim()) ) {  // when it may start with "+"
    if(value==null || /^\+?[\d\/\s()\-_:]+$/.test(value.trim()) ) {  // when it may start with "+" or it includes / \ - ( ) _ : 
         callback(true)
     } else {
       callback(false)
     }
        }


  export function afterValidatefct_phonenumber(isValid, oldvalue, row, prop, source,hot,commentsPlugin,phonenumbers_length_pn){        
    console.log('prop==7')
    console.log(isValid)

    if (isValid && oldvalue == null ) {
       console.log('condition phonenumbers  1')
       console.log('we are inside afterValidate phonenumbers value==null')
       console.log('COULD END HERE')
       commentsPlugin.removeCommentAtCell(row, prop);
     } else if (isValid && oldvalue !== undefined && typeof oldvalue === 'string'){
         if(/^\s+|\s+$/g.test(oldvalue)){
           console.log('if there is a trainling whitespace between ')
           console.log('we will call my_source_removewhitespacesign')
           hot.setDataAtCell(row, prop, oldvalue.trim(), 'my_source_removewhitespacesign');
           commentsPlugin.removeCommentAtCell(row,prop);
         } else if(oldvalue.length>phonenumbers_length_pn){
           commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'phonenumbers_invalid','fr-FR'))
           hot.setDataAtCell(row, prop,'','my_source_empty_phonenumbers');
         } else {
           console.log('COULD END HERE')
           console.log('do nothing')
           commentsPlugin.removeCommentAtCell(row,prop);
         }
       }
       else if ( oldvalue =='') {
       console.log('condition phonenumbers 3')
       console.log('do nothing could end here')
       } else {
         console.log('condition phonenumbers 4')
       //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + oldvalue + "' n'est pas valide ");
       commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'phonenumbers_invalid','fr-FR'))

       hot.setDataAtCell(row, prop,'','my_source_empty_phonenumbers')

       console.log('do nothing could end here')
       console.log('removes')
     }

}

