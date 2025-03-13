import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/actions";

const UserForm = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && status.trim()) {
      dispatch(setUserInfo(name, status));
      setName("");
      setStatus("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit User Information</h2>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Status:</label>
      <input
        type="text"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;

