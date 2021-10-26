import React from "react";
import "./style.scss";

// @assets
import { Button } from "@mui/material";

export default function Post(post) {
  const {
    user_image,
    user_fullname,
    username,
    uploaded_timestamp,
    feed_content,
    feed_image,
    interactions,
    additionals,
  } = post.post;

  return (
    <div className="post">
      <img className="post__userImage" src={user_image} alt="Sangya" />

      <div className="post__details">
        <div className="post__details__userDetails">
          <b>{user_fullname}</b>
          <div className="post__details__username">@{username}</div>
          <div className="post__details__postTimestamp">
            <i className="ri-time-line"></i>
            <span>{uploaded_timestamp}</span>
          </div>
        </div>

        <div className="post__details__feedContent">{feed_content}</div>

        {feed_image && (
          <img
            className="post__details__feedImage"
            src={feed_image}
            alt="Love"
          />
        )}

        <div className="post__details__interactions">
          <div className="post__details__interactions__icons">
            <Button>
              <i class="ri-heart-3-line"></i>{" "}
              <span>{interactions.like_count}</span>
            </Button>

            <Button disabled={additionals.is_comment_disabled}>
              <i class="ri-chat-1-line"></i>{" "}
              <span>{interactions.comment_count}</span>
            </Button>

            <Button>
              <i class="ri-share-circle-line"></i>{" "}
              <span>{interactions.share_count}</span>
            </Button>
          </div>

          <Button>
            <i class="ri-list-settings-line"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}
