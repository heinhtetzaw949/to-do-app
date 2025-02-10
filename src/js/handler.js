import Swal from "sweetalert2";
import { addList, checkBoxList, delList, editList } from "./list.js";

   
    export let listHandler = (event)=> {
        
        let list = event.target.closest(".listTask");
       let editBtn = list.querySelector(".editBtn");
       let changeCheckBox = list.querySelector(".change-check-box");
       let delBtn = list.querySelector(".delBtn");

        if(event.target.classList.contains("delBtn")){
                  delList(list.id);
                  console.log(list.id);
            }

            
            if(event.target.classList.contains("editBtn")){
                editList(list.id);
                console.log(list.id);

                
            }
            if(event.target.classList.contains("change-check-box")){
                    checkBoxList(list.id);
                    console.log(list.id);
                

            }

}
   
export let addTaskBtnHandler = ()=>{
    if(taskInput.value.trim() === ""){
        Swal.fire("Text First!");
    }else{
        addList(taskInput.value);
    }
}
 
export  let deleteAllHandler = ()=>{
  
   Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your list has been deleted.",
                icon: "success"
              });
        
            let allList = document.querySelectorAll(".listTask");
            allList.forEach((list)=>{
                        list.remove();
                        doneTask.innerText = 0;
                        updateTask.innerText = 0;
            })
        }
        
      });
}
 
export  let taskInputHandler = (event)=>{
    if(event.key === "Enter"){
        addTaskBtnHandler();
    }
}


 export  let doneAllListHandler = ()=>{
    let allList = document.querySelectorAll(".listTask");
    console.log(allList);
    allList.forEach((a)=>{
        checkBoxList(a.id);
    })
   
}