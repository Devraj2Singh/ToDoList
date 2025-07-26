const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Models/models.js');
const dotenv = require("dotenv")

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config()

mongoose.connect("mongodb://127.0.0.1/ToDo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
)
.then(() => console.log("DataBase is connected successfully!"));


app.get("/get", (req,res)=>{
    TodoModel.find()
    .then(result=> res.json(result))
    .catch(err => res.json(err))
})

app.put("/update/:id", (req,res)=>{
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id: id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
    
})

app.delete("/delete/:id", (req,res) =>{
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))

})

app.post('/add', (req,res)=>{
    const task = req.body.task;
    TodoModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(3001, ()=>{
    console.log("Server is Running on Port: 3001");
    
})