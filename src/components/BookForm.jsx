import { useState } from "react";

function BookForm({ onSubmit, initialData = {} }) {
  const [title, setTitle] = useState(initialData.title || "");
  const [email, setEmail] = useState(initialData.email || "");
  const [age, setAge] = useState(initialData.age || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, email, age });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />

      <button type="submit">Save</button>
    </form>
  );
}

export default BookForm;
