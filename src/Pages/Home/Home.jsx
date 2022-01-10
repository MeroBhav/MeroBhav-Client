import React from "react";
import "./styles/style.css";

// @components
import LeftBar from "./Components/LeftBar/LeftBar";
import ListenerCard from "./Components/ListenerCard/ListenerCard";

// @packages
import { Helmet } from "react-helmet";

// @Json
import Listeners from "./Helpers/TopListeners.json";
import CommunityGuidelines from "./Helpers/CommunityGuidelines.json";

import HomeMain from "./Components/Main/HomeMain";
import Profile from "../Profile/Profile";
import EditProfile from "../EditProfile/EditProfile";

import { useHomeMainDataLayerValue } from "../../Context/HomeMainDataLayer";

export default function Home() {
  const [{ active_page }] = useHomeMainDataLayerValue();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home__container">
      <Helmet>
        <title>Home | MeroBhav</title>
      </Helmet>
      {/* @column left bar */}
      <div className="home__leftBar">
        <LeftBar />
      </div>

      {/* @column posts container */}
      <div className="home__postsContainer">
        {
          // @home page
          active_page === "home" && <HomeMain />
        }

        {
          // @profile page
          active_page === "profile" && <Profile />
        }
        
        {
          // @ Edit profile page
          active_page === "edit-profile" && <EditProfile />
        }
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
          {Listeners.map((listener, index) => (
            <ListenerCard listener={listener} key={index} />
          ))}
        </div>

        <div className="home__rightBar__communityGuidelines">
          <h3>Community Guidelines</h3>
          {CommunityGuidelines.map((data, index) => (
            <div
              className="home__rightBar__communityGuidelines__item"
              key={index}
            >
              <div className="home__rightBar__communityGuidelines__title">
                <div className="icon">{data.icon}</div>
                <div className="titleContent">{data.title}</div>
              </div>
              <div className="home__rightBar__communityGuidelines__content">
                {data.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
