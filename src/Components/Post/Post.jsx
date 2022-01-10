import React from "react";
import "./style.scss";

// @assets
import { Button } from "@mui/material";

// @packages
import { LinkPreview } from "@dhaiwat10/react-link-preview";

import { useHomeMainDataLayerValue } from "../../Context/HomeMainDataLayer";

export default function Post(post) {
  const {
    user_image,
    user_fullname,
    username,
    uploaded_timestamp,
    feed_content,
    feed_image,
    feed_link,
    interactions,
    additionals,
  } = post.post;

  const [data, dispatch] = useHomeMainDataLayerValue();

  const handlePageChange = (e) => {
    data &&
      dispatch({
        type: "SET_ACTIVE_HOMEMAIN_PAGE",
        payload: {
          active_page: e,
        },
      });

    window.document.title = "Home | MeroBhav";
  };

  return (
    <div className="post">
      <img
        className="post__userImage"
        src={user_image}
        alt="Sangya"
        onClick={() => handlePageChange('profile')}
      />

      <div className="post__details">
        <div className="post__details__userDetails">
          <b>{user_fullname}</b>
          <div className="post__details__username" onClick={() => handlePageChange('profile')}>@{username}</div>
          <div className="post__details__postTimestamp">
            <i className="ri-time-line"></i>
            <span>{uploaded_timestamp}</span>
          </div>
        </div>

        <div className="post__details__feedContent">{feed_content}</div>

        {feed_link && (
          <LinkPreview
            className="linkPreview"
            url={feed_link}
            width="100%"
            style={{ margin: "15px 0" }}
          />
        )}

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
              <i className="ri-heart-3-line"></i>{" "}
              <span>{interactions.like_count}</span>
            </Button>

            <Button disabled={additionals.is_comment_disabled}>
              <i className="ri-chat-1-line"></i>{" "}
              <span>{interactions.comment_count}</span>
            </Button>

            <Button>
              <i className="ri-share-circle-line"></i>{" "}
              <span>{interactions.share_count}</span>
            </Button>
          </div>

          <Button>
            <i className="ri-list-settings-line"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}
