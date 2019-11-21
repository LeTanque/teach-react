# teach-react
A tutorial application to help teach component construction, prototyping, basic API verbs, props, and state. 
Leverages a lambda BE.

## Instructions
There are two branches here. Finished and master. Master is the bare bones app. Finished includes everything we worked on in the live demo.

--- 

### The API base URL
`https://fe-notes.herokuapp.com`


#### getNotes
`https://fe-notes.herokuapp.com/note/get/all`

.get('https://fe-notes.herokuapp.com/note/get/all')


#### addNote
`https://fe-notes.herokuapp.com/note/create`

.post('https://fe-notes.herokuapp.com/note/create', noteObject, { headers: { 'Content-Type': 'application/json' }})


#### deleteNote
`https://fe-notes.herokuapp.com/note/delete/`

.delete('https://fe-notes.herokuapp.com/note/delete/'+id)


#### noteDetail
`https://fe-notes.herokuapp.com/note/get/`

.get('https://fe-notes.herokuapp.com/note/get/'+noteID)


#### updateNote
`https://fe-notes.herokuapp.com/note/edit/`

.put('https://fe-notes.herokuapp.com/note/edit/'+noteID, noteObject, { headers: { 'Content-Type': 'application/json' }})
