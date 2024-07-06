import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Add = ({item}) => {
    // const [page,setPage]=useState('Add')
  const [count,setCount]=useState(0)
  const [form,setForm]=useState({title:item.title,description:item.description,price:item.price,category:item.category})
  function valueAdd(){
    // setCount(count+1)
    console.log(form)
    alert('DATA ADDED')
  }
  function valueCap(e){
    // console.log(e)
    setForm({...form,[e.target.name]:e.target.value})
  }
  return (
    <>
    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        {/* <h1>Welcome to {page} webpage</h1> */}
        <div>
        <TextField
          required
          id="outlined-required"
          label="PRODUCT NAME:"
          name='title'
          value={form.title}
          onChange={valueCap}
         
        />
        </div>
        <div>
        <TextField
          id="outlined-required"
          label="DESCRIPTION"
          name='description'
          value={form.description}
          onChange={valueCap}
       
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          align='center'
          label="PRICE"
          name='price'
          value={form.price}
          onChange={valueCap}
        />
        </div>
        <div>
        <TextField
          id="outlined-read-only-input"
          label="CATEGORY"
          name='category'
          value={form.category}
          onChange={valueCap}
        />
        </div>
         <div><Button variant='contained' onClick={valueAdd}>ADD</Button> 
        <br></br>
        {/* <small>Button is clicked {count} times</small> */}
         </div> 
      </Box>

    </>
    
  )
}

export default Add