import React, { useEffect, useState } from "react";
import { retrieveAllTodosByUsername } from "./api/TodoApiService";

export default function ListTodosComponent() {

    const today = new Date()
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())

    const [todos, setTodos] = useState([])

    // const todos = [
    //     { id: 1, description: "Learn AWS", done: false, targetDate: targetDate },
    //     { id: 2, description: "Learn React", done: false, targetDate: targetDate },
    //     { id: 3, description: "Learn DevOps", done: false, targetDate: targetDate },
    // ];

    useEffect(
        () => refreshTodos(), []
    )

    function refreshTodos() {
        retrieveAllTodosByUsername('Vaibhav')
            .then(response => {
                // console.log(response.data)
                setTodos(response.data)
            })
            .catch(error => console.log(error))
    }


    return (
        <div className="container">
            <h1>Things You Want to do !!!</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>description</td>
                            <td>Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                {/* <td>{todo.targetDate.toDateString()}</td> */}
                                <td>{todo.targetDate.toString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}