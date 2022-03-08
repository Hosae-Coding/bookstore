import {
   Box,
   Button,
   Checkbox,
   FormControlLabel,
   FormLabel,
   TextField,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BookDetail = () => {
   const history = useNavigate();
   const [checked, setChecked] = useState(false);
   const [inputs, setInputs] = useState({});
   const id = useParams().id;
   useEffect(() => {
      const fetchHandler = async () => {
         await axios
            .get(`http://localhost:5000/books/${id}`)
            .then((res) => res.data)
            .then((data) => setInputs(data.book));
      };
      fetchHandler().then((data) => setInputs(data.book));
   }, [id]);

   const sendReq = async () => {
      await axios
         .put(`http://localhost:5000/books/${id}`, {
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

   const handleChange = (e) => {
      setInputs((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
      }));
   };
   console.log(inputs);
   return (
      <div>
         {inputs && (
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
                     Update Boook
                  </Button>
               </Box>
            </form>
         )}
      </div>
   );
};

export default BookDetail;
