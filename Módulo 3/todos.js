var listElement = document.querySelector("#app ul")
var inputElement=  document.querySelector("#app input")
var buttonElement = document.querySelector("#app button")


//Transfere os dados para o 'list_todos' que salva no storage 
//Os dados salvos na aplicação ficam salvos no banco de dados 
//da página e quando é atualizada os dados continuam no valor 'list_todos'
//JSON.parse transforma de vetor para string
//O vetor vazio é para caso não hajam valores aceitáveis para os vetores 
var todos = JSON.parse(localStorage.getItem('list_todos')) ||[]

//Array com os elementos que serão criados dinamicamente
/*
var todos = [
    'Fazer café',
    'Estudar JavaScript',
    'Acessar comunidade Rockseat'
]
*/

//Criando tag e texto com base nos arrays
function renderTodos(){
    //Remove todo o conteúdo no listElement 
    //para não repetir os valores do array
    listElement.innerHTML = ''
    
    //FOR para arrays
    for(todo of todos){
        //Cria um li dinamicamente
        var todoElement = document.createElement('li')
        //Cria um texto no todo
        var todoText = document.createTextNode(todo)
        
        //criando o link de excluir todos dinamicamente
        var linkElement = document.createElement('a')
        //cria o href ligando-o ao 'a'
        linkElement.setAttribute('href','#')
        var linkText = document.createTextNode('Excluir')

        //Usada para encontrar o valor do todo 
        //para retornar sua posição
        var pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick','deleteTodo('+pos+')')


        //Faz aparecer um elemento filho dinamicamente
        //Cada elemento aparecerá na ordem listada
        linkElement.appendChild(linkText)
        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement)
    }
}

renderTodos()

function addTodo(){
    //Pega o valor do input
    var todoText = inputElement.value

    //adiciona o valor do input para a ul
    todos.push(todoText)
    //Deixa o valor do input element vazio após adicionar um valor
    inputElement.value = ''
    //executa a função novamente
    renderTodos()
    saveToStorage()
}
//Cria o valor onclick no botão e inicia a função no onclick 
buttonElement.onclick = addTodo

function deleteTodo(pos){
    //O método splice remove uma quantidade de itens
    // no array baseado na posição passada
    todos.splice(pos,1)
    renderTodos()
    saveToStorage()
}

function saveToStorage(){
    //Armazena os valores (não guarda vetores, só string)
    //O JSON.stringify que converte o vetor em uma string
    localStorage.setItem('list_todos', JSON.stringify(todos))
    
}