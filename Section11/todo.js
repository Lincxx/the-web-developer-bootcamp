var todos = ["buy turtle", "food"];

var input = prompt("What would like to do");

while (input !== "quit") {
    //handle input
    if (input === "list") {
        console.log(todos);
    } else if (input === "new"){
        //ask for new todos
        var newTodo = prompt("Enter new todo");
        //add to todos array
        todos.push(newTodo);
        console.log(todos);
    }
    //ask again for new input
    input = prompt("What would like to do");
}

console.log("Ok, you quit the app");
