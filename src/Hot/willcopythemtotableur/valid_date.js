//is_date_exist==false
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
    onlynumbers_length_on,
    text_length_txt,
    use_en_time,
  

} from '../../initials_inputs.js'


  import { comments_messages } from '../../Tools/comments_messages.js'
  import {isValidDate} from './isValidDate.js'
  import {startsWithElement} from './startsWithElement.js'

  import { useSelector, useDispatch } from 'react-redux'; 


// REMEMBER , NOTE : dont forget to add beforekeydown_dates  beforeKeyDown_Dates_fct

 //     if(currentColIndex==1) {  // editable (about dates) edit it later changeable , modify it later , change it later
 //  beforeKeyDown_Dates_fct(event, hot) // about dates
 // }

 

/*
//#region Columns_data_for_Validator_renders copied scripts : 
import { validator_date,renderer_date } from './Validator_renders/valid_date.js' //is_date_exist==false

import 
{ 
  userTimeZone,usTimeZones, //is_date_exist==false
  use_en_time
}
from '../../initials_inputs.js'


  const userLocale2_redux  = useSelector(state => state.userLocale2);
  const decimalSeparator2_redux  = useSelector(state => state.navigator_language2);
  const decimalSeparator2_redux  = useSelector(state => state.decimalSeparator2);
  const use_english_date_by_user_himeself_in_modal_redux = useSelector(state => state.use_english_date_by_user_himeself_in_modal )

  else if( i == 1 ) {
    var dd={
      className: "htRight htMiddle" ,
      validator: function (oldvalue, callback) { // validator of dates
          const thisrow = this.row;
          const thiscol = this.col;
            let decimalSeparator = decimalSeparator2_redux;
              let userLocale = userLocale2_redux;
              let navigator_language = decimalSeparator2_redux;
            
          if(thisrow>5){ // editable
            validator_date(oldvalue, callback,
                  decimalSeparator,userLocale,navigator_language,userTimeZone,usTimeZones,use_en_time,
                  use_english_date_by_user_himeself_in_modal_withoutfct
              )
        }
        },
      renderer: function (instance, td, row, col, prop, oldvalue, cellProperties,...otherArgs) { // renderer of numbers or amounts
          let decimalSeparator = decimalSeparator2_redux;
              let userLocale = userLocale2_redux;
              let navigator_language = navigator_language2_redux;
            
         if(row>5){ // editable
          renderer_date(instance, td, row, col, prop, oldvalue, cellProperties,
                decimalSeparator,userLocale,navigator_language,userTimeZone,usTimeZones,use_en_time
            ,...otherArgs,data22)
        } else if ( row>3 ) { // editable
             td.innerHTML=oldvalue;
             data22[row][col] = td.innerHTML;
             td.className = 'htCenter htMiddle custom-titlecell2';
          }
          }
     
    }
  }
//#endregion columnsdata copied scripts
**********************************************************************


----------------------------------------------------------------------
//region afterChange copied script :

  const navigator_language2_avant_modify_redux  = useSelector(state => state.navigator_language2_avant_modify);
  const navigator_language2_redux  = useSelector(state => state.navigator_language2_redux);
  const decimalSeparator2_redux = useSelector(state => state.decimalSeparator2);
  const hot_undone2_redux = useSelector(state => state.hot_undone2);

  
import {

  convertDateFormat, //is_date_exist==false

} from '../initials_inputs.js';



else if (src=='dataatrowprop_convert_date'){ //is_date_exist==false
  hot.undoRedo.doneActions.pop();
  for (let index = 0; index<hot.undoRedo.doneActions.length; index++) {
    hot.undoRedo.doneActions[index].changes.forEach((x,y)=>{
      if(x[1]==14) {  // editable
        if(x[2]!==null && x[2]!=='' && x[2]!==' '){
          x[2]=convertDateFormat(x[2], navigator_language2_avant_modify_redux, decimalSeparator2_redux) 
        }
        if(x[3]!==null && x[3]!=='' && x[3]!==' '){
          x[3]=convertDateFormat(x[3], navigator_language2_avant_modify_redux, decimalSeparator2_redux) 
        }
        }
    })
  }
  hot.undoRedo.undoneActions=_.cloneDeep(hot_undone2_redux)
}

//end region afterChange copied scripts
**********************************************************************



----------------------------------------------------------------------
//region afterValidate copied script :

  import { afterValidatefct_date } from './valid_date.js'  //is_date_exist==false

    
import 
{ 
  userTimeZone,usTimeZones, //is_date_exist==false
  use_en_time, //is_date_exist==false
}
from '../initials_inputs.js'

// juste after let decimalSeparator and after let userLocale :  

const navigator_language2_redux = useSelector(state => state.navigator_language2); //is_date_exist==false
const decimalSeparator2_redux = useSelector(state => state.decimalSeparator2);

let navigator_language = decimalSeparator2_redux; //is_date_exist==false
const use_english_date_by_user_himeself_in_modal_redux = useSelector(state => state.use_english_date_by_user_himeself_in_modal);
let use_english_date_by_user_himeself_in_modal_withoutfct=use_english_date_by_user_himeself_in_modal_redux


     else if (prop == 14) {
          afterValidatefct_date(isValid, oldvalue, row, prop, source,hot,commentsPlugin,
            decimalSeparator,userLocale,navigator_language,userTimeZone,usTimeZones,use_en_time,
            use_english_date_by_user_himeself_in_modal_withoutfct
            )        
        }

//end region afterValidate copied scripts
**********************************************************************


----------------------------------------------------------------------
//region main.html copied script :
    import { isValidDate } from '../Tools/isValidDate.js'; //is_date_exist==false

    const userLocale2_redux  = useSelector(state => state.userLocale2);
    const navigator_language2_redux  = useSelector(state => state.navigator_language2);
    const decimalSeparator2_redux  = useSelector(state => state.decimalSeparator2);
    const ds_haschanged_redux  = useSelector(state => state.ds_haschanged);
    const hot_undone2_redux  = useSelector(state => state.hot_undone2);
    const use_english_date_by_user_himeself_in_modal_redux  = useSelector(state => state.use_english_date_by_user_himeself_in_modal); //is_date_exist==false
    const navigator_language2_avant_modify_redux  = useSelector(state => state.navigator_language2_avant_modify); //is_date_exist==false

    
    import { 
    //decimalSeparator,userLocale,navigator_language,
    userTimeZone,usTimeZones, //is_date_exist==false
        
        
        navigator_language2_bydefault_ifnotexist, //is_date_exist==false
        userlocale2_bydefault_ifnotexist, 
        decimalseparator2_bydefault_ifnotexist,
        

        use_all_language_modal_depend_langbrowser, 
        which_lanaguage_touse_if_langbrowserisflse,

        all_european_formal_are_test,
        all_european_formal_are,

        convertDateFormat, //is_date_exist==false

       } from '../initials_inputs.js'



       
//end region main.html copied scripts
**********************************************************************
 

  */


  export function renderer_date(instance, td, row, col, prop, oldvalue, cellProperties,
    decimalSeparator,userLocale,navigator_language,userTimeZone,usTimeZones,use_en_time
    ,...otherArgs){
    //console.log('data22 in renderer_date : ')
    const data22 = otherArgs[otherArgs.length - 1];
    //console.log(data22)
    td.innerHTML=oldvalue;
    data22[row][col] = td.innerHTML;      // it was be with // i dont know why  
    cellProperties.className = 'htRight'; 
    td.style.textAlign = 'right';
    td.className = 'htLeft htMiddle custom-normalcell'
                  }
  
  export function validator_date(value, callback,
    decimalSeparator,userLocale,navigator_language,userTimeZone,usTimeZones,use_en_time
    ){
    if( value==null || 
        /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(value.trim().replace(/\s*\/\s*/g,"/")) ||  // "31/12 / 1995"
        /^\d{1,2}\-\d{1,2}\-\d{4}$/.test(value.trim().replace(/\s*-\s*/g,"-")) ||   // "31 - 12-1995"
        /^\d{1,2}\.\d{1,2}\.\d{4}$/.test(value.trim().replace(/\s*\.\s*/g,".")) ||   // "31.12. 1995"

        /^\d{4}\/\d{1,2}\/\d{1,2}$/.test(value.trim().replace(/\s*\/\s*/g,"/")) ||  // 1995/31/12
        /^\d{4}\-\d{1,2}\-\d{1,2}$/.test(value.trim().replace(/\s*-\s*/g,"-")) ||   // 1995-12-31
        /^\d{4}\.\d{1,2}\.\d{1,2}$/.test(value.trim().replace(/\s*\.\s*/g,".")) ||   // 1995.12.31

        /^\d{1,2}\/\d{1,2}\/\d{2}$/.test(value.trim().replace(/\s*\/\s*/g,"/")) ||   // 11/12/23
        /^\d{1,2}\-\d{1,2}\-\d{2}$/.test(value.trim().replace(/\s*-\s*/g,"-"))  ||   // 11-12-23
        /^\d{1,2}\.\d{1,2}\.\d{2}$/.test(value.trim().replace(/\s*\.\s*/g,".")) ||   // 11.12.23


        ///^\d{1,2}\/\d{1,2}$/.test(value.trim().replace(/\s*\/\s*/g,"/"))   // 01/12 25/12 99/11
        /^\d{1,2}\/\d{1,2}(\/)?$/.test(value.trim().replace(/\s*\/\s*/g,"/")) ||   // 01/12 25/12/ 99/11/
        /^\d{1,2}\-\d{1,2}(\-)?$/.test(value.trim().replace(/\s*-\s*/g,"-")) ||   // 01-12 25-12- 99-11-
        /^\d{1,2}\.\d{1,2}(\.)?$/.test(value.trim().replace(/\s*\.\s*/g,".")) ||  // 01.12 25.12. 99.11.
        
        /^\d{4}\/\d{1,2}(\/)?$/.test(value.trim().replace(/\s*\/\s*/g,"/")) ||   // 2023/12 2022/1/
        /^\d{4}\-\d{1,2}(\-)?$/.test(value.trim().replace(/\s*-\s*/g,"-")) ||   // 2001-12 2025-1-
        /^\d{4}\.\d{1,2}(\.)?$/.test(value.trim().replace(/\s*\.\s*/g,".")) ||   // 2001.2 2025.12.

        /^\d{1,2}\/\d{4}(\/)?$/.test(value.trim().replace(/\s*\/\s*/g,"/")) ||   // 12/2023 1/2022/
        /^\d{1,2}\-\d{4}(\-)?$/.test(value.trim().replace(/\s*-\s*/g,"-")) ||   // 12-2001 1-2025-
        /^\d{1,2}\.\d{4}(\.)?$/.test(value.trim().replace(/\s*\.\s*/g,".")) ||   // 3.2001 12.2025.

        /^\d{4}\/?$/.test(value.trim().replace(/\s*\/\s*/g,"/")) ||              // 2023  2022/
        /^\d{4}[-]?\s*$/.test(value.trim().replace(/\s*-\s*/g,"-")) ||              // 2023  2022-
        /^\d{4}[.]?\s*$/.test(value.trim().replace(/\s*\.\s*/g,"."))                 // 2023  2022.

    ){
      //console.log('calback trueeeeeeeeeeeeee')
      callback(true)
    } else {
     //console.log('calback falseeeeeeeeeeeeeee')
      callback(false)
    }

        }


  export function afterValidatefct_date(isValid, oldvalue, row, prop, source,hot,commentsPlugin,
    decimalSeparator,userLocale,navigator_language,userTimeZone,usTimeZones,use_en_time,
    use_english_date_by_user_himeself_in_modal_withoutfct
    ){
      const dispatch = useDispatch();
      dispatch({ type: 'SET_condition_split2', payload: true });  // WITH REDUX
        
        if (isValid && oldvalue == null ) {
          //console.log('condition date 1')
          //console.log('we are inside afterValidate date oldvalue==null')
          //console.log('COULD END HERE')
          commentsPlugin.removeCommentAtCell(row, prop);
        } else if (isValid && oldvalue !== undefined && typeof oldvalue === 'string'){
          //console.log('condition date 2 !! ')
          //console.log(oldvalue)
          //console.log(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(oldvalue.trim().replace(/\s*\/\s*/g,"/")))
              
             if(/\s+/.test(oldvalue)){
               //console.log('condition date 2.1 removes whitespaces')
              hot.setDataAtCell(row, prop, oldvalue.trim().replace(/\s*\/\s*/g,"/").replace(/\s*-\s*/g,"-").replace(/\s*\.\s*/g,"."),'my_source_removewhitespacesign_date')
              commentsPlugin.removeCommentAtCell(row, prop);
             }else{
              //console.log('condition date 2.2')
              
              if(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(oldvalue.trim().replace(/\s*\/\s*/g,"/"))){
                //console.log('condition date 2.2.1  31/12/1995 like fr-FR and european an (en-US but with switching month and days) ')                  
                var splitdate01='/';
                //console.log(navigator_language)
                //console.log(startsWithElement(usTimeZones,userTimeZone))
                //console.log(use_en_time)
                if( (navigator_language=='en-US' && startsWithElement(usTimeZones,userTimeZone) && use_en_time==true) || use_english_date_by_user_himeself_in_modal_withoutfct==true){
                  ////console.log('english 3 correct : ')
                  var [monthdate,daydate, yeardate] = oldvalue.split(splitdate01); // edit it modify it change it , when US date format occurs                  
                  // isValidDate('35/02/2002','/',1,2,3)
                  var is_validate_date=isValidDate(oldvalue,'/',2,1,3)
                } else {
                  var [daydate,monthdate, yeardate] = oldvalue.split(splitdate01); // edit it modify it change it , when US date format occurs                  
                  isValidDate(oldvalue,'/',1,2,3);
                  var is_validate_date=isValidDate(oldvalue,'/',1,2,3)
                  ////console.log(is_validate_date)
                }
                if(is_validate_date){
                  ////console.log('daydate check : ')
                  ////console.log(daydate)                    
                  ////console.log('monthdate check : ')
                  ////console.log(monthdate)


                 if(navigator_language=='en-US'){
                 // 'jj/mm/aaaa' // 'mm/dd/yyyy'; // 12/31/1990 edit it later , modify it later  , change it later
                 var splitdate001='/';
                 if( (startsWithElement(usTimeZones,userTimeZone) && use_en_time==true) || use_english_date_by_user_himeself_in_modal_withoutfct==true){
                       // var dateformatlanguage = 'mm/dd/aaaa';
                  
            if(daydate.toString().length==1 && monthdate.toString().length==1){
                         daydate='0'+daydate;
                         monthdate='0'+monthdate;
            hot.setDataAtCell(row, prop, monthdate+splitdate001+daydate+splitdate001+yeardate,'my_source_date')

            } else if(daydate.toString().length==1 && monthdate.toString().length==2){
                         daydate='0'+daydate;
            hot.setDataAtCell(row, prop, monthdate+splitdate001+daydate+splitdate001+yeardate,'my_source_date')
            } else if(daydate.toString().length==2 && monthdate.toString().length==1){
                         monthdate='0'+monthdate;  
            hot.setDataAtCell(row, prop, monthdate+splitdate001+daydate+splitdate001+yeardate,'my_source_date')
            } else {
                         ////console.log('COULD END HERE')
                         commentsPlugin.removeCommentAtCell(row, prop);
                     }

                       } else {
                        if(daydate.toString().length==1 && monthdate.toString().length==1){
                         daydate='0'+daydate;
                         monthdate='0'+monthdate;
            hot.setDataAtCell(row, prop, daydate+splitdate001+monthdate+splitdate001+yeardate,'my_source_date')

            } else if(daydate.toString().length==1 && monthdate.toString().length==2){
                         daydate='0'+daydate;
                         hot.setDataAtCell(row, prop, daydate+splitdate001+monthdate+splitdate001+yeardate,'my_source_date')
            } else if(daydate.toString().length==2 && monthdate.toString().length==1){
                         monthdate='0'+monthdate;  
                         hot.setDataAtCell(row, prop, daydate+splitdate001+monthdate+splitdate001+yeardate,'my_source_date')
            } else {
                         ////console.log('COULD END HERE')
                         commentsPlugin.removeCommentAtCell(row, prop);
                     }
                       }

                } else if(navigator_language=='ko-KR' || navigator_language=='hu-HU'){
                  // 'aaaa.mm.jj'
                  var splitdate1='.';
                  hot.setDataAtCell(row, prop, yeardate+splitdate1+monthdate+splitdate1+daydate,'my_source_date')
                  //console.log('new date format : ' + yeardate+splitdate1+monthdate+splitdate1+daydate)

                } else if(navigator_language=='ja-JP' || navigator_language=='ZH-CN'){
                  var splitdate1='/';
                  hot.setDataAtCell(row, prop, yeardate+splitdate1+monthdate+splitdate1+daydate,'my_source_date')
                  //console.log('new date format : ' + yeardate+splitdate1+monthdate+splitdate1+daydate)

  } else if(navigator_language=='en-CA'){
                  // 'aaaa-mm-jj' //'yyyy-mm-dd' // 1990-12-31
                  var splitdate1='-';
                  hot.setDataAtCell(row, prop, yeardate+splitdate1+monthdate+splitdate1+daydate,'my_source_date')
                  //console.log('new date format : ' + yeardate+splitdate1+monthdate+splitdate1+daydate)


  } else if(navigator_language=='de-DE' || navigator_language=='ru-RU' || navigator_language=='tr-TR'){
                  //'jj.mm.aaaa' //'dd.mm.yyyy' // 12.31.1990
                  var splitdate1='.';
                  hot.setDataAtCell(row, prop, daydate+splitdate1+monthdate+splitdate1+yeardate,'my_source_date')
                  //console.log('new date format : ' + daydate+splitdate1+monthdate+splitdate1+yeardate)

  } else {
    // european and other formats
    //'jj/mm/aaaa' // 'dd/mm/yyyy' // 31/12/1990
    var splitdate001 = '/';
    if(daydate.toString().length==1 && monthdate.toString().length==1){
                         daydate='0'+daydate;
                         monthdate='0'+monthdate;
                         //console.log(daydate+splitdate001+monthdate+splitdate001+yeardate)
            hot.setDataAtCell(row, prop, daydate+splitdate001+monthdate+splitdate001+yeardate,'my_source_date')

            } else if(daydate.toString().length==1 && monthdate.toString().length==2){
                         daydate='0'+daydate;
                         hot.setDataAtCell(row, prop, daydate+splitdate001+monthdate+splitdate001+yeardate,'my_source_date')
            } else if(daydate.toString().length==2 && monthdate.toString().length==1){
                         monthdate='0'+monthdate;  
                         hot.setDataAtCell(row, prop, daydate+splitdate001+monthdate+splitdate001+yeardate,'my_source_date')
            } else {
                         //console.log('COULD END HERE')
                         commentsPlugin.removeCommentAtCell(row, prop);
                     }
  }
} else {
  //console.log('is_validate_date is false')
  //console.log(row)
  //console.log(prop)
  //commentsPlugin.setCommentAtCell(row, prop, "la date '" + oldvalue + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  ");
  commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'date_try_to_fix','fr-FR'))
  hot.setDataAtCell(row, prop,'','my_source_empty_date')
}
              }
// **********************************************************************************
// **********************************************************************************
// ************************ condition date finished 2.2.1 *********************************
// **********************************************************************************
// **********************************************************************************
              
              else if (/^\d{1,2}\-\d{1,2}\-\d{4}$/.test(oldvalue.trim().replace(/\s*-\s*/g,"-"))){
                //console.log('condition date 2.2.2  31-12-1995 like no one')                  
                var splitdate02='-';
                //var [daydate,monthdate, yeardate] = oldvalue.split(splitdate02); // edit it modify it change it , when US date format occurs                  
                if( (navigator_language=='en-US' && startsWithElement(usTimeZones,userTimeZone) && use_en_time==true) || use_english_date_by_user_himeself_in_modal_withoutfct==true ){
                  var [monthdate,daydate, yeardate] = oldvalue.split(splitdate02); // edit it modify it change it , when US date format occurs                  
                  // isValidDate('35/02/2002','/',1,2,3)
                  var is_validate_date=isValidDate(oldvalue,'-',2,1,3)
                } else {
                  var [daydate,monthdate, yeardate] = oldvalue.split(splitdate02); // edit it modify it change it , when US date format occurs                  
                  isValidDate(oldvalue,'/',1,2,3);
                  var is_validate_date=isValidDate(oldvalue,'-',1,2,3)
                  //console.log(is_validate_date)

                }
                if(is_validate_date){
                
                 if(navigator_language=='en-US'){
                 // 'jj/mm/aaaa' // 'mm/dd/yyyy'; // 12/31/1990 edit it later , modify it later  , change it later
                 if( (startsWithElement(usTimeZones,userTimeZone) && use_en_time==true) || use_english_date_by_user_himeself_in_modal_withoutfct==true ){
                  var splitdate1='/';
                  hot.setDataAtCell(row, prop, monthdate+splitdate1+daydate+splitdate1+yeardate,'my_source_date')
                  //console.log('new date format : ' + monthdate+splitdate1+daydate+splitdate1+yeardate)   
                
                 } else {
                  var splitdate1='/';
                  hot.setDataAtCell(row, prop, daydate+splitdate1+monthdate+splitdate1+yeardate,'my_source_date')
                  //console.log('new date format : ' + daydate+splitdate1+monthdate+splitdate1+yeardate)   
                }
                } else if(navigator_language=='ko-KR' || navigator_language=='hu-HU'){
                  // 'aaaa.mm.jj'
                  var splitdate1='.';
                  hot.setDataAtCell(row, prop, yeardate+splitdate1+monthdate+splitdate1+daydate,'my_source_date')
                  //console.log('new date format : ' + yeardate+splitdate1+monthdate+splitdate1+daydate)

                } else if(navigator_language=='ja-JP' || navigator_language=='ZH-CN'){
                  var splitdate1='/';
                  hot.setDataAtCell(row, prop, yeardate+splitdate1+monthdate+splitdate1+daydate,'my_source_date')
                  //console.log('new date format : ' + yeardate+splitdate1+monthdate+splitdate1+daydate)

  } else if(navigator_language=='en-CA'){
                  // 'aaaa-mm-jj' //'yyyy-mm-dd' // 1990-12-31
                  var splitdate1='-';
                  hot.setDataAtCell(row, prop, yeardate+splitdate1+monthdate+splitdate1+daydate,'my_source_date')
                  //console.log('new date format : ' + yeardate+splitdate1+monthdate+splitdate1+daydate)


  } else if(navigator_language=='de-DE' || navigator_language=='ru-RU' || navigator_language=='tr-TR'){
                  //'jj.mm.aaaa' //'dd.mm.yyyy' // 12.31.1990
                  var splitdate1='.';
                  hot.setDataAtCell(row, prop, daydate+splitdate1+monthdate+splitdate1+yeardate,'my_source_date')
                  //console.log('new date format : ' + daydate+splitdate1+monthdate+splitdate1+yeardate)

  } else {
                  var splitdate1='/';
                  hot.setDataAtCell(row, prop, daydate+splitdate1+monthdate+splitdate1+yeardate,'my_source_date')
                  //console.log('new date format : ' + daydate+splitdate1+monthdate+splitdate1+yeardate)   
  } 
} else {
  //commentsPlugin.setCommentAtCell(row, prop, "la date '" + oldvalue + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  ");
  commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'date_try_to_fix','fr-FR'))
  hot.setDataAtCell(row, prop,'','my_source_empty_date')
}

