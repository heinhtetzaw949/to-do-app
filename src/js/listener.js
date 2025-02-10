import { addTaskBtnHandler, deleteAllHandler, doneAllListHandler, listHandler, taskInputHandler } from "./handler.js";
import { addTaskBtn, deleteAllList, doneAllList, listGroup, taskInput } from "./selector.js";

const listeners = ()=>{
    listGroup.addEventListener("click",listHandler);
    addTaskBtn.addEventListener("click",addTaskBtnHandler);
    deleteAllList.addEventListener("click",deleteAllHandler);
    doneAllList.addEventListener("click",doneAllListHandler);
    taskInput.addEventListener("keyup",taskInputHandler);
}

export default listeners;
