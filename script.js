let todoInput //miejsce gdzie uzytkownik wpisuje tresc zadania
let errorInfo // info o braku zadan/koniecznosc wpisania tekstu
let addBtn // przycisk ADD- dodaje nowe elementy do listy
let ulList // lista zadan, tagi, Ul
let newTodo // nowo dodany li, nowe zadanie

let popup // popup
let popupInfo // tekst w popupie jak sie doda pusty tekst
let todoToEdit // edytowany todo
let popupInput // input w popupie
let popupAddBtn // przycisk "zatwierdz" w popupie
let popupCloseBtn // przycisk 'anuluj" w popupie


const main = () => {
    prepereDOMElements()
    preperDOMEvents()
    // funkcja main bedzie wywolywala inne funcje
}

const prepereDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todoList ul')


    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')
    // pobieranie elementów
}

const preperDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo)
    ulList.addEventListener('click', chceckClick)
    popupCloseBtn.addEventListener('click', closePopup )
    popupAddBtn.addEventListener('click', changeTodoText)
    todoInput.addEventListener('keyup', enterKeyCheck)
// nadawanie nasłuchiwania
}

const addNewTodo = () => {
    if(todoInput.value !== ''){
        newTodo = document.createElement('li')//dodaje nowe li
        newTodo.textContent = todoInput.value// dodaje wpisana wartosc przez uzytkownika
         createToolsArea()

        ulList.append(newTodo)

        todoInput.value = ''//czysci okienko
        errorInfo.textContent = ''//usuwa komunikat o bledzie
    } else {
        errorInfo.textContent = 'Wpisz treść zadania!'
    }
}
//dodawanie nowego zadania za pomoca przycisku add

const createToolsArea = () => {
    const toolPanel = document.createElement('div')
    toolPanel.classList.add('tools')
    newTodo.append(toolPanel)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complite')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = 'EDIT'

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    toolPanel.append(completeBtn, editBtn, deleteBtn)
}

const chceckClick = (e) => {
    if(e.target.matches('.complete')){
        e.target.closest('li').classList.toggle('completed')
        e.target.classList.toggle('completed')
    }else if(e.target.matches('.edit')){
        editTodo(e)
    }else if (e.target('.delete')){
        deleteTodo(e)
    }
}

const editTodo = (event) => {
    todoToEdit = e.target.closest('li') // elemnet, w który będziemy klikali to e.target e jak event
    popupInput.value = todoToEdit.firstChild.textContent //edytowanie tekstu w okinku z trescia zadania
    console.log(todoToEdit.firstChild)
    popup.style.display = 'flex'
}

const closePopup = () => {
    popup.style.display = 'none'
    popupInfo.textContent = ''
}

const changeTodoText = () => {
    if(popupInput.value !== ''){
        todoToEdit.firstChild.textContent = popupInput.value //przypisanie tekstu pola po edicie w miejscu zadania
        popupAddBtn.style.display = 'none'
        popupInfo.textContent = ''
    } else {
        popupInfo.textContent = 'Musisz podać jakąś treść!'
    }
}

const deleteTodo = (e) => {
    e.target.closet('li').remove()

    const allTodos = ulList.querySelectorAll('li')// querrySelectorAll tworzy elemnt tablicopodobny

    if(allTodos.length === 0){
        errorInfo.textContent = 'Brak zadań na liście'
    }
}

const enterKeyCheck = e => {
    if(e.key === "Enter"){
        addNewTodo()
    }
}





document.addEventListener('DOMContentLoaded', main)
// 'DOMContentLoaded' metoda dzieki ktorej skrypty nie uruchomiaja sie dopoki cala strona nie bedzie załadowana