// **********************************************************************************
// **********************************************************************************
// ************************ condition date 2 finished *********************************
// **********************************************************************************
// **********************************************************************************

} else if (/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(oldvalue.trim().replace(/\s*\.\s*/g,".")) ){
                //console.log('condition date 2.2.3  31.12.1995 like  de-DE date format ')                  
                var splitdate03='.';
                if( (navigator_language=='en-US' && startsWithElement(usTimeZones,userTimeZone) && use_en_time==true) || use_english_date_by_user_himeself_in_modal_withoutfct==true ){
                  var [monthdate,daydate, yeardate] = oldvalue.split(splitdate03); // edit it modify it change it , when US date format occurs                  
                  var is_validate_date=isValidDate(oldvalue,'.',2,1,3)
                } else {
                  var [daydate,monthdate, yeardate] = oldvalue.split(splitdate03); // edit it modify it change it , when US date format occurs                  
                  var is_validate_date=isValidDate(oldvalue,'.',1,2,3)
                  ////console.log(is_validate_date)

                }
                if(is_validate_date){
                                  
                if(navigator_language=='en-US'){
                 // 'jj/mm/aaaa' // 'mm/dd/yyyy'; // 12/31/1990 edit it later , modify it later  , change it later
                  if( (startsWithElement(usTimeZones,userTimeZone) && use_en_time==true) || use_english_date_by_user_himeself_in_modal_withoutfct==true ){
                    var splitdate1='/';
                    hot.setDataAtCell(row, prop, daydate+splitdate1+monthdate+splitdate1+yeardate,'my_source_date')
                    //console.log('new date format : ' + monthdate+splitdate1+daydate+splitdate1+yeardate)
                  } else {
                    var splitdate1='/';
                    hot.setDataAtCell(row, prop, daydate+splitdate1+monthdate+splitdate1+yeardate,'my_source_date')
                    //console.log('new date format : ' + daydate+splitdate1+monthdate+splitdate1+yeardate)
                  }
                  
                } else if(navigator_language=='ko-KR' || navigator_language=='hu-HU'){
                  // 'aaaa.mm.jj'
                  var splitdate1='.';
                  hot.setDataAtCell(row, prop, yeardate+splitdate1+monthdate+splitdate1+daydate,'my_source_date')
                  //console.log('new date format : ' + yeardate+splitdate1+monthdate+splitdate1+daydate)

                } else if(navigator_language=='ja-JP' || navigator_language=='ZH-CN'){
                  var splitdate1='/';
                  hot.setDataAtCell(row, prop, yeardate+splitdate1+monthdate+splitdate1+daydate,'my_source_date')
                  //console.log('new date format : ' + yeardate+splitdate1+monthdate+splitdate1+daydate)

  } else if(navigator_language=='en-CA'){
                  // 'aaaa-mm-jj' //'yyyy-mm-dd' // 1990-12-31
                  var splitdate1='-';
                  hot.setDataAtCell(row, prop, yeardate+splitdate1+monthdate+splitdate1+daydate,'my_source_date')
                  //console.log('new date format : ' + yeardate+splitdate1+monthdate+splitdate1+daydate)


  } else if(navigator_language=='de-DE' || navigator_language=='ru-RU' || navigator_language=='tr-TR'){
                  //'jj.mm.aaaa' //'dd.mm.yyyy' // 12.31.1990
                  //var splitdate1='.';
                  //hot.setDataAtCell(row, prop, daydate+splitdate1+monthdate+splitdate1+yeardate)
                  ////console.log('new date format : ' + daydate+splitdate1+monthdate+splitdate1+yeardate)
                  
                  
                  var splitdate003 = '.';
    if(daydate.toString().length==1 && monthdate.toString().length==1){
                         daydate='0'+daydate;
                         monthdate='0'+monthdate;
                         //console.log(daydate+splitdate003+monthdate+splitdate003+yeardate)
            hot.setDataAtCell(row, prop, daydate+splitdate003+monthdate+splitdate003+yeardate,'my_source_date')

            } else if(daydate.toString().length==1 && monthdate.toString().length==2){
                         daydate='0'+daydate;
                         hot.setDataAtCell(row, prop, daydate+splitdate003+monthdate+splitdate003+yeardate,'my_source_date')
            } else if(daydate.toString().length==2 && monthdate.toString().length==1){
                         monthdate='0'+monthdate;  
                         hot.setDataAtCell(row, prop, daydate+splitdate003+monthdate+splitdate003+yeardate,'my_source_date')
            } else {
                         //console.log('COULD END HERE')
                         commentsPlugin.removeCommentAtCell(row, prop);
                     }

  } else {
    // european and other formats
    //'jj/mm/aaaa' // 'dd/mm/yyyy' // 31/12/1990
                  var splitdate1='/';
                  hot.setDataAtCell(row, prop, daydate+splitdate1+monthdate+splitdate1+yeardate,'my_source_date')
                  //console.log('new date format : ' + daydate+splitdate1+monthdate+splitdate1+yeardate)   
                   }
                } else {                
                  //commentsPlugin.setCommentAtCell(row, prop, "la date '" + oldvalue + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  ");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'date_try_to_fix','fr-FR'))

                  hot.setDataAtCell(row, prop,'','my_source_empty_date')
               }   
              
// **********************************************************************************
// **********************************************************************************
// ************************ condition date 2.2.3  31.12.1995 finished *********************************
// **********************************************************************************
// **********************************************************************************

} else if (/^\d{4}\/\d{1,2}\/\d{1,2}$/.test(oldvalue.trim().replace(/\s*\/\s*/g,"/")) ) {
  // 1995/12/31
  //console.log('condition date 2.2.4  1995/12/31 like ja-JP')
                  
                var splitdate04='/';
                if( (navigator_language=='en-US' && startsWithElement(usTimeZones,userTimeZone) && use_en_time==true) || use_english_date_by_user_himeself_in_modal_withoutfct==true ){
                  var [yeardate,daydate,monthdate] = oldvalue.split(splitdate04); // edit it modify it change it , when US date format occurs                  
                  var is_validate_date=isValidDate(oldvalue,'/',3,1,2)
                } else {
                  var [yeardate,monthdate,daydate] = oldvalue.split(splitdate04); // edit it modify it change it , when US date format occurs                  
                  var is_validate_date=isValidDate(oldvalue,'/',3,2,1)
                  ////console.log(is_validate_date)

                }
                if(is_validate_date){
                                  
                if(navigator_language=='en-US'){
                 // 'jj/mm/aaaa' // 'mm/dd/yyyy'; // 12/31/1990 edit it later , modify it later  , change it later
                  if( (startsWithElement(usTimeZones,userTimeZone) && use_en_time==true) || use_english_date_by_user_himeself_in_modal_withoutfct==true ){
                    var splitdate1='/';
                    hot.setDataAtCell(row, prop, monthdate+splitdate1+daydate+splitdate1+yeardate,'my_source_date')
                    //console.log('new date format : ' + monthdate+splitdate1+daydate+splitdate1+yeardate)
                  } else {
                    var splitdate1='/';
                    hot.setDataAtCell(row, prop, daydate+splitdate1+monthdate+splitdate1+yeardate,'my_source_date')
                    //console.log('new date format : ' + daydate+splitdate1+monthdate+splitdate1+yeardate)
                  }
                  
                } else if(navigator_language=='ko-KR' || navigator_language=='hu-HU'){
                  // 'aaaa.mm.jj'
                  var splitdate1='.';
                  hot.setDataAtCell(row, prop, yeardate+splitdate1+monthdate+splitdate1+daydate,'my_source_date')
                  //console.log('new date format : ' + yeardate+splitdate1+monthdate+splitdate1+daydate)

                } else if(navigator_language=='ja-JP' || navigator_language=='ZH-CN'){
                      // 1990/12/31
                  //var splitdate1='/';
                  //hot.setDataAtCell(row, prop, yeardate+splitdate1+monthdate+splitdate1+daydate)
                  ////console.log('new date format : ' + yeardate+splitdate1+monthdate+splitdate1+daydate)

                  var splitdate004 = '/';
    if(daydate.toString().length==1 && monthdate.toString().length==1){
                         daydate='0'+daydate;
                         monthdate='0'+monthdate;
            hot.setDataAtCell(row, prop, yeardate+splitdate004+monthdate+splitdate004+daydate,'my_source_date')

            } else if(daydate.toString().length==1 && monthdate.toString().length==2){
                         daydate='0'+daydate;
                         hot.setDataAtCell(row, prop, yeardate+splitdate004+monthdate+splitdate004+daydate,'my_source_date')
            } else if(daydate.toString().length==2 && monthdate.toString().length==1){
                         monthdate='0'+monthdate;  
                         hot.setDataAtCell(row, prop, yeardate+splitdate004+monthdate+splitdate004+daydate,'my_source_date')
            } else {
                         //console.log('COULD END HERE')
                         commentsPlugin.removeCommentAtCell(row, prop);
                     }


  } else if(navigator_language=='en-CA'){
                  // 'aaaa-mm-jj' //'yyyy-mm-dd' // 1990-12-31
                  var splitdate1='-';
                  hot.setDataAtCell(row, prop, yeardate+splitdate1+monthdate+splitdate1+daydate,'my_source_date')
                  //console.log('new date format : ' + yeardate+splitdate1+monthdate+splitdate1+daydate)

                  ////console.log('COULD END HERE')
                  //commentsPlugin.removeCommentAtCell(row, prop);


  } else if(navigator_language=='de-DE' || navigator_language=='ru-RU' || navigator_language=='tr-TR'){
                  //'jj.mm.aaaa' //'dd.mm.yyyy' // 12.31.1990
                  var splitdate1='.';
                  hot.setDataAtCell(row, prop, daydate+splitdate1+monthdate+splitdate1+yeardate,'my_source_date')
                  //console.log('new date format : ' + daydate+splitdate1+monthdate+splitdate1+yeardate)
                  ////console.log('COULD END HERE')
                  //commentsPlugin.removeCommentAtCell(row, prop);

  } else {
    // european and other formats
    //'jj/mm/aaaa' // 'dd/mm/yyyy' // 31/12/1990
                  var splitdate1='/';
                  hot.setDataAtCell(row, prop, daydate+splitdate1+monthdate+splitdate1+yeardate,'my_source_date')
                  //console.log('new date format : ' + daydate+splitdate1+monthdate+splitdate1+yeardate)   
                   }
                } else {                
                  //commentsPlugin.setCommentAtCell(row, prop, "la date '" + oldvalue + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  ");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'date_try_to_fix','fr-FR'))

                  hot.setDataAtCell(row, prop,'','my_source_empty_date')
               }
// **********************************************************************************
// **********************************************************************************
// ************************ condition date 2.2.4  1995/12/31 finished *********************************
// **********************************************************************************
// **********************************************************************************
  } else if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(oldvalue.trim().replace(/\s*-\s*/g,"-")) ) {
  // 1995-12-31 5rd condition
  //console.log('condition date 2.2.5  1995-12-31 like en-CA')

                var splitdate05='-';
                if( (navigator_language=='en-US' && startsWithElement(usTimeZones,userTimeZone) && use_en_time==true) || use_english_date_by_user_himeself_in_modal_withoutfct==true ){
                  var [yeardate,daydate,monthdate] = oldvalue.split(splitdate05); // edit it modify it change it , when US date format occurs                  
                  var is_validate_date=isValidDate(oldvalue,'-',3,1,2)
                } else {
                  var [yeardate,monthdate,daydate] = oldvalue.split(splitdate05); // edit it modify it change it , when US date format occurs                  
                  var is_validate_date=isValidDate(oldvalue,'-',3,2,1)
                  ////console.log(is_validate_date)

                }
                if(is_validate_date){
                                  
                if(navigator_language=='en-US'){
                 // 'jj/mm/aaaa' // 'mm/dd/yyyy'; // 12/31/1990 edit it later , modify it later  , change it later
                  if( (startsWithElement(usTimeZones,userTimeZone) && use_en_time==true) || use_english_date_by_user_himeself_in_modal_withoutfct==true ){
                    var splitdate1='/';
                    hot.setDataAtCell(row, prop, monthdate+splitdate1+daydate+splitdate1+yeardate,'my_source_date')
                    //console.log('new date format : ' + monthdate+splitdate1+daydate+splitdate1+yeardate)
                  } else {
                    var splitdate1='/';
                    hot.setDataAtCell(row, prop, daydate+splitdate1+monthdate+splitdate1+yeardate,'my_source_date')
                    //console.log('new date format : ' + daydate+splitdate1+monthdate+splitdate1+yeardate)
                  }
                  
                } else if(navigator_language=='ko-KR' || navigator_language=='hu-HU'){
                  // 'aaaa.mm.jj'
                  var splitdate1='.';
                  hot.setDataAtCell(row, prop, yeardate+splitdate1+monthdate+splitdate1+daydate,'my_source_date')
                  //console.log('new date format : ' + yeardate+splitdate1+monthdate+splitdate1+daydate)

                } else if(navigator_language=='ja-JP' || navigator_language=='ZH-CN'){
                      // 1990/12/31
                  var splitdate1='/';
                  hot.setDataAtCell(row, prop, yeardate+splitdate1+monthdate+splitdate1+daydate,'my_source_date')
                  //console.log('new date format : ' + yeardate+splitdate1+monthdate+splitdate1+daydate)

                  

  } else if(navigator_language=='en-CA'){
                  // 'aaaa-mm-jj' //'yyyy-mm-dd' // 1990-12-31


                  var splitdate005 = '-';
    if(daydate.toString().length==1 && monthdate.toString().length==1){
                         daydate='0'+daydate;
                         monthdate='0'+monthdate;
            hot.setDataAtCell(row, prop, yeardate+splitdate005+monthdate+splitdate005+daydate,'my_source_date')

            } else if(daydate.toString().length==1 && monthdate.toString().length==2){
                         daydate='0'+daydate;
                         hot.setDataAtCell(row, prop, yeardate+splitdate005+monthdate+splitdate005+daydate,'my_source_date')
            } else if(daydate.toString().length==2 && monthdate.toString().length==1){
                         monthdate='0'+monthdate;  
                         hot.setDataAtCell(row, prop, yeardate+splitdate005+monthdate+splitdate005+daydate,'my_source_date')
            } else {
                         //console.log('COULD END HERE')
                         commentsPlugin.removeCommentAtCell(row, prop);
                     }
                  //var splitdate1='-';
                  //hot.setDataAtCell(row, prop, yeardate+splitdate1+monthdate+splitdate1+daydate)
                  ////console.log('new date format : ' + yeardate+splitdate1+monthdate+splitdate1+daydate)


  } else if(navigator_language=='de-DE' || navigator_language=='ru-RU' || navigator_language=='tr-TR'){
                  //'jj.mm.aaaa' //'dd.mm.yyyy' // 12.31.1990
                  var splitdate1='.';
                  hot.setDataAtCell(row, prop, daydate+splitdate1+monthdate+splitdate1+yeardate,'my_source_date')
                  //console.log('new date format : ' + daydate+splitdate1+monthdate+splitdate1+yeardate)
                  ////console.log('COULD END HERE')
                  //commentsPlugin.removeCommentAtCell(row, prop);

  } else {
    // european and other formats
    //'jj/mm/aaaa' // 'dd/mm/yyyy' // 31/12/1990
                  var splitdate1='/';
                  hot.setDataAtCell(row, prop, daydate+splitdate1+monthdate+splitdate1+yeardate,'my_source_date')
                  //console.log('new date format : ' + daydate+splitdate1+monthdate+splitdate1+yeardate)   
                   }
                } else {                
                  //commentsPlugin.setCommentAtCell(row, prop, "la date '" + oldvalue + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  ");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'date_try_to_fix','fr-FR'))
                  hot.setDataAtCell(row, prop,'','my_source_empty_date')
               }
// **********************************************************************************
// **********************************************************************************
// ************************ condition date 2.2.5  1995-12-31 finished *********************************
// **********************************************************************************
// **********************************************************************************
} else if (/^\d{4}\.\d{1,2}\.\d{1,2}$/.test(oldvalue.trim().replace(/\s*\.\s*/g,".")) ) {
  // 1995.12.31 6rd condition
  //console.log('condition date 2.2.6  1995.12.31 like ko-KR')

                var splitdate06='.';
                if( (navigator_language=='en-US' && startsWithElement(usTimeZones,userTimeZone) && use_en_time==true) || use_english_date_by_user_himeself_in_modal_withoutfct==true ){
                  var [yeardate,daydate,monthdate] = oldvalue.split(splitdate06); // edit it modify it change it , when US date format occurs                  
                  var is_validate_date=isValidDate(oldvalue,'.',3,1,2)
                } else {
                  var [yeardate,monthdate,daydate] = oldvalue.split(splitdate06); // edit it modify it change it , when US date format occurs                  
                  var is_validate_date=isValidDate(oldvalue,'.',3,2,1)
                  ////console.log(is_validate_date)

                }
                if(is_validate_date){
                                  
                if(navigator_language=='en-US'){
                 // 'jj/mm/aaaa' // 'mm/dd/yyyy'; // 12/31/1990 edit it later , modify it later  , change it later
                  if( (startsWithElement(usTimeZones,userTimeZone) && use_en_time==true) || use_english_date_by_user_himeself_in_modal_withoutfct==true ){
                    var splitdate1='/';
                    hot.setDataAtCell(row, prop, monthdate+splitdate1+daydate+splitdate1+yeardate,'my_source_date')
                    //console.log('new date format : ' + monthdate+splitdate1+daydate+splitdate1+yeardate)
                  } else {
                    var splitdate1='/';
                    hot.setDataAtCell(row, prop, daydate+splitdate1+monthdate+splitdate1+yeardate,'my_source_date')
                    //console.log('new date format : ' + daydate+splitdate1+monthdate+splitdate1+yeardate)
                  }
                  
                } else if(navigator_language=='ko-KR' || navigator_language=='hu-HU'){
                  // 'aaaa.mm.jj'
                  //var splitdate1='.';
                  //hot.setDataAtCell(row, prop, yeardate+splitdate1+monthdate+splitdate1+daydate)
                  ////console.log('new date format : ' + yeardate+splitdate1+monthdate+splitdate1+daydate)


                  var splitdate006 = '.';
    if(daydate.toString().length==1 && monthdate.toString().length==1){
                         daydate='0'+daydate;
                         monthdate='0'+monthdate;
            hot.setDataAtCell(row, prop, yeardate+splitdate006+monthdate+splitdate006+daydate,'my_source_date')

            } else if(daydate.toString().length==1 && monthdate.toString().length==2){
                         daydate='0'+daydate;
                         hot.setDataAtCell(row, prop, yeardate+splitdate006+monthdate+splitdate006+daydate,'my_source_date')
            } else if(daydate.toString().length==2 && monthdate.toString().length==1){
                         monthdate='0'+monthdate;  
                         hot.setDataAtCell(row, prop, yeardate+splitdate006+monthdate+splitdate006+daydate,'my_source_date')
            } else {
                         //console.log('COULD END HERE')
                         commentsPlugin.removeCommentAtCell(row, prop);
                     }
                } else if(navigator_language=='ja-JP' || navigator_language=='ZH-CN'){
                      // 1990/12/31
                  var splitdate1='/';
                  hot.setDataAtCell(row, prop, yeardate+splitdate1+monthdate+splitdate1+daydate,'my_source_date')
                  //console.log('new date format : ' + yeardate+splitdate1+monthdate+splitdate1+daydate)

                  

  } else if(navigator_language=='en-CA'){
                  // 'aaaa-mm-jj' //'yyyy-mm-dd' // 1990-12-31
                  var splitdate1='-';
                  hot.setDataAtCell(row, prop, yeardate+splitdate1+monthdate+splitdate1+daydate,'my_source_date')
                  //console.log('new date format : ' + yeardate+splitdate1+monthdate+splitdate1+daydate)
                  
                  ////console.log('COULD END HERE')
                  //commentsPlugin.removeCommentAtCell(row, prop);

  } else if(navigator_language=='de-DE' || navigator_language=='ru-RU' || navigator_language=='tr-TR'){
                  //'jj.mm.aaaa' //'dd.mm.yyyy' // 12.31.1990
                  var splitdate1='.';
                  hot.setDataAtCell(row, prop, daydate+splitdate1+monthdate+splitdate1+yeardate,'my_source_date')
                  //console.log('new date format : ' + daydate+splitdate1+monthdate+splitdate1+yeardate)
                  ////console.log('COULD END HERE')
                  //commentsPlugin.removeCommentAtCell(row, prop);

  } else {
    // european and other formats
    //'jj/mm/aaaa' // 'dd/mm/yyyy' // 31/12/1990
                  var splitdate1='/';
                  hot.setDataAtCell(row, prop, daydate+splitdate1+monthdate+splitdate1+yeardate,'my_source_date')
                  //console.log('new date format : ' + daydate+splitdate1+monthdate+splitdate1+yeardate)   
                   }
                } else {                
                  //commentsPlugin.setCommentAtCell(row, prop, "la date '" + oldvalue + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  ");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'date_try_to_fix','fr-FR'))

                  hot.setDataAtCell(row, prop,'','my_source_empty_date')
               }
// **********************************************************************************
// **********************************************************************************
// ************************ condition date 2.2.6  1995.12.31 finished *********************************
// **********************************************************************************
// **********************************************************************************
              } else if(/^\d{1,2}\/\d{1,2}\/\d{2}$/.test(oldvalue.trim().replace(/\s*\/\s*/g,"/")) ){
                //console.log('condition date 2.2.7  31/12/95 like fr-FR and european an (en-US but with switching month and days) ')                  
                var splitdate01='/';
                if(navigator_language=='en-CA' || navigator_language=='ko-KR' || navigator_language=='hu-HU' || navigator_language=='ja-JP' || navigator_language=='ZH-CN' ){
                  var [yeardate,monthdate,daydate] = oldvalue.split(splitdate01); // edit it modify it change it , when US date format occurs                  
                  if(Number(yeardate)>30){
                    yeardate='19'+yeardate;
                  } else {
                    yeardate='20'+yeardate
                  }
                  hot.setDataAtCell(row, prop,yeardate+splitdate01+monthdate+splitdate01+daydate,'my_source_date')
                } else {
                  //if(navigator_language=='en-US' || navigator_language=='de-DE' || navigator_language=='ru-RU' || navigator_language=='tr-TR' ){
                  var [daydate,monthdate,yeardate] = oldvalue.split(splitdate01); // edit it modify it change it , when US date format occurs                  

                  if(Number(yeardate)>30){
                    yeardate='19'+yeardate;
                  } else {
                    yeardate='20'+yeardate
                  }
                  hot.setDataAtCell(row, prop,daydate+splitdate01+monthdate+splitdate01+yeardate,'my_source_date')
                }
                
                
// **********************************************************************************
// **********************************************************************************
// ************************ condition date finished 2.2.7 *********************************
// **********************************************************************************
// **********************************************************************************
} else if(/^\d{1,2}\-\d{1,2}\-\d{2}$/.test(oldvalue.trim().replace(/\s*-\s*/g,"-")) ){
                //console.log('condition date 2.2.8  31-12-95  ')                  
                var splitdate01='-';
                if(navigator_language=='en-CA' || navigator_language=='ko-KR' || navigator_language=='hu-HU' || navigator_language=='ja-JP' || navigator_language=='ZH-CN' ){   // maybe edit later change it later modify it later
                  var [yeardate,monthdate,daydate] = oldvalue.split(splitdate01); // edit it modify it change it , when US date format occurs                  
                  if(Number(yeardate)>30){
                    yeardate='19'+yeardate;
                  } else {
                    yeardate='20'+yeardate
                  }
                  hot.setDataAtCell(row, prop,yeardate+splitdate01+monthdate+splitdate01+daydate,'my_source_date')
                } else {
                  //if(navigator_language=='en-US' || navigator_language=='de-DE' || navigator_language=='ru-RU' || navigator_language=='tr-TR' ){
                  var [daydate,monthdate,yeardate] = oldvalue.split(splitdate01); // edit it modify it change it , when US date format occurs                  

                  if(Number(yeardate)>30){
                    yeardate='19'+yeardate;
                  } else {
                    yeardate='20'+yeardate
                  }
                  hot.setDataAtCell(row, prop,daydate+splitdate01+monthdate+splitdate01+yeardate,'my_source_date')
                }
                
                
// **********************************************************************************
// **********************************************************************************
// ************************ condition date finished 2.2.8 *********************************
// **********************************************************************************
// **********************************************************************************
} else if(/^\d{1,2}\.\d{1,2}\.\d{2}$/.test(oldvalue.trim().replace(/\s*\.\s*/g,".")) ){
                //console.log('condition date 2.2.9  31.12.95  ')                  
                var splitdate01='.';
                if(navigator_language=='en-CA' || navigator_language=='ko-KR' || navigator_language=='hu-HU' || navigator_language=='ja-JP' || navigator_language=='ZH-CN' ){   // maybe edit later change it later modify it later
                  var [yeardate,monthdate,daydate] = oldvalue.split(splitdate01); // edit it modify it change it , when US date format occurs                  
                  if(Number(yeardate)>30){
                    yeardate='19'+yeardate;
                  } else {
                    yeardate='20'+yeardate;
                  }
                  hot.setDataAtCell(row, prop,yeardate+splitdate01+monthdate+splitdate01+daydate,'my_source_date')
                } else {
                  //if(navigator_language=='en-US' || navigator_language=='de-DE' || navigator_language=='ru-RU' || navigator_language=='tr-TR' ){
                  var [daydate,monthdate,yeardate] = oldvalue.split(splitdate01); // edit it modify it change it , when US date format occurs                  

                  if(Number(yeardate)>30){
                    yeardate='19'+yeardate;
                  } else {
                    yeardate='20'+yeardate
                  }
                  hot.setDataAtCell(row, prop,daydate+splitdate01+monthdate+splitdate01+yeardate,'my_source_date')
                }
// **********************************************************************************
// **********************************************************************************
// ************************ condition date finished 2.2.9 *********************************
// **********************************************************************************
// **********************************************************************************
                } else if (/^\d{1,2}\/\d{1,2}(\/)?$/.test(oldvalue.trim().replace(/\s*\/\s*/g,"/"))){
                  //console.log('condition date 2.2.10   like  31/12 12/06/  13/23 1/3 ')     
                  //console.log(oldvalue)             
                  var splitdate01='/';
                  var [datepart1,datepart2] =  oldvalue.split(splitdate01)
                  //console.log(datepart1)
                  //console.log(datepart2)
                  if(navigator_language=='en-CA' || navigator_language=='ko-KR' || navigator_language=='hu-HU' || navigator_language=='ja-JP' || navigator_language=='ZH-CN' ){   // maybe edit later change it later modify it later
                  //var [yeardate,monthdate,daydate] = oldvalue.split(splitdate01); // edit it modify it change it , when US date format occurs                  
                  var [datepart1,datepart2] =  oldvalue.split(splitdate01)

                  if(Number(datepart2)>12){
                    var [daydate,monthdate,yeardate]=["01",datepart1,datepart2]
                    //yeardate='19'+yeardate;
                  } else {
                    const currentDate = new Date();
                    const currentYear = currentDate.getFullYear();
                    var [daydate,monthdate,yeardate]=[datepart1,datepart2,currentYear.toString()]
                    //yeardate='20'+yeardate;
                  }
                  hot.setDataAtCell(row, prop,yeardate+splitdate01+monthdate+splitdate01+daydate,'my_source_date')
                } else {
                  //console.log('else navigator language')

                  //if(navigator_language=='en-US' || navigator_language=='de-DE' || navigator_language=='ru-RU' || navigator_language=='tr-TR' ){
                    var [datepart1,datepart2] =  oldvalue.split(splitdate01)

                if(Number(datepart2)>12){
                  var [daydate,monthdate,yeardate]=["01",datepart1,datepart2]
                } else {
                   const currentDate = new Date();
                   const currentYear = currentDate.getFullYear();
                   var [daydate,monthdate,yeardate]=[datepart1,datepart2,currentYear.toString()]
                 //yeardate='20'+yeardate;
                }
                //console.log('before setdata')
                //console.log(daydate+splitdate01+monthdate+splitdate01+yeardate)
                  hot.setDataAtCell(row, prop,daydate+splitdate01+monthdate+splitdate01+yeardate,'my_source_date')
                }
// **********************************************************************************
// **********************************************************************************
// ************************ condition date finished 2.2.10 *********************************
// **********************************************************************************
// **********************************************************************************
            } else if (/^\d{1,2}\-\d{1,2}(\-)?$/.test(oldvalue.trim().replace(/\s*-\s*/g,"-"))){
              //console.log('condition date 2.2.11   like  31-12 12-06  13-23 1-3 ')     
                  //console.log(oldvalue)             
                  var splitdate01='-';
                  var [datepart1,datepart2] =  oldvalue.split(splitdate01)
                  //console.log(datepart1)
                  //console.log(datepart2)
                  if(navigator_language=='en-CA' || navigator_language=='ko-KR' || navigator_language=='hu-HU' || navigator_language=='ja-JP' || navigator_language=='ZH-CN' ){   // maybe edit later change it later modify it later
                  //var [yeardate,monthdate,daydate] = oldvalue.split(splitdate01); // edit it modify it change it , when US date format occurs                  
                  var [datepart1,datepart2] =  oldvalue.split(splitdate01)

                  if(Number(datepart2)>12){
                    var [daydate,monthdate,yeardate]=["01",datepart1,datepart2]
                    //yeardate='19'+yeardate;
                  } else {
                    const currentDate = new Date();
                    const currentYear = currentDate.getFullYear();
                    var [daydate,monthdate,yeardate]=[datepart1,datepart2,currentYear.toString()]
                    //yeardate='20'+yeardate;
                  }
                  hot.setDataAtCell(row, prop,yeardate+splitdate01+monthdate+splitdate01+daydate,'my_source_date')
                } else {
                  //console.log('else navigator language')

                  //if(navigator_language=='en-US' || navigator_language=='de-DE' || navigator_language=='ru-RU' || navigator_language=='tr-TR' ){
                    var [datepart1,datepart2] =  oldvalue.split(splitdate01)

                if(Number(datepart2)>12){
                  var [daydate,monthdate,yeardate]=["01",datepart1,datepart2]
                } else {
                   const currentDate = new Date();
                   const currentYear = currentDate.getFullYear();
                   var [daydate,monthdate,yeardate]=[datepart1,datepart2,currentYear.toString()]
                 //yeardate='20'+yeardate;
                }
                //console.log('before setdata')
                //console.log(daydate+splitdate01+monthdate+splitdate01+yeardate)
                  hot.setDataAtCell(row, prop,daydate+splitdate01+monthdate+splitdate01+yeardate,'my_source_date')
                }


// **********************************************************************************
// **********************************************************************************
// ************************ condition date finished 2.2.11 *********************************
// **********************************************************************************
// **********************************************************************************
                } else if (/^\d{1,2}\.\d{1,2}(\.)?$/.test(oldvalue.trim().replace(/\s*\.\s*/g,"."))){
                  //console.log('condition date 2.2.12   like  31.12. 12.06.  13.23 1.3 ')     
                  //console.log(oldvalue)             
                  var splitdate01='.';
                  var [datepart1,datepart2] =  oldvalue.split(splitdate01)
                  //console.log(datepart1)
                  //console.log(datepart2)
                  if(navigator_language=='en-CA' || navigator_language=='ko-KR' || navigator_language=='hu-HU' || navigator_language=='ja-JP' || navigator_language=='ZH-CN' ){   // maybe edit later change it later modify it later
                  //var [yeardate,monthdate,daydate] = oldvalue.split(splitdate01); // edit it modify it change it , when US date format occurs                  
                  var [datepart1,datepart2] =  oldvalue.split(splitdate01)

                  if(Number(datepart2)>12){
                    var [daydate,monthdate,yeardate]=["01",datepart1,datepart2]
                    //yeardate='19'+yeardate;
                  } else {
                    const currentDate = new Date();
                    const currentYear = currentDate.getFullYear();
                    var [daydate,monthdate,yeardate]=[datepart1,datepart2,currentYear.toString()]
                    //yeardate='20'+yeardate;
                  }
                  hot.setDataAtCell(row, prop,yeardate+splitdate01+monthdate+splitdate01+daydate,'my_source_date')
                } else {
                  //console.log('else navigator language')

                  //if(navigator_language=='en-US' || navigator_language=='de-DE' || navigator_language=='ru-RU' || navigator_language=='tr-TR' ){
                    var [datepart1,datepart2] =  oldvalue.split(splitdate01)

                if(Number(datepart2)>12){
                  var [daydate,monthdate,yeardate]=["01",datepart1,datepart2]
                } else {
                   const currentDate = new Date();
                   const currentYear = currentDate.getFullYear();
                   var [daydate,monthdate,yeardate]=[datepart1,datepart2,currentYear.toString()]
                 //yeardate='20'+yeardate;
                }
                //console.log('before setdata')
                //console.log(daydate+splitdate01+monthdate+splitdate01+yeardate)
                  hot.setDataAtCell(row, prop,daydate+splitdate01+monthdate+splitdate01+yeardate,'my_source_date')
                }
// **********************************************************************************
// **********************************************************************************
// ************************ condition date finished 2.2.12 *********************************
// **********************************************************************************
// **********************************************************************************
                } else if (/^\d{4}\/\d{1,2}(\/)?$/.test(oldvalue.trim().replace(/\s*\/\s*/g,"/"))){
                  //console.log('condition date 2.2.13   like  2031/12. 2012/06/  2013/2 ')     
                  //console.log(oldvalue)             
                  var splitdate01='/';
                  var [datepart1,datepart2] =  oldvalue.split(splitdate01)
                  //console.log(datepart1)
                  //console.log(datepart2)
                  if(navigator_language=='en-CA' || navigator_language=='ko-KR' || navigator_language=='hu-HU' || navigator_language=='ja-JP' || navigator_language=='ZH-CN' ){   // maybe edit later change it later modify it later
                    var [datepart1,datepart2] =  oldvalue.split(splitdate01)
                    if(Number(datepart2)>12){
                        //var [daydate,monthdate,yeardate]=["01",datepart1,datepart2]
                        //commentsPlugin.setCommentAtCell(row, prop, "la date '" + oldvalue + "' n'est pas valide ");
                        commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'date_no_valid','fr-FR'))

                        hot.setDataAtCell(row, prop,'','my_source_empty_date')
                      } else {
                          if(datepart2.toString().length==1){
                              var [yeardate,monthdate,daydate]=[datepart1,"0"+datepart2,"01"]
                              } else {
                                    var [yeardate,monthdate,daydate]=[datepart1,datepart2,"01"]
                                   }
                                   hot.setDataAtCell(row, prop,daydate+splitdate01+monthdate+splitdate01+yeardate,'my_source_date')
                                    //yeardate='20'+yeardate;
                        }
                    } else {
                  //console.log('else navigator language')

                  //if(navigator_language=='en-US' || navigator_language=='de-DE' || navigator_language=='ru-RU' || navigator_language=='tr-TR' ){
                var [datepart1,datepart2] =  oldvalue.split(splitdate01)

                if(Number(datepart2)>12){
                  //var [daydate,monthdate,yeardate]=["01",datepart1,datepart2]
                  //commentsPlugin.setCommentAtCell(row, prop, "la date '" + oldvalue + "' n'est pas valide ");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'date_no_valid','fr-FR'))

                  hot.setDataAtCell(row, prop,'','my_source_empty_date')
                } else {
                  if(datepart2.toString().length==1){
                    var [yeardate,monthdate,daydate]=[datepart1,"0"+datepart2,"01"]
                  } else {
                    var [yeardate,monthdate,daydate]=[datepart1,datepart2,"01"]
                  }
                  hot.setDataAtCell(row, prop,daydate+splitdate01+monthdate+splitdate01+yeardate,'my_source_date')

                 //yeardate='20'+yeardate;
                }
                ////console.log('before setdata')
                ////console.log(daydate+splitdate01+monthdate+splitdate01+yeardate)
                }
                
                  // **********************************************************************************
