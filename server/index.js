const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/bookRoutes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/books', router);

mongoose
   .connect(
      'mongodb+srv://12341234:12341234@cluster0.mhs70.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      {
         useNewUrlParser: true,

         useUnifiedTopology: true,
      }
   )
   .then(() => console.log('MongoDB connection established.'))
   .then(() => {
      app.listen(5000);
   })
   .catch((error) =>
      console.error('MongoDB connection failed:', error.message)
   );
