import React, { useEffect, useRef } from "react";
import "./profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { SignOutButton } from "@clerk/clerk-react"; // Import SignOutButton

const ProfilePopup = ({ trigger, setTrigger }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setTrigger(false);
      }
    };

    if (trigger) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [trigger, setTrigger]);

  return trigger ? (
    <div className="popup-pro">
      <div className="popup-inner-pro" ref={popupRef}>
        <div className="row ">
          <div className="col-lg-12 d-flex heading-pro">
            <h4>Hello User</h4>
            <button className="close-btn" onClick={() => setTrigger(false)}>
              <FontAwesomeIcon icon={faTimes} color="#fff" />
            </button>
          </div>
          <div className="col-lg-12 d-flex justify-content-end align-items-end">
            <SignOutButton>
              <button
                className="btn btn-danger mt-5"
                style={{ width: "130px" }}
              >
                <FontAwesomeIcon icon={faDoorOpen} />
                &nbsp; Sign Out
              </button>
            </SignOutButton>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ProfilePopup;