// **********************************************************************************
// ************************ condition date finished 2.2.13 *********************************
// **********************************************************************************
// **********************************************************************************
} else if (/^\d{4}\-\d{1,2}(\-)?$/.test(oldvalue.trim().replace(/\s*-\s*/g,"-"))){
                  //console.log('condition date 2.2.14   like  2031-12. 2012-06-  2013-2 ')     
                  //console.log(oldvalue)             
                  var splitdate01='-';
                  var [datepart1,datepart2] =  oldvalue.split(splitdate01)
                  //console.log(datepart1)
                  //console.log(datepart2)
                  if(navigator_language=='en-CA' || navigator_language=='ko-KR' || navigator_language=='hu-HU' || navigator_language=='ja-JP' || navigator_language=='ZH-CN' ){   // maybe edit later change it later modify it later
                    var [datepart1,datepart2] =  oldvalue.split(splitdate01)
                    if(Number(datepart2)>12){
                        //var [daydate,monthdate,yeardate]=["01",datepart1,datepart2]
                        //commentsPlugin.setCommentAtCell(row, prop, "la date '" + oldvalue + "' n'est pas valide ");
                        commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'date_no_valid','fr-FR'))

                        hot.setDataAtCell(row, prop,'','my_source_empty_date')
                      } else {
                          if(datepart2.toString().length==1){
                              var [yeardate,monthdate,daydate]=[datepart1,"0"+datepart2,"01"]
                              } else {
                                    var [yeardate,monthdate,daydate]=[datepart1,datepart2,"01"]
                                   }
                                   hot.setDataAtCell(row, prop,daydate+splitdate01+monthdate+splitdate01+yeardate,'my_source_date')
                                    //yeardate='20'+yeardate;
                        }
                    } else {
                  //console.log('else navigator language')

                  //if(navigator_language=='en-US' || navigator_language=='de-DE' || navigator_language=='ru-RU' || navigator_language=='tr-TR' ){
                var [datepart1,datepart2] =  oldvalue.split(splitdate01)

                if(Number(datepart2)>12){
                  //var [daydate,monthdate,yeardate]=["01",datepart1,datepart2]
                 // commentsPlugin.setCommentAtCell(row, prop, "la date '" + oldvalue + "' n'est pas valide ");
                 commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'date_no_valid','fr-FR'))

                  hot.setDataAtCell(row, prop,'','my_source_empty_date')
                } else {
                  if(datepart2.toString().length==1){
                    var [yeardate,monthdate,daydate]=[datepart1,"0"+datepart2,"01"]
                  } else {
                    var [yeardate,monthdate,daydate]=[datepart1,datepart2,"01"]
                  }
                  hot.setDataAtCell(row, prop,daydate+splitdate01+monthdate+splitdate01+yeardate,'my_source_date')

                 //yeardate='20'+yeardate;
                }
                ////console.log('before setdata')
                ////console.log(daydate+splitdate01+monthdate+splitdate01+yeardate)
                }
                
                  // **********************************************************************************
