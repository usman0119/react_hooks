import React, { useState } from 'react'
import "./App.css";
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import TodosList from './components/TodosList/TodosList';




const Main = () => {

    // useState adalah array yg mempunyai dua elemen, 
    // elemen pertama itu nama state nya yang kedua fungdi untuk
    // mengupdate nya

    // useEffect adalah komponen hook yg pertama kali dijalankan pas 
    // komponen ditampilkan di app


    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(false);

    return (
        <div className='container'>
            <div className='app-wrapper'>
                <div>
                    <Header />
                </div>
                <div>
                    <Form
                        input={input}
                        setInput={setInput}
                        todos={todos}
                        setTodos={setTodos}
                        editTodo={editTodo}
                        setEditTodo={setEditTodo}
                    />
                </div>
                <div>
                    <TodosList
                        todos={todos}
                        setTodos={setTodos}
                        setEditTodo={setEditTodo}

                    />
                </div>
            </div>
        </div>
    )
}

export default Main