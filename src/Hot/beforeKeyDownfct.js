import { getInputValue_condition_split2 } from "./Values";

export function beforeKeyDownfct(event,hot) {
    console.log('event : ')
    console.log(event)
    console.log(hot)
    var selected = hot.getSelected();
    console.log(selected)
    console.log('---- get condition_split2----')
    console.log(getInputValue_condition_split2())
    console.log('**** end get condition_split2 end')

}