// **********************************************************************************
// ************************ condition date finished 2.2.14 *********************************
// **********************************************************************************
// **********************************************************************************
} else if (/^\d{4}\.\d{1,2}(\.)?$/.test(oldvalue.trim().replace(/\s*\.\s*/g,"."))){
                  //console.log('condition date 2.2.15   like  2031.12. 2012.06.  2013.2 ')     
                  //console.log(oldvalue)             
                  var splitdate01='.';
                  var [datepart1,datepart2] =  oldvalue.split(splitdate01)
                  //console.log(datepart1)
                  //console.log(datepart2)
                  if(navigator_language=='en-CA' || navigator_language=='ko-KR' || navigator_language=='hu-HU' || navigator_language=='ja-JP' || navigator_language=='ZH-CN' ){   // maybe edit later change it later modify it later
                    var [datepart1,datepart2] =  oldvalue.split(splitdate01)
                    if(Number(datepart2)>12){
                        //var [daydate,monthdate,yeardate]=["01",datepart1,datepart2]
                        //commentsPlugin.setCommentAtCell(row, prop, "la date '" + oldvalue + "' n'est pas valide ");
                        commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'date_no_valid','fr-FR'))

                        hot.setDataAtCell(row, prop,'','my_source_empty_date')
                      } else {
                          if(datepart2.toString().length==1){
                              var [yeardate,monthdate,daydate]=[datepart1,"0"+datepart2,"01"]
                              } else {
                                    var [yeardate,monthdate,daydate]=[datepart1,datepart2,"01"]
                                   }
                                   hot.setDataAtCell(row, prop,daydate+splitdate01+monthdate+splitdate01+yeardate,'my_source_date')
                                    //yeardate='20'+yeardate;
                        }
                    } else {
                  //console.log('else navigator language')

                  //if(navigator_language=='en-US' || navigator_language=='de-DE' || navigator_language=='ru-RU' || navigator_language=='tr-TR' ){
                var [datepart1,datepart2] =  oldvalue.split(splitdate01)

                if(Number(datepart2)>12){
                  //var [daydate,monthdate,yeardate]=["01",datepart1,datepart2]
                  //commentsPlugin.setCommentAtCell(row, prop, "la date '" + oldvalue + "' n'est pas valide ");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'date_no_valid','fr-FR'))

                  hot.setDataAtCell(row, prop,'','my_source_empty_date')
                } else {
                  if(datepart2.toString().length==1){
                    var [yeardate,monthdate,daydate]=[datepart1,"0"+datepart2,"01"]
                  } else {
                    var [yeardate,monthdate,daydate]=[datepart1,datepart2,"01"]
                  }
                  hot.setDataAtCell(row, prop,daydate+splitdate01+monthdate+splitdate01+yeardate,'my_source_date')

                 //yeardate='20'+yeardate;
                }
                ////console.log('before setdata')
                ////console.log(daydate+splitdate01+monthdate+splitdate01+yeardate)
                }
