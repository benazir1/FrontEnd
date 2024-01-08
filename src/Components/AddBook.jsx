import { FormLabel, TextField, Button } from '@mui/material'
import {Box} from '@mui/system';
import React, { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const AddBook = () => {
  const history = useNavigate();
  const [inputs,setInputs] = useState({
    name:"",
    author:"",
    description:"",
    price:"",
    image:""
  });
  const[checked,setChecked] = useState(false);
  const handleChange =(e) =>{
          setInputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
          }))
  }
  const sendRequest = async() =>{
   await axios.post("https://bookstore-s0q6.onrender.com/books",{
      name :String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      image:String(inputs.image),
      available:Boolean(checked)

    }).then(res=>res.data);

  }
  const handleSubmit =(e) =>{
  e.preventDefault();
  sendRequest().then(()=>history('/books'));
  //console.log(inputs,checked);
  }
  return (
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
     
      <Button variant='contained' type="submit">Add Book</Button>
      </Box>
      
    </form>

   
  )
}

export default AddBook