const userInput = document.getElementById('userInput');
const listItem = document.getElementById('listItem');

// Load tasks from localStorage when page loads
document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
    if (userInput.value.trim() === "") {
        alert("Please input a new task!");
    } else {
        let taskText = userInput.value.trim();
        
        createTaskElement(taskText);

        // Save to localStorage
        saveTaskToLocalStorage(taskText);

        userInput.value = '';  // Clear input
    }
}

function createTaskElement(taskText) {
    let list = document.createElement('li');
    list.textContent = taskText;
    listItem.appendChild(list);

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList = 'editBtn';
    editBtn.onclick = function() {
        let currentText = list.firstChild.textContent;
        let newText = prompt("Edit your task", currentText);

        if (newText !== null && currentText !== newText) {
            list.firstChild.textContent = newText;
            updateTaskInLocalStorage(currentText, newText);
        }
    }

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList = "deleteBtn";
    deleteBtn.onclick = function() {
        listItem.removeChild(list);
        removeTaskFromLocalStorage(list.textContent);
    }
    
    list.appendChild(editBtn);
    list.appendChild(deleteBtn);
}

// Save task to localStorage
function saveTaskToLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task from localStorage
function removeTaskFromLocalStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Update task in localStorage after editing
function updateTaskInLocalStorage(oldText, newText) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let taskIndex = tasks.indexOf(oldText);
    if (taskIndex !== -1) {
        tasks[taskIndex] = newText;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

// Load tasks from localStorage when the page loads
function loadTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.forEach(task => {
        createTaskElement(task);
    });
}