// **********************************************************************************
// **********************************************************************************
// ************************ condition date finished 2.2.15 *********************************
// **********************************************************************************
// **********************************************************************************

                } else if (/^\d{1,2}\/\d{4}(\/)?$/.test(oldvalue.trim().replace(/\s*\/\s*/g,"/"))){
                  //console.log('condition date 2.2.16   like  12/2023 06/2012/  2/2013/ ')     
                  //console.log(oldvalue)             
                  var splitdate01='/';
                  var [datepart2,datepart1] =  oldvalue.split(splitdate01)
                  //console.log(datepart1)
                  //console.log(datepart2)
                  if(navigator_language=='en-CA' || navigator_language=='ko-KR' || navigator_language=='hu-HU' || navigator_language=='ja-JP' || navigator_language=='ZH-CN' ){   // maybe edit later change it later modify it later
                    var [datepart2,datepart1] =  oldvalue.split(splitdate01)
                    if(Number(datepart2)>12){
                        //var [daydate,monthdate,yeardate]=["01",datepart1,datepart2]
                        //commentsPlugin.setCommentAtCell(row, prop, "la date '" + oldvalue + "' n'est pas valide ");
                        commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'date_no_valid','fr-FR'))

                        hot.setDataAtCell(row, prop,'','my_source_empty_date')
                      } else {
                          if(datepart2.toString().length==1){
                              var [yeardate,monthdate,daydate]=[datepart1,"0"+datepart2,"01"]
                              } else {
                                    var [yeardate,monthdate,daydate]=[datepart1,datepart2,"01"]
                                   }
                                   hot.setDataAtCell(row, prop,daydate+splitdate01+monthdate+splitdate01+yeardate,'my_source_date')
                                    //yeardate='20'+yeardate;
                        }
                    } else {
                  //console.log('else navigator language')

                  //if(navigator_language=='en-US' || navigator_language=='de-DE' || navigator_language=='ru-RU' || navigator_language=='tr-TR' ){
                var [datepart2,datepart1] =  oldvalue.split(splitdate01)

                if(Number(datepart2)>12){
                  //var [daydate,monthdate,yeardate]=["01",datepart1,datepart2]
                  //commentsPlugin.setCommentAtCell(row, prop, "la date '" + oldvalue + "' n'est pas valide ");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'date_no_valid','fr-FR'))

                  hot.setDataAtCell(row, prop,'','my_source_empty_date')
                } else {
                  if(datepart2.toString().length==1){
                    var [yeardate,monthdate,daydate]=[datepart1,"0"+datepart2,"01"]
                  } else {
                    var [yeardate,monthdate,daydate]=[datepart1,datepart2,"01"]
                  }
                  hot.setDataAtCell(row, prop,daydate+splitdate01+monthdate+splitdate01+yeardate,'my_source_date')

                 //yeardate='20'+yeardate;
                }
                ////console.log('before setdata')
                ////console.log(daydate+splitdate01+monthdate+splitdate01+yeardate)
                }
                  // **********************************************************************************
