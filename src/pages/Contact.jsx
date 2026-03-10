import { useState } from "react";

export default function Contact() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const err = {};
    if (!data.name) err.name = "Name required";
    if (!data.email) err.email = "Email required";
    if (!data.message) err.message = "Message required";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) alert("Form Submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Us</h2>

      <input
        placeholder="Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      {errors.name && <p>{errors.name}</p>}

      <input
        placeholder="Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      {errors.email && <p>{errors.email}</p>}

      <textarea
        placeholder="Message"
        value={data.message}
        onChange={(e) => setData({ ...data, message: e.target.value })}
      />
      {errors.message && <p>{errors.message}</p>}

      <button>Submit</button>
    </form>
  );
}