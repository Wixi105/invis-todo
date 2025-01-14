function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    
    if (text) {
        const todoList = document.getElementById('todoList');
        const todoItem = createTodoItem(text);
        todoList.appendChild(todoItem);
        input.value = '';
    }
}

function createTodoItem(text) {
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';
    
    const todoText = document.createElement('span');
    todoText.className = 'todo-text';
    todoText.textContent = text;
    
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'edit-input';
    editInput.value = text;
    
    const actionButtons = document.createElement('div');
    actionButtons.className = 'action-buttons';
    
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.onclick = () => {
        if (todoItem.classList.contains('editing')) {
            todoText.textContent = editInput.value;
            editBtn.textContent = 'Edit';
        } else {
            editInput.value = todoText.textContent;
            editBtn.textContent = 'Save';
        }
        todoItem.classList.toggle('editing');
    };
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => todoItem.remove();
    
    actionButtons.appendChild(editBtn);
    actionButtons.appendChild(deleteBtn);
    
    todoItem.appendChild(todoText);
    todoItem.appendChild(editInput);
    todoItem.appendChild(actionButtons);
    
    return todoItem;
}

document.getElementById('todoInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});