// **********************************************************************************
// ************************ condition date finished 2.2.16 *********************************
// **********************************************************************************
// **********************************************************************************

                } else if (/^\d{1,2}\-\d{4}(\-)?$/.test(oldvalue.trim().replace(/\s*-\s*/g,"-"))){
                  //console.log('condition date 2.2.17   like  12-2023 06-2012-  2-2013- ')     
                  //console.log(oldvalue)             
                  var splitdate01='-';
                  var [datepart2,datepart1] =  oldvalue.split(splitdate01)
                  //console.log(datepart1)
                  //console.log(datepart2)
                  if(navigator_language=='en-CA' || navigator_language=='ko-KR' || navigator_language=='hu-HU' || navigator_language=='ja-JP' || navigator_language=='ZH-CN' ){   // maybe edit later change it later modify it later
                    var [datepart2,datepart1] =  oldvalue.split(splitdate01)
                    if(Number(datepart2)>12){
                        //var [daydate,monthdate,yeardate]=["01",datepart1,datepart2]
                        //commentsPlugin.setCommentAtCell(row, prop, "la date '" + oldvalue + "' n'est pas valide ");
                        commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'date_no_valid','fr-FR'))

                        hot.setDataAtCell(row, prop,'','my_source_empty_date')
                      } else {
                          if(datepart2.toString().length==1){
                              var [yeardate,monthdate,daydate]=[datepart1,"0"+datepart2,"01"]
                              } else {
                                    var [yeardate,monthdate,daydate]=[datepart1,datepart2,"01"]
                                   }
                                   hot.setDataAtCell(row, prop,daydate+splitdate01+monthdate+splitdate01+yeardate,'my_source_date')
                                    //yeardate='20'+yeardate;
                        }
                    } else {
                  //console.log('else navigator language')

                  //if(navigator_language=='en-US' || navigator_language=='de-DE' || navigator_language=='ru-RU' || navigator_language=='tr-TR' ){
                var [datepart2,datepart1] =  oldvalue.split(splitdate01)

                if(Number(datepart2)>12){
                  //var [daydate,monthdate,yeardate]=["01",datepart1,datepart2]
                  //commentsPlugin.setCommentAtCell(row, prop, "la date '" + oldvalue + "' n'est pas valide ");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'date_no_valid','fr-FR'))

                  hot.setDataAtCell(row, prop,'','my_source_empty_date')
                } else {
                  if(datepart2.toString().length==1){
                    var [yeardate,monthdate,daydate]=[datepart1,"0"+datepart2,"01"]
                  } else {
                    var [yeardate,monthdate,daydate]=[datepart1,datepart2,"01"]
                  }
                  hot.setDataAtCell(row, prop,daydate+splitdate01+monthdate+splitdate01+yeardate,'my_source_date')

                 //yeardate='20'+yeardate;
                }
                ////console.log('before setdata')
                ////console.log(daydate+splitdate01+monthdate+splitdate01+yeardate)
                } 
                  // **********************************************************************************
