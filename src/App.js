import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import DeleteTodo from "./components/delete-todo.component";
import TodosList from "./components/todos-list.component";
class App extends Component{
  render(){
  return(
    <Router>
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
      </nav>
      <br></br>
      <Routes>
        <Route exact path="/"  element={<TodosList/>}/>
      <Route path="/edit/:id" element={<EditTodo/>} />
      <Route path="/delete/:id" element={<DeleteTodo/>}/>
      <Route path="/create" element={<CreateTodo/>} />
      </Routes>
    </div>
    </Router>
  )
  }
}

export default App;
