import { addList, tasks } from "./list.js";

let initialRender = ()=>{
    console.log("this is initialRender");
    tasks.forEach((task)=>{
        console.log(task);
        addList(task);
    })
}


export default initialRender;