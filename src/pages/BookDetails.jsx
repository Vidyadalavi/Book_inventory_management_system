import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BookDetails() {
  const { id } = useParams();

  const [book, setBook] = useState(null);
  const [author, setAuthor] = useState(null);

  const generateISBN = (id) => {
    return "978" + String(1000000000 + Number(id)).slice(0, 10);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setBook(res.data);
        return axios.get(
          `https://jsonplaceholder.typicode.com/users/${res.data.userId}`
        );
      })
      .then((res) => setAuthor(res.data));
  }, [id]);

  if (!book || !author) return <h3>Loading book details...</h3>;

  const subtitle = "A Complete Guide to Modern Concepts";
  const isbn = generateISBN(book.id);

  return (
    <div className="page">
      <div className="card">
        <div className="book-layout">
          {/* Left: Cover */}
          <img
            src={`https://picsum.photos/300/450?random=${book.id}`}
            alt="Book Cover"
            className="book-cover"
          />

          {/* Right: Info */}
          <div className="book-info">
            <h1>{book.title}</h1>
            <div className="subtitle">{subtitle}</div>

            <div className="meta">
              <p><b>Author:</b> {author.name}</p>
              <p><b>ISBN:</b> {isbn}</p>
              <p><b>Language:</b> English</p>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
