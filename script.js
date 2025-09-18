
function openModal()   {
    const modal = document.getElementById('modal');
    modal.showModal();
}
function agregarTarea()     {
    const titulo = document.getElementById('title-task').value;
    const descripcion = document.getElementById('description').value;
    const toDo = document.getElementById('to-do-list');

    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    newDiv.innerText = titulo;

    newDiv.innerHTML = `
    <p>${descripcion}</p>
     <h2>${titulo}</h2>
    `;    

    const tareas = [];
    
    toDo.appendChild(newDiv);
}
function closeModal(event)   {
    event.preventDefault();
    const modal = document.getElementById('modal');
    modal.close();    
}
