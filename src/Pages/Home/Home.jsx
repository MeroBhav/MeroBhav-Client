import React from "react";
import "./style.scss";

// @components
import LeftBar from "../../Component/Home/LeftBar/LeftBar";

// @assets
import UserImage from "../../Assets/userImage.JPG";

// @packages
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className="home">
      {/* @column left bar */}
      <div className="home__leftBar">
        <LeftBar />
      </div>

      {/* @column posts container */}
      <div className="home__postsContainer">
        <h1>Home</h1>
        <div className="home__postsContainer__createPost">
          <Button>
            <img src={UserImage} alt="" />
          </Button>

          <div className="home__postsContainer__createPost__detailsEditor">
            <textarea name="" placeholder="What's Happening?"></textarea>

            <div className="home__postsContainer__createPost__detailsEditor__extraTools">
              <div className="home__postsContainer__createPost__detailsEditor__extraTools__icons">
                <Button>
                  <i className="ri-image-line"></i>
                </Button>
                <Button>
                  <i className="ri-file-gif-line"></i>
                </Button>
                <Button>
                  <i className="ri-emotion-line"></i>
                </Button>
              </div>

              <Button className="postButton">
                  Post
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* @column right bar */}
      <div className="home__rightBar">This is right bar</div>
    </div>
  );
}
