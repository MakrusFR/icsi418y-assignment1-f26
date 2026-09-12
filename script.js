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
	
	const task = {
		name: name,
		priority: priority,
		completed: false
	};
	
	tasks.push(task);
	
	displayTasks()
}

function displayTasks(){
	let output = "";
	for (let i = 0; i < tasks.length; i++) {
		const task = tasks[i];
		output += "Task name: " + task.name + " | Task priority: " + task.priority + "<br>";
	}
	document.getElementById("output").innerHTML = output;
}