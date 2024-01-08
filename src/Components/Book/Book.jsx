import { Button } from '@mui/material';
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Books.css'
import axios from 'axios';

const Book = (props) => {

  const history = useNavigate();
  const{_id,name,author,description,price,image}=props.book;

  const handleDelete = async() =>{
    await axios.delete(`https://bookstore-s0q6.onrender.com/books/${_id}`)
  .then((res)=>res.data)
  .then(res=>{
    location.reload();
  }) 
  
  };
  return (
    <div className='card'>
        <img src={image} height={100} alt={name}/>
        <artical>by {author}</artical>
        <h3>{name}</h3>
        <p>{description}</p>
        <h2>Rs{price}</h2>
        <Button LinkComponent={Link} to={`/books/${_id}`}sx={{mt:'auto'}}>Update</Button>
        <Button onClick={handleDelete} sx={{mt:'auto'}}>Delete</Button>
    </div>
  )
}

export default Book