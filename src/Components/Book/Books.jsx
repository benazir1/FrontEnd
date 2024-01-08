import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Book from './Book'
import './Books.css'
const URL ="https://bookstore-s0q6.onrender.com/books"

const fetchHandle = async() =>{
return await axios .get(URL).then((res)=>res.data)
}
const Books = () => {
  const [books,setBook] =useState();
  useEffect(()=>{
   fetchHandle().then((data)=>setBook(data.books));
  },[]);
  console.log(books);
  
  return (
    <div>
      <ul>
        {books && books.map((book,i)=>(
          <li className='book' key={i}>
            <Book book={book}/>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default Books