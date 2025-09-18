let draggedElement = null;

function openModal() {
    const modal = document.getElementById('modal');
    modal.showModal();
}
function agregarTarea(event) {
    event.preventDefault();
    const titulo = document.getElementById('title-task').value;
    const descripcion = document.getElementById('description').value;
    const toDo = document.getElementById('to-do-list');

    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    newDiv.innerText = titulo;
    newDiv.setAttribute('draggable', 'true');
    newDiv.innerHTML = `
    <p>${descripcion}</p>
     <h2>${titulo}</h2>
    `;

    newDiv.addEventListener('dragstart', function (event) {
        draggedElement = event.target;
    });

    toDo.appendChild(newDiv);
}

function closeModal(event) {
    event.preventDefault();
    const modal = document.getElementById('modal');
    modal.close();
}


function arrastrar(event) {
    event.preventDefault();
}

function soltar(event) {
    event.preventDefault();
    if (draggedElement) {
        event.currentTarget.appendChild(draggedElement);
    }
}