// Selectors
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.querySelector('.task-list');

// Event Listeners
addTaskBtn.addEventListener('click', addTask);

// Functions
function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';

  taskItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div class="task-actions">
      <button class="check-btn">✔</button>
      <button class="delete-btn">✖</button>
    </div>
  `;

  taskList.appendChild(taskItem);
  taskInput.value = '';
 
  // Check Task
  taskItem.querySelector('.check-btn').addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  // Delete Task
  taskItem.querySelector('.delete-btn').addEventListener('click', () => {
    taskItem.remove();
  });
}
  