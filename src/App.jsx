import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import BookDetails from "./pages/BookDetails";

function App() {
  // ✅ YOU FORGOT THIS
  const [books, setBooks] = useState([]);

  // ✅ Fetch initial books
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setBooks(res.data.slice(0, 10)));
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home books={books} setBooks={setBooks} />} />
        <Route path="/add" element={<AddBook books={books} setBooks={setBooks} />} />
        <Route path="/edit/:id" element={<EditBook books={books} setBooks={setBooks} />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
