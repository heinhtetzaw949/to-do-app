import initialRender from "./initialRender.js";
import listeners from "./listener.js";
import observer from "./observer.js";


class Todo {
    init(){
        console.log("this is todo");
        observer();
        initialRender();
        listeners();
    }
}


export default Todo;