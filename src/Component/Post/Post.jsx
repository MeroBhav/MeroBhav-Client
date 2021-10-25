import React from "react";
import "./style.scss";

// @assets
import Sangya from "../../Assets/Sangya.JPG";
import { Button } from "@mui/material";

export default function Post() {
  return (
    <div className="post">
      <img className="post__userImage" src={Sangya} alt="Sangya" />

      <div className="post__details">
        <div className="post__details__userDetails">
          <b>Sangya Sherpa</b>
          <div className="post__details__username">@himitsu-fushigi</div>
          <div className="post__details__postTimestamp">
            <i className="ri-time-line"></i>
            <span>6h</span>
          </div>
        </div>

        <div className="post__details__feedContent">
          I just love you unconditionally, but all you want is to be friends
          LOL. 😂 Is this normal that we fall into love with strangers and feel
          too much connected in no time. ⌛️❤️
        </div>

        <img
          className="post__details__feedImage"
          src="https://images.unsplash.com/photo-1516589091380-5d8e87df6999?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
          alt="Love"
        />

        <div className="post__details__interactions">
          <div className="post__details__interactions__icons">
            <Button>
              <i class="ri-heart-3-line"></i> <span>1K</span>
            </Button>

            <Button>
              <i class="ri-chat-1-line"></i> <span>205</span>
            </Button>

            <Button>
              <i class="ri-share-circle-line"></i> <span>3M</span>
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
