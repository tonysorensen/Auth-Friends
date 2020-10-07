import React, { useState } from "react";
import { axiosWithAuth } from "../api/axiosWithAuth";

export default function AddFriendForm(props) {
  const [friends, setFriends] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    setFriends({ ...friends, [e.target.name]: e.target.value });
  };

  console.log("props from addFriend", props);

  const addFriend = (e) => {
    // e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", friends)
      .then((res) => {
        console.log("res from addFriend", res);
      })
      .catch((err) => {
        console.log("err from addFriend", err);
      });
  };

  return (
    <div>
      <h3 className="addFriendTitle">Add a friend to the list</h3>
      <form className="addFriendForm" onSubmit={addFriend}>
        <label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChange}
          ></input>
        </label>
        <label>
          <input
            id="name"
            type="number"
            name="age"
            placeholder="age"
            onChange={handleChange}
          ></input>
        </label>
        <label>
          <input
            id="name"
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
          ></input>
        </label>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
