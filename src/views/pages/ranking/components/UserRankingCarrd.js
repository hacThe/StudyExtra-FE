import React from "react";
import "../scss/UserRankingCard.scss";
// import { CardMedia  } from '@mui/material';

const UserRankingCard = ({ index, user }) => {
  return (
    <div
      className="card-body"
      style={
        index % 2 === 0
          ? { backgroundColor: "#f5f5f5" }
          : { backgroundColor: "#fff" }
      }
    >
      <div className="card-number">{index}.</div>
      <img src={user.avatar} className="card-user-avatar"></img>
      <div className="user-info">
        <p className="card-user-name">{user.name}</p>
        <p className="card-username">@{user.username}</p>
      </div>
      <div className="card-user-point">{user.point}</div>
    </div>
  );
};

export default UserRankingCard;
