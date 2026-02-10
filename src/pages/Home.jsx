import { useState } from "react";
import BookTable from "../components/BookTable";

function Home({ books, setBooks }) {
  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  // ✅ Filter books by title
  const filteredBooks = (books || []).filter((b) =>
  b.title.toLowerCase().includes(search.toLowerCase())
);


  return (
    <div className="page">
      <h2>Book List</h2>

      {/* ✅ Search Box */}
      <input
        type="text"
        placeholder="Search by book title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "15px", padding: "8px", width: "250px" }}
      />

      <div className="card">
        <BookTable books={filteredBooks} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default Home;

