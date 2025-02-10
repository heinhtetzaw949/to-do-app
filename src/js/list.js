import Swal from "sweetalert2";
import { v4 as uuidv4 } from 'uuid';


    export let createNewList = (currentTask)=>{
        let list = document.createElement("div");
        list.id = uuidv4();
        list.classList.add("listTask");
        list.innerHTML = ` <div class="border-2 border-slate-950 p-1 flex justify-between items-center mt-2 animate__animated animate__zoomIn">
                    <div class="ms-2 ">
                        <input type="checkbox" name="" class="accent-stone-900 change-check-box" >
                        <label for="" id="addInput">${currentTask}</label>
                    </div>
                        <div class="">
                            <button class="border-2 border-slate-950 px-2 py-1 cursor-pointer editBtn focus:bg-gray-600">
                                <i class="fa-solid fa-pencil pointer-events-none"></i>
                            </button>
                            <button class="border-2 border-slate-950 px-2 py-1 cursor-pointer delBtn active:bg-gray-600" >
                                <i class="fa-solid fa-trash-can pointer-events-none"></i>
                            </button>
                        </div>
                </div>`;

                //   let checkBox = list.querySelector(".change-check-box");
                //   let delBtn = list.querySelector(".delBtn");
                //   let editBtn = list.querySelector(".editBtn");
                //   let addInput = list.querySelector("#addInput");
                

            
                //   let updatedoneTaskTotal = ()=>{
                //     if(document.querySelectorAll(".listTask input:checked")){
                //      updateTask.innerText = document.querySelectorAll(".listTask input:checked").length 
                //     }
                //  }

                //     let delBtnCalc = ()=>{
                //         if(window.confirm("are u sure to delete?")){
                //             list.className = ("animate__animated animate__zoomOut") ;
                //             list.addEventListener("animationend",()=>{
                //                 list.remove();
                //                 doneTask.innerText = document.querySelectorAll(".listTask").length  ;
                //                 updatedoneTaskTotal();
                //             })
                        
                //         } 
                //     }

                //     let editBtnCalc = ()=>{
                //         let input = document.createElement("input");
                //         addInput.after(input);
                //         input.className = "border-2 border-slate-950 w-[200px] ps-2 focus-visible:outline-none ";
                //         input.focus();
                //         input.value = addInput.innerText;
                //         addInput.classList.add("hidden");


                //         let addInputTask = ()=>{
    
                //             input.classList.add("hidden");
                //             addInput.classList.remove("hidden");
                //             addInput.innerText = input.value;
                //         }

                //         input.addEventListener("blur",()=>{
                //               addInputTask();
                //         })

                //         input.addEventListener("keyup",(event)=>{
                //             if(event.key === "Enter"){
                //                addInputTask();
                //             }
                //           })
                //     }

                

                //  checkBox.addEventListener("change",updatedoneTaskTotal);
                //  delBtn.addEventListener("click",delBtnCalc)
                //  editBtn.addEventListener("click",editBtnCalc)

                
                return list; 
        }


    export let delList = (listId)=>{
        console.log("this is - ", listId);
        let currentList = document.querySelector(`[id="${listId}"]`);
     
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
                currentList.className = ("animate__animated animate__zoomOut") ;
                currentList.addEventListener("animationend",()=>{
                currentList.remove();
                // doneTaskTotal();
                // updatedoneTaskTotal();
        })
            }
          });

    }

    export let editList =(listId)=>{
        let currentList = document.querySelector(`[id="${listId}"]`);
        let addInput = currentList.querySelector("#addInput");
        let editBtn = currentList.querySelector(".editBtn");
        let changeCheckBox = currentList.querySelector(".change-check-box");
        let delBtn = currentList.querySelector(".delBtn");
    
        let input = document.createElement("input");
        addInput.after(input);
        input.className = "border-2 border-slate-950 w-[200px] ps-2 focus-visible:outline-none ";
        input.focus();
        input.value = addInput.innerText;
        addInput.classList.add("hidden");


        let addInputTask = ()=>{

            input.classList.add("hidden");
            addInput.classList.remove("hidden");
            addInput.innerText = input.value;
        }

        input.addEventListener("blur",()=>{
              addInputTask();
        })

        input.addEventListener("keyup",(event)=>{
            if(event.key === "Enter"){
               addInputTask();
            }
          })
    }

    export let checkBoxList = (listId)=>{
        let currentList = document.querySelector(`[id="${listId}"]`);
        let addInput = currentList.querySelector("#addInput");
        let editBtn = currentList.querySelector(".editBtn");
        let changeCheckBox = currentList.querySelector(".change-check-box");
        let delBtn = currentList.querySelector(".delBtn");

        changeCheckBox.classList.toggle("checked");
        changeCheckBox.checked = changeCheckBox.classList.contains("checked");

        addInput.classList.toggle("line-through");
        currentList.classList.toggle("scale-90");
        currentList.classList.toggle("opacity-20");
        currentList.classList.add("duration-200");
        // updatedoneTaskTotal();
        if(changeCheckBox.checked){
            editBtn.setAttribute("disabled",true);
            editBtn.classList.add("opacity-20","pointer-events-none");
        }else{
            editBtn.removeAttribute("disabled");
            editBtn.classList.remove("opacity-20","pointer-events-none");
        }
    }

    export let addList = (text)=>{
            listGroup.append(createNewList(text));
            taskInput.value = null;
            // doneTaskTotal();
    }

    export let doneTaskTotal = ()=>{
        doneTask.innerText = document.querySelectorAll(".listTask").length
    }

    export let updatedoneTaskTotal = ()=>{
                if(document.querySelectorAll(".listTask input:checked")){
                 updateTask.innerText = document.querySelectorAll(".listTask input:checked").length 
                }
             }


    export let tasks = ["apple","mango","banana"];
