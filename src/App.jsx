import React from 'react'

import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import AddBook from './Components/AddBook'
import About from './Components/About'
import BookDetail from './Components/Book/BookDetails'
import Books from './Components/Book/Books'

function App() {
 
 return ( 
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
 
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/add" element={<AddBook/>}  />
      <Route exact path="/books" element={<Books/>}/>
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/books/:id" element={<BookDetail/>} />
        </Routes>
   
      </main>
      </React.Fragment>
 )
}

export default App
