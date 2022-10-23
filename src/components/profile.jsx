import React from "react";

const Profile = (props) => {
  return (
    <div className="profile">
      <div className="profile-pic">
        <img className="img" src={require("../images/profile.png")} />
        <a>Suleiman Zhukov</a>
      </div>
      <i className="three-dots">:</i>
    </div>
  );
};

export default Profile;
