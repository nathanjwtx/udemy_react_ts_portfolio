import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url)
  .then(response => {
    const todo = response.data as Todo

    const id = todo.id
    const title = todo.title
    const finished = todo.completed

    logTodo(id, title, finished)
  })

interface Todo {
    id: number
    title: string
    completed: boolean
}

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`The todo with id: ${id}. Has a title of ${title}`)
}
