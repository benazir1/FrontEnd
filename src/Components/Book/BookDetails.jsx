import { FormLabel, TextField, Button } from '@mui/material'
import {Box} from '@mui/system';
import React, { useEffect, useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useParams } from 'react-router-dom'

const BookDetails = () => {
    
    const history = useNavigate();
    const id =useParams().id;
    console.log(id);
  const [inputs,setInputs] = useState({});
  const[checked,setChecked] = useState(false);

  useEffect(()=>{
   
    const fetchHandler = async() =>{
      await axios.get(`https://bookstore-s0q6.onrender.com/books/${id}`)
      .then((res)=>res.data).then(data=>setInputs(data.book));
       };
fetchHandler();
  },[id])

  const handleChange =(e) =>{
          setInputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
          }))
  }
      //console.log(id);
    
  
    const sendRequest = async() =>{
  await axios.put(`https://bookstore-s0q6.onrender.com/books/${id}`,{
      name :String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      image:String(inputs.image),
      available:Boolean(checked),

  }).then((res)=>res.data);
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        sendRequest().then(()=>history('/books'));
        //console.log(inputs,checked);
        }
  
  return (
    <div>
    { inputs &&(
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column"
       justifyContent={'center'} maxWidth={700}
       alignContent={'center'}
       alignSelf={'center'} margin={'auto'}
       marginRight={'auto'}
       marginTop={10}
       >
      <FormLabel>Name</FormLabel>
      <TextField  value={inputs.name} onChange={handleChange} margin='normal' fullWidth  variant='outlined' name="name"/>

      <FormLabel>Author</FormLabel>
      <TextField value={inputs.author} onChange={handleChange} margin='normal' fullWidth  variant='outlined' name="author"/>
     
      <FormLabel>Description</FormLabel>
      <TextField value={inputs.description} onChange={handleChange} margin='normal' fullWidth  variant='outlined' name="description"/>
      
      <FormLabel>price</FormLabel>
      <TextField value={inputs.price} onChange={handleChange} type="number" margin='normal' fullWidth  variant='outlined' name="price"/>
    
      <FormLabel>image</FormLabel>
      <TextField value={inputs.image} onChange={handleChange} margin='normal' fullWidth  variant='outlined' name="image"/>
      
      <FormControlLabel  control={
      <Checkbox checked={checked} onChange={()=>setChecked(!checked)} />
      }
       label="Available" />
     
      <Button variant='contained' type="submit">Update Book</Button>
      </Box>
      
    </form>)}
   </div>
  )
}

export default BookDetails