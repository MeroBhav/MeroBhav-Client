import "./styles/style.css";

import React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Button } from "@mui/material";
import { useHomeMainDataLayerValue } from "../../Context/HomeMainDataLayer";

export default function EditProfile() {
    const [{ active_page }, dispatch] = useHomeMainDataLayerValue();

    const handlePageChange = (e) => {
        if (active_page === "edit-profile") {
          dispatch({
            type: "SET_ACTIVE_HOMEMAIN_PAGE",
            payload: {
              active_page: e
            },
          });
    
          window.document.title = "Home | MeroBhav"
        }
      };

    // form data
  const [coverImage, setCoverImage] = React.useState();
  const [profileImage, setProfileImage] = React.useState();
  const [fullName, setFullName] = React.useState("Dikshya Shahi");
  const [username, setUsername] = React.useState("deekshyaaaaa");
  const [bio, setBio] = React.useState("I'm basically saying I'm cooler. 🆒");
  const [dob, setDob] = React.useState();

  return (
    <div className="editProfile__container">
      <div className="editProfile__container__topbar">
        <button onClick={() => handlePageChange("profile")}>
          <i className="ri-arrow-left-line"></i>
        </button>
        <h1>Edit Profile</h1>
      </div>
      <form>
        {/* cover image */}
        <label>Cover Image</label>
        {coverImage && <img src={coverImage} alt="cover" className="coverImage" />}
        <input
          accept="image/*"
          type="file"
          name="coverImage"
          className="imageInput"
          onChange={(e) =>
            setCoverImage(URL.createObjectURL(e.target.files[0]))
          }
        />

        {/* profileimage */}
        <label>Profile Picture</label>
        {profileImage && <img src={profileImage} alt="profile" className="profileImage"/>}
        <input
          accept="image/*"
          type="file"
          name="profileImage"
          className="imageInput"
          onChange={(e) =>
            setProfileImage(URL.createObjectURL(e.target.files[0]))
          }
        />

        <TextField
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          label="Full Name"
          variant="outlined"
        />

        <TextField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
          variant="outlined"
        />

        <TextField
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          label="Bio"
          variant="outlined"
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Date of Birth"
            value={dob}
            onChange={(newValue) => {
              setDob(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <Button>Submit</Button>
      </form>
    </div>
  );
}