// **********************************************************************************
// ************************ condition date finished 2.2.17 *********************************
// **********************************************************************************
// **********************************************************************************

                } else if (/^\d{1,2}\.\d{4}(\.)?$/.test(oldvalue.trim().replace(/\s*\.\s*/g,"."))){
                  //console.log('condition date 2.2.18   like  12.2023 06.2012.  2.2013. ')     
                  //console.log(oldvalue)             
                  var splitdate01='.';
                  var [datepart2,datepart1] =  oldvalue.split(splitdate01)
                  //console.log(datepart1)
                  //console.log(datepart2)
                  if(navigator_language=='en-CA' || navigator_language=='ko-KR' || navigator_language=='hu-HU' || navigator_language=='ja-JP' || navigator_language=='ZH-CN' ){   // maybe edit later change it later modify it later
                    var [datepart2,datepart1] =  oldvalue.split(splitdate01)
                    if(Number(datepart2)>12){
                        //var [daydate,monthdate,yeardate]=["01",datepart1,datepart2]
                        //commentsPlugin.setCommentAtCell(row, prop, "la date '" + oldvalue + "' n'est pas valide ");
                        commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'date_no_valid','fr-FR'))
                        hot.setDataAtCell(row, prop,'','my_source_empty_date')
                      } else {
                          if(datepart2.toString().length==1){
                              var [yeardate,monthdate,daydate]=[datepart1,"0"+datepart2,"01"]
                              } else {
                                    var [yeardate,monthdate,daydate]=[datepart1,datepart2,"01"]
                                   }
                                   hot.setDataAtCell(row, prop,daydate+splitdate01+monthdate+splitdate01+yeardate,'my_source_date')
                                    //yeardate='20'+yeardate;
                        }
                    } else {
                  //console.log('else navigator language')

                  //if(navigator_language=='en-US' || navigator_language=='de-DE' || navigator_language=='ru-RU' || navigator_language=='tr-TR' ){
                var [datepart2,datepart1] =  oldvalue.split(splitdate01)

                if(Number(datepart2)>12){
                  //var [daydate,monthdate,yeardate]=["01",datepart1,datepart2]
                  //commentsPlugin.setCommentAtCell(row, prop, "la date '" + oldvalue + "' n'est pas valide ");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'date_no_valid','fr-FR'))
                  hot.setDataAtCell(row, prop,'','my_source_empty_date')
                } else {
                  if(datepart2.toString().length==1){
                    var [yeardate,monthdate,daydate]=[datepart1,"0"+datepart2,"01"]
                  } else {
                    var [yeardate,monthdate,daydate]=[datepart1,datepart2,"01"]
                  }
                  hot.setDataAtCell(row, prop,daydate+splitdate01+monthdate+splitdate01+yeardate,'my_source_date')

                 //yeardate='20'+yeardate;
                }
                ////console.log('before setdata')
                ////console.log(daydate+splitdate01+monthdate+splitdate01+yeardate)
                } 


                    // **********************************************************************************
