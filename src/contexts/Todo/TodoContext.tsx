import React, { createContext, useContext, useState } from "react"
import { ITodo, TodoContextType } from "./TodoTypes"


const useValue = () => {
    const [todos, setTodos] = useState<ITodo[]>(new Array<ITodo>());

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

    return {todos, addTodo, updateTodo, deleteTodo}
}

export const TodoContext = React.createContext({} as ReturnType<typeof useValue>)

const TodoContextProvider: React.FC<React.ReactNode> = ({ children }) => {

    return (
        <TodoContext.Provider value={useValue()}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider