#!/usr/bin/env node
import inquirer from "inquirer";

import chalk from "chalk";

let todos:string[] = ["haider","aamir"]

async function creatTodo(todo:string[]){
    do{  let option = await inquirer.prompt({
        type:"list",
        name:"select",
        choices:["Add","update","view","delete"],
        message:"select one option",
})


if(option.select == "Add"){
    let addTodo = await inquirer.prompt({
        type:"input",
        name:"todo",
        message:"Add item in your list"
    })
    todos.push(addTodo.todo);
    todos.forEach(item => console.log(chalk.yellow(item)))
}
if(option.select === "update"){
    let updatetodo = await inquirer.prompt({
        type:"list",
        name:"select",
        message:"select item to update",
        choices:todos.map(item => item)
    })
    let addTodo = await inquirer.prompt({
        type:"input",
        name:"todo",
        message:"Add item in your list"
    })
    let newtodo = todos.filter(todo => todo !== updatetodo.select);
    todos = [...newtodo,addTodo.todo]
 todos.forEach(item => (console.log(chalk.green(item))));
}

if(option.select === "view"){
    todos.forEach(item => console.log(chalk.blue(item)))
}

if(option.select === "delete"){
    let deleteTodo = await inquirer.prompt({
       type:"list",
       name:"select",
       choices:todos.map(item => item),
       message:"select item to delete"
    })
let newtodo = todos.filter(item => item !== deleteTodo.select)
newtodo.forEach(item => console.log(chalk.bgGrey(item)));
}
}while(true)

}
creatTodo(todos)
