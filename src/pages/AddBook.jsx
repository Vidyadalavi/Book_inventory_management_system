import { useNavigate } from "react-router-dom";
import axios from "axios";
import BookForm from "../components/BookForm";

function AddBook() {
  const navigate = useNavigate();

  const handleAdd = async (data) => {
    await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: data.title,
        body: data.email,
        userId: data.age,
      }
    );
    alert("Book Added Successfully!");
    navigate("/");
  };

  return (
     <div className="page">
    <h2>Add Book</h2>

    <div className="card">
      <BookForm onSubmit={handleAdd} />
    </div>
  </div>
  );
}

export default AddBook;
