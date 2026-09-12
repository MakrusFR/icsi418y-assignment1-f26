const tasks = [];
const form = document.querySelector("#newTask"); 

form.addEventListener("submit", function(event) { 
    event.preventDefault(); 
    addTask();
});

// Task Function
function addTask(){
    const name = document.getElementById("name").value;
    const priority = document.getElementById("priority").value;
    
	if (name === "") {
		return;
	}
	
    const task = {
        name: name,
        priority: priority,
        completed: false
    };
    
    tasks.push(task);
    
    displayTasks();
}

// Display Function
function displayTasks(){
    let output = "";

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        let priority = task.priority;

        if (task.completed) {
            priority = "completed";
        }

        output += "<div class='" + priority + "'>" +
                  "Task name: " + task.name +
                  " | Task priority: " + task.priority +
                  " <button onclick='completeTask(" + i + ")'>Complete</button>" +
                  " <button onclick='deleteTask(" + i + ")'>Delete</button>" +
                  "</div>";
    }

    document.getElementById("output").innerHTML = output;
}

// Complete Fuiction
function completeTask(i){
    tasks[i].completed = true;
    displayTasks();
}

// Delete Function
function deleteTask(i){
    tasks.splice(i, 1);
    displayTasks();
}