import React from "react";
import { useSelector } from "react-redux";

const User = () => {
  const { name, status } = useSelector((state) => state);

  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {name}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default User;
