// @packages
import { Button } from "@mui/material";
import React from "react";

// @assets
import UserImage from "../../../../Assets/userImage.JPG";

// @Json
import Posts from "../../Helpers/Posts.json";

import Post from "../../../../Components/Post/Post";

import { useHomeMainDataLayerValue } from "../../../../Context/HomeMainDataLayer";

export default function HomeMain() {
  const [{ active_page }, dispatch] = useHomeMainDataLayerValue();

  const handlePageChange = (e) => {
    if (active_page === "home") {
      dispatch({
        type: "SET_ACTIVE_HOMEMAIN_PAGE",
        payload: {
          active_page: e
        },
      });

      window.document.title = "Profile | MeroBhav"
    }
  };

  const homeMainContainerRef = React.useRef();

  React.useEffect(() => {
    homeMainContainerRef.current.scrollIntoView({block: 'start'})
  }, [active_page])

  return (
    <div ref={homeMainContainerRef}>
      <h1>Home</h1>

      {/* @section create post */}
      <div className="home__postsContainer__createPost">
        <Button onClick={() => handlePageChange("profile")}>
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
