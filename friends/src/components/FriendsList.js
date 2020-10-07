import React, { Component } from "react";
import { axiosWithAuth } from "../api/axiosWithAuth";
import AddFriendForm from "./AddFriendForm";

class FriendsList extends Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((res) => {
        // console.log("res", res);
        this.setState({ friends: res.data });
        console.log("state", this.state);
      })
      .catch((err) => {
        console.log("Error getting friends", err);
      });
  };
  render() {
    const friends = this.state.friends;
    // console.log("friends array", friends);
    return (
      <div>
        <div className="friendsList">
          {friends.length > 0 &&
            friends.map((friend) => (
              <div className="friend" key={friend.id}>
                <p>{friend.name}</p>

                <p>{friend.age}</p>

                <p>{friend.email}</p>
              </div>
            ))}
        </div>
        <AddFriendForm friends={friends} />
      </div>
    );
  }
}

export default FriendsList;