// **********************************************************************************
// ************************ condition date finished 2.2.18 *********************************
// **********************************************************************************
// **********************************************************************************

                } else if (/^\d{4}\/?$/.test(oldvalue.trim().replace(/\s*\/\s*/g,"/"))){
                  //console.log('condition date 2.2.19   like  2023 2022/ ')     
                  //console.log(oldvalue)             
                  var splitdate01='/';
                  var [yearpart0,yearpart00] =  oldvalue.split(splitdate01)
                  hot.setDataAtCell(row, prop,"01"+splitdate01+"01"+splitdate01+yearpart0,'my_source_date')
                  
                    // **********************************************************************************
// **********************************************************************************
// ************************ condition date finished 2.2.19 *********************************
// **********************************************************************************
// **********************************************************************************
                } else if (/^\d{4}[-]?\s*$/.test(oldvalue.trim().replace(/\s*-\s*/g,"-")) ){
                  //console.log('condition date 2.2.20   like  2023 2022- ')     
                  //console.log(oldvalue)             
                  var splitdate01='-';
                  var [yearpart0,yearpart00] =  oldvalue.split(splitdate01)
                  hot.setDataAtCell(row, prop,"01"+splitdate01+"01"+splitdate01+yearpart0,'my_source_date')
                  
                    // **********************************************************************************
// **********************************************************************************
// ************************ condition date finished 2.2.20 *********************************
// **********************************************************************************
// **********************************************************************************
        
              } else if (/^\d{4}[.]?\s*$/.test(oldvalue.trim().replace(/\s*\.\s*/g,"."))){
                  //console.log('condition date 2.2.21   like  2023 2022. ')     
                  //console.log(oldvalue)             
                  var splitdate01='.';
                  var [yearpart0,yearpart00] =  oldvalue.split(splitdate01)
                  hot.setDataAtCell(row, prop,"01"+splitdate01+"01"+splitdate01+yearpart0,'my_source_date')
                  
                    // **********************************************************************************
// **********************************************************************************
// ************************ condition date finished 2.2.21 *********************************
// **********************************************************************************
// **********************************************************************************
                }
         
              }            

        }  else if ( oldvalue =='') {
          //console.log('condition date 3')
          //console.log('do nothing could end here')
          } else {
            //console.log('condition date 4')
          //commentsPlugin.setCommentAtCell(row, prop, "la date '" + oldvalue + "' n'est pas valide ");
          commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'date_no_valid','fr-FR'))
          hot.setDataAtCell(row, prop,'','my_source_empty_date')
          ////console.log('do nothing could end here')
          //console.log('removes')
        }
      
  }


