import React, {useState} from "react";
import axios from "axios"


function Create() {
     const [task, setTask] = useState("")
    const handleAdd = () =>{
        axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/add`, {task: task})
        .then(result => {location.reload()})
        .catch(err => console.log(err))  
    }
    return (
        <div className="create_form">
            <input type="text" placeholder="Enter task..." onChange={(e)=> setTask(e.target.value)}/>
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    );
}

export default Create;
