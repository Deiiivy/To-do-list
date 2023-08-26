

const todoList = document.querySelectorAll('.todo-list');
// const footer = document.querySelector('.footer');
// const toogle = document.querySelectorAll('.toogle');
// const deleteBtn = document.getElementById('borrarBtn')
// const editBtn = document.querySelectorAll('.editBtn');
// const updateController = document.querySelectorAll('.update-controller');
// const textTarea = document.querySelectorAll('.input-controller textarea')
// const editControllerSelect = document.querySelectorAll('.edit-controller select')[0];
// const priority = document.querySelectorAll('#priority')
// const editControllerSelect1 = document.querySelectorAll('.edit-controller select')[1];
// const category = document.querySelectorAll('#category');
// const saveBtn = document.querySelectorAll('.saveBtn');
// const cancelBtn = document.querySelectorAll('.cancelBtn');

function createTask(taskText) {
  const taskElement = document.createElement('li');
  taskElement.textContent = taskText;

  const todoList = document.querySelector('.todo-list'); 
  todoList.appendChild(taskElement); 

  const iconBorrar = document.createElement('img')

  p.classList.add('pg')
  trash.setAttribute('src', 'edit_sq')

}


document.querySelector('.new-todo').addEventListener('keyup', (event) => {
  if (event.key === 'Enter' && event.target.value.length > 0) {
    const taskText = event.target.value;
    createTask(taskText);
    event.target.value = '';
  }
});

