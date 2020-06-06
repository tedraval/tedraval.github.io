var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//var todos = []; // listasdd
var todos = JSON.parse(localStorage.getItem('list_todos')) || []; // isso ainda não é uma array

// criando a forma da atividade no todolist
function renderTodos(){
    listElement.innerHTML = ''; // apaga tudo o que tem dentro da ul ou List Element

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        
        linkElement.setAttribute('href', '#'); // adicionando o link

        var pos = todos.indexOf(todo); // pegando o índice do array de todos
        
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')'); // deletando a tarefa de acordo com a sua posição no array

        var linkText = document.createTextNode('APAGAR');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos(); // renderiza as listas

function addTodo(){
    var todoText = inputElement.value; // pega o valor do input
    
    if(todoText !== ""){
        todos.push(todoText) // adiciona item no final da array
        inputElement.value = ''; // limpa o valor do input
        renderTodos();
        saveToStorage(); // salvando no localStorage
    }else{
        alert('Digite alguma atividade!');
    }
}

buttonElement.onclick = addTodo; // quando clicar no botão adiciona a tarefa

function deleteTodo(pos){
    todos.splice(pos, 1); // na pos 0 remove o primeiro item
    renderTodos();
    saveToStorage(); // salvando no localStorage
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}