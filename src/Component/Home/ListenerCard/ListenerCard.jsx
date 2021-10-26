import React from "react";
import "./style.scss";

// @packages
import { Button } from "@mui/material";

export default function ListenerCard(listener) {
  const { user_image, user_fullname, username, is_official } =
    listener.listener;
  return (
    <div className="listenerCard">
      <div className="listenerCard__details">
        <img src={user_image} alt={username} />
        <div className="listenerCard__details__user">
          <div>{user_fullname}</div>
          <div className="listenerCard__details__user__username">
            @{username}
          </div>
        </div>
        {is_official && <i className="ri-user-star-line"></i>}
      </div>
      <Button>Follow</Button>
    </div>
  );
}
