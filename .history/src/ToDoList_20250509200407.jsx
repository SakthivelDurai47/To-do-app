import React, {useState} from "react";

function ToDoList(){

    const [tasks, setTasks]=useState(["Eat Food", "Kove her"]);
    const [newTask, setNewTask]= useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim()!==""){
            setTasks(t=>[...t, newTask])
            setNewTask("")
        }
    }
    function deleteTask(index){
        const updatedTask = tasks.filter((_, i)=> i!== index);
        setTasks(updatedTask);
    }
    function moveUp(index){

    }
    function moveDown(index){
        
    }
    return (

        <div className="to-do-list">
            <h1>To Do List</h1>
            <div>
                <input type="text" placeholder="Enter a Task..." value={newTask}
                onChange={handleInputChange} />
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index)=>
                <li key={index}><span className="text">{task}</span>
                <button className="delete-button" onClick={()=>(deleteTask(index))}>Delete</button>
                <button className="move-button" onClick={()=>(moveUp(index))}>Up</button>
                <button className="move-button" onClick={()=>(moveDown(index))}>Down</button></li>
                )}
            </ol>
        </div>
    )
}

export default ToDoList