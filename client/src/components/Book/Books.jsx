import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Book from './Book';
import './book.css';

const url = 'http://localhost:5000/books';

const fetch = async () => {
   return await axios.get(url).then((res) => res.data);
};

const Books = () => {
   const [books, setBooks] = useState();

   useEffect(() => {
      fetch().then((data) => setBooks(data.books));
   }, []);

   console.log(books);

   return (
      <div>
         <ul>
            {books &&
               books.map((book, i) => (
                  <li key={i}>
                     <Book book={book} />
                  </li>
               ))}
         </ul>
      </div>
   );
};

export default Books;
