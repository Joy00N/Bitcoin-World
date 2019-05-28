import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import BitcoinDetails from "./BitcoinDetails.jsx";

const App = () => (
    <div>
        <BitcoinDetails/>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App