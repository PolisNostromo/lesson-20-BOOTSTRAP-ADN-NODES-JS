const colors = [
    'text-bg-dark',
    'text-bg-danger',
    'text-bg-warning',
    'text-bg-primary',
    'text-bg-success',
    'text-bg-info'
]

let notes = []

const  updateNotes = () =>{
    let container = document.getElementById('notesContainer')
    container.innerHTML = ''
    notes.forEach(item =>{
        let note = `
        <div class="card ${item.color} mb-3" style="width: 18rem;" data-id=${item.id}>
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.text}</p>
                <button type="button" class="btn btn-light" onclick="deleteNote(this)">Удалить</button>
            </div>
        </div>`
        container.innerHTML += note
    })
}


const addNotes = () =>{
    let noteTitle = document.getElementById('title').value
    let noteDesc = document.getElementById('description').value
    let noteColor = Math.trunc(Math.random() * colors.length)
    notes.push({
        title: noteTitle,
        text: noteDesc,
        color: colors[noteColor],
        id: notes.length
    })
    updateNotes()
}

const clearInputs = () =>{
    document.getElementById('title').value = ''
    document.getElementById('description').value = ''
}

const deleteNotes = () =>{
    notes = []
    updateNotes()
}

const deleteNote = (e) =>{
    let card = e.parentNode.parentNode
    let card_id = card.dataset.id

    for(let i = 0; i < notes.length; i++){
        if(notes[i].id == card_id){
            notes.splice(i, 1)
        }
    }
    updateNotes()
}

