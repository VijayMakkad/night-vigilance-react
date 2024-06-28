import "./navbar.css";
import Profile from "../../assets/images/user/01.jpg";
import { useState } from "react";
import ProfilePopup from "./ProfilePopup";

const RNavbar = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const handleViewProfile = () => {
    setPopupVisible(true);
  };
  return (
    <nav>
      <div className="nav-content">
        <span className="parent-span">
          <h5>
            Report <br />
          </h5>
          <span className="abla">
            <p>
              <a href="#">Home</a>
            </p>
            /<p>Home</p>
          </span>
        </span>
        <div className="user">
        </div>
      </div>
      <ProfilePopup trigger={popupVisible} setTrigger={setPopupVisible} />
    </nav>
  );
};
export default RNavbar;
