import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BookForm from "../components/BookForm";
import React from "react";

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        const book = res.data;

        // Map API data to form data
        setInitialData({
          title: book.title,
          email: book.body,     // body → email field
          age: book.userId,     // userId → age field
        });
      });
  }, [id]);

  const handleEdit = async (data) => {
    await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        id,
        title: data.title,
        body: data.email,
        userId: data.age,
      }
    );

    alert("Book Updated Successfully!");
    navigate("/");
  };

  if (!initialData) return <h3>Loading...</h3>;

  return (
    <div className="page">
      <h2>Edit Book</h2>

      <div className="card">
        <BookForm
          onSubmit={handleEdit}
          initialData={initialData}
        />
      </div>
    </div>
  );
}

export default EditBook;
