// @packages
import { Button } from "@mui/material";
import React from "react";

// @assets
import UserImage from "../../../Assets/userImage.JPG";

// @Json
import Posts from "../../../JSON/Home/Posts.json";

import Post from '../../../Components/Post/Post'

export default function HomeMain() {
  return (
    <div>
      <h1>Home</h1>

      {/* @section create post */}
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

            <Button className="postButton">Post</Button>
          </div>
        </div>
      </div>

      {/* @section posts */}
      <div className="home__postsContainer__posts">
        {Posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </div>
    </div>
  );
}
