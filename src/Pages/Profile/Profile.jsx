import "./styles/style.css";

import React from "react";
import ProfileTabs from "./Components/Tabs";

import { useHomeMainDataLayerValue } from "../../Context/HomeMainDataLayer";

export default function Profile() {
  const [{ active_page }, dispatch] = useHomeMainDataLayerValue();

  const handlePageChange = (e) => {
    if (active_page === "profile") {
      dispatch({
        type: "SET_ACTIVE_HOMEMAIN_PAGE",
        payload: {
          active_page: e
        },
      });

      window.document.title = "Home | MeroBhav"
    }
  };

  /** @dev default scroll to top */
  const profileMainContainerRef = React.useRef();

  React.useEffect(() => {
    profileMainContainerRef.current.scrollIntoView({block: "start"})
  }, [active_page])

  return (
    <div className="profile__container" ref={profileMainContainerRef}>
      <div className="profile__container__topbar">
        <button onClick={() => handlePageChange('home')}>
          <i className="ri-arrow-left-line"></i>
        </button>

        <div>
          <div className="fullName">Deekshya Shahi ✨</div>
          <p>102 Posts</p>
        </div>
      </div>

      <div className="profile__container__profileBanner">
        <img
          src="https://images.unsplash.com/photo-1525013066836-c6090f0ad9d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Dirt Bike"
          className="coverImage"
        />
        <div className="absoluteContent">
          <img
            src="https://images.unsplash.com/photo-1517258307935-9764dad5d7de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="Profile"
          />
          <button onClick={() => handlePageChange("edit-profile")}>Edit Profile</button>
        </div>
      </div>

      <div className="profile__container__userInfo">
        <h3>Deekshya Shahi ✨</h3>
        <p className="username">@dekshyaaaaa</p>
        <p className="bio">I'm basically saying I'm cooler. 🆒</p>
      </div>

      <ProfileTabs />
    </div>
  );
}
