import { doneTaskTotal, updatedoneTaskTotal } from "./list.js";
import { listGroup } from "./selector.js";

let observer = ()=>{
    console.log("i'm observer");


    let job = ()=>{
       doneTaskTotal();
        updatedoneTaskTotal();
    }

    const observerOptions = {
        childList: true,
        subtree: true,
        attributes :true
      };
    let listGroupObserver = new MutationObserver(job);
    listGroupObserver.observe(listGroup,observerOptions)

}


export default observer;