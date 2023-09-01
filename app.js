// DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim(); // Get the task text and remove leading/trailing spaces
    
    if (taskText !== '') {
        const taskItem = document.createElement('li'); // Create a new list item
        taskItem.innerText = taskText; // Set the task text
        taskList.appendChild(taskItem); // Add the task to the list

        // Clear the input field
        taskInput.value = '';

        // Add a click event to mark tasks as completed
        taskItem.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        // Add a contextmenu event (right-click) to delete tasks
        taskItem.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            taskList.removeChild(taskItem);
        });
    }
}

// Add a new task when the "Add" button is clicked
addTaskButton.addEventListener('click', addTask);

// Add a new task when the Enter key is pressed in the input field
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});


