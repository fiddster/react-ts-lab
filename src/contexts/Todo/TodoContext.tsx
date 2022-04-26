import React, { useState } from "react"
import { string } from "yup/lib/locale";
import { ITodo } from "./TodoTypes"

const useValue = () => {
    const [todos, setTodos] = useState(new Array<ITodo>());

    const addTodo = (title: string) => {
        const newTodo: ITodo = {
            id: Math.random(), // not really unique - but fine for this example
            title: title,
            status: false,
        }
        setTodos([...todos, newTodo])
    }

    const updateTodo = (id: number) => {
        todos.filter((todo: ITodo) => {
            if (todo.id === id) {
                todo.status = true
                setTodos([...todos])
            }
        })
    }

    const deleteTodo = (id: number) => {
        let filteredTodos = todos.filter((t: ITodo) => {
            return t.id != id
        })
        setTodos(filteredTodos)
    }

    const [name, setName] = useState("")

    const changeName = (newName:string) => {    
        setName(newName)
    }

    return {todos, addTodo, updateTodo, deleteTodo, name, changeName}
}

export const TodoContext = React.createContext<ReturnType<typeof useValue>>({
    todos: [], 
    addTodo: (title: string) => {},
    updateTodo: (id:number) => {},
    deleteTodo: (id:number) => {},
    name: "",
    changeName: (newName:string) => {}
})

const TodoContextProvider: React.FC<React.ReactNode> = ({ children }) => {

    return (
        <TodoContext.Provider value={useValue()}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider