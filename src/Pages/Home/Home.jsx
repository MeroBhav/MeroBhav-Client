import React from "react";
import "./style.scss";

// @components
import LeftBar from "../../Component/Home/LeftBar/LeftBar";
import Post from "../../Component/Post/Post";

// @assets
import UserImage from "../../Assets/userImage.JPG";

// @packages
import { Button } from "@mui/material";
import { Helmet } from "react-helmet";

// @Json
import Posts from "../../JSON/Home/Posts.json";
import Listeners from "../../JSON/Home/TopListeners.json"
import ListenerCard from "../../Component/Home/ListenerCard/ListenerCard";

export default function Home() {
  return (
    <div className="home">
      <Helmet>
        <title>Home | MeroBhav</title>
      </Helmet>
      {/* @column left bar */}
      <div className="home__leftBar">
        <LeftBar />
      </div>

      {/* @column posts container */}
      <div className="home__postsContainer">
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

      {/* @column right bar */}
      <div className="home__rightBar">
        <div className="home__rightBar__searchBar">
          <i className="ri-search-2-line"></i>{" "}
          <input type="text" placeholder="Search MeroBhav..." />
        </div>

        <hr />

        <div className="home__rightBar__topListeners">
          <h1>Top Listeners</h1>
          {
            Listeners.map((listener, index) => <ListenerCard listener={listener} key={index}/>)
          }
        </div>
      </div>
    </div>
  );
}
