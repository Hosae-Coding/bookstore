import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddBook from './components/AddBook';
import Books from './components/Book/Books';
import BookDetail from './components/Book/BookDetail';

function App() {
   return (
      <>
         <Header />
         <Routes>
            <Route path="/" exact="/" element={<Home />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/books" element={<Books />} />
            <Route path="books/:id" element={<BookDetail />} />
         </Routes>
      </>
   );
}

export default App;
