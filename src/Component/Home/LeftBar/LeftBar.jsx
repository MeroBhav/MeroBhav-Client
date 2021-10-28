import React from "react";
import "./style.scss";

// @assets
import Logo from "../../../Assets/logo.png";
import UserImage from "../../../Assets/userImage.JPG";

// @packages
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

// @JSON
import User from "../../../JSON/Home/UserProfile.json";

export default function LeftBar() {
  return (
    <div className="leftBar">
      <img src={Logo} alt="merobhav" className="leftBar__logo" />

      {/* @section usercard */}
      <div className="leftBar__userCard">
        {/* @section user setting */}
        <div className="leftBar__userCard__userSetting">
          <Button>
            <i className="ri-equalizer-line"></i>
          </Button>
          <Button className="leftBar__userCard__userSetting__editProfile">
            Edit Profile
          </Button>
        </div>

        {/* @section user follow count */}
        <div className="leftBar__userCard__followCount">
          <div className="leftBar__userCard__followCount__follower">
            {User.follow_count.followers} Followers
          </div>
          <div className="leftBar__userCard__followCount__following">
            {User.follow_count.following} Following
          </div>
          <div className="leftBar__userCard__followCount__postCount">
            {User.post_count} Posts
          </div>
        </div>

        {/* @section user info */}
        <div className="leftBar__userCard__userInfo">
          <img
            className="leftBar__userCard__userInfo__userImage"
            src={UserImage}
            alt={User.username}
          />

          <div className="leftBar__userCard__userInfo__details">
            <div className="leftBar__userCard__userInfo__details__fullName">
              {User.user_fullname}
            </div>

            <div className="leftBar__userCard__userInfo__details__username">
              @{User.username}
            </div>

            <div className="leftBar__userCard__userInfo__details__userCategory">
              {User.user_category}
            </div>
          </div>
        </div>

        {/* @section user bio */}
        <div className="leftBar__userCard__userbio">
          <div className="leftBar__userCard__userbio__placeholder">Bio</div>
          <p>{User.user_bio}</p>
        </div>
      </div>

      {/* @section additional resources */}
      <div className="leftBar__additionalResources">
        <h2>Additional Resources 🚀</h2>
        <div className="leftBar__additionalResources__links">
          <Link>Groups</Link>
          <Link>Events</Link>
          <Link>Discussions</Link>
          <Link>Profesional Listeners</Link>
        </div>

        <Link>Discover More</Link>
      </div>

      {/* @section additional Info */}
      <div className="home__leftBar__additionalInfo">
        <ul>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>User Agreement</li>
          <li>&copy;MeroBhav, Org. All Rights Reserved</li>
        </ul>
      </div>
    </div>
  );
}
