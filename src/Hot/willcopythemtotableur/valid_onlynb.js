import{
    //decimalSeparator,userLocale,navigator_language,
    //userTimeZone,usTimeZones,

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
            validator_onlynb(oldvalue, callback,onlynumbers_length_on)
        }
        },
        
      renderer: function (instance, td, row, col, prop, oldvalue, cellProperties,onlynumbers_length_on,...otherArgs) { // renderer of numbers or amounts
        td.innerHTML=oldvalue;
        td.className = 'htLeft htMiddle custom-normalcell';
        }
     
    }
    }


    afterValidatefct_onlynb(isValid, oldvalue, row, prop, source,hot,commentsPlugin,onlynumbers_length_on)
  */

  

  export function renderer_onlynb(instance, td, row, col, prop, oldvalue, cellProperties,onlynumbers_length_on,...otherArgs){
    const data22 = otherArgs[otherArgs.length - 1];
    td.innerHTML=oldvalue;
    data22[row][col] = td.innerHTML;      
    cellProperties.className = 'htRight'; 
    td.style.textAlign = 'right';

                  }
  
  export function validator_onlynb(value, callback,onlynumbers_length_on){
    console.log(value)
    if(value==null || /^\d+(\s*\d+)*$/.test(value.trim()) ) {
         callback(true)
     } else {
       callback(false)
     }
        }


  export function afterValidatefct_onlynb(isValid, oldvalue, row, prop, source,hot,commentsPlugin,onlynumbers_length_on){        
    console.log('prop==8')
    console.log(isValid)

    if (isValid && oldvalue == null ) {
       console.log('condition onlynumbers  1')
       console.log('we are inside afterValidate onlynumbers value==null')
       console.log('COULD END HERE')
       commentsPlugin.removeCommentAtCell(row, prop);
     } else if (isValid && oldvalue !== undefined && typeof oldvalue === 'string'){
         if(/^\s+|\s+$/g.test(oldvalue)){
           console.log('if there is a trainling whitespace between ')
           console.log('we will call my_source_removewhitespacesign')
           hot.setDataAtCell(row, prop, oldvalue.trim(), 'my_source_removewhitespacesign');
           commentsPlugin.removeCommentAtCell(row,prop);
         } else if(oldvalue.length>onlynumbers_length_on){
           commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'onlynumbers_depass_length','fr-FR'))
           hot.setDataAtCell(row, prop,'','my_source_empty_onlynumbers');
         } else {
           console.log('COULD END HERE')
           console.log('do nothing')
           commentsPlugin.removeCommentAtCell(row,prop);
         }
       }
       else if ( oldvalue =='') {
       console.log('condition onlynumbers 3')
       console.log('do nothing could end here')
       } else {
         console.log('condition onlynumbers 4')
       //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + oldvalue + "' n'est pas valide ");
       commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'onlynumbers_invalid','fr-FR'))

       hot.setDataAtCell(row, prop,'','my_source_empty_onlynumbers')

       console.log('do nothing could end here')
       console.log('removes')
     }

  }

