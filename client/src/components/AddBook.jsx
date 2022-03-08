import React, { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { Box, Button, Checkbox, FormControlLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
   const history = useNavigate();

   const [inputs, setInputs] = useState({
      name: '',
      description: '',
      price: '',
      author: '',

      image: '',
   });

   const [checked, setChecked] = useState(false);
   const handleChange = (e) => {
      setInputs((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
      }));
   };
   const sendReq = async () => {
      axios
         .post('http://localhost:5000/books', {
            name: String(inputs.name),
            author: String(inputs.author),
            description: String(inputs.description),
            price: Number(inputs.price),
            image: String(inputs.image),
            available: Boolean(checked),
         })
         .then((res) => res.data);
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      sendReq().then(() => history('/books'));
   };
   return (
      <form onSubmit={handleSubmit}>
         <Box
            display="flex"
            flexDirection="column"
            justifyContent={'center'}
            maxWidth={700}
            alignContent={'center'}
            alignSelf="center"
            marginLeft={'auto'}
            marginRight="auto"
            marginTop={10}
         >
            <FormLabel>Name</FormLabel>
            <TextField
               value={inputs.name}
               onChange={handleChange}
               margin="nomal"
               fullWidth
               variant="outlined"
               name="name"
            />
            <FormLabel>Author</FormLabel>
            <TextField
               value={inputs.author}
               onChange={handleChange}
               margin="nomal"
               fullWidth
               variant="outlined"
               name="author"
            />
            <FormLabel>Description</FormLabel>
            <TextField
               value={inputs.description}
               onChange={handleChange}
               margin="nomal"
               fullWidth
               variant="outlined"
               name="description"
            />
            <FormLabel>Price</FormLabel>
            <TextField
               value={inputs.price}
               onChange={handleChange}
               margin="nomal"
               fullWidth
               variant="outlined"
               name="price"
            />
            <FormLabel>Image</FormLabel>
            <TextField
               value={inputs.image}
               onChange={handleChange}
               margin="nomal"
               fullWidth
               variant="outlined"
               name="image"
            />
            <FormControlLabel
               control={
                  <Checkbox
                     checked={inputs.available}
                     onChange={() => setChecked(!checked)}
                  />
               }
               label="Available"
            />
            <Button type="submit" variant="contained">
               Add Boook
            </Button>
         </Box>
      </form>
   );
};

export default AddBook;
