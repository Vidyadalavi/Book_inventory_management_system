import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BookTable({ books, onDelete }) {
  const navigate = useNavigate();
  const [authors, setAuthors] = useState({});

  // Fetch all users once
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const map = {};
        res.data.forEach((user) => {
          map[user.id] = user.name;
        });
        setAuthors(map);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.title}</td>

            {/* Show author name instead of id */}
            <td>{authors[book.userId]}</td>

            <td>
              <button
                className="btn view"
                onClick={() => navigate(`/book/${book.id}`)}
              >
                View
              </button>

              <button
                className="btn edit"
                onClick={() => navigate(`/edit/${book.id}`)}
              >
                Edit
              </button>

              <button
                className="btn delete"
                onClick={() => onDelete(book.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookTable;
