import "./../sidebar/sidebar.css";
import Jindal from "../../assets/images/google-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { RiHome4Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import ReportUi from "../UiComponent/ReportUi";

const USidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Jindal} alt="Logo" style={{ width: "70px" }} />
      </div>
      <div className="optionsus">
        <div className="content">
          <ul id="iq-sidebar-toggle" className="iq-menu text-white">
            <li className="active">
              <a className="iq-waves-effect">
                <FontAwesomeIcon icon={faFile} />
                <span style={{ marginLeft: "10px", fontSize: "18px" }}>
                  User Dashboard
                </span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="iq-waves-effect"
                aria-expanded="false"
                onClick={() => navigate("/UserReportUI")}
              >
                <RiHome4Line />
                <span style={{ marginLeft: "10px", fontSize: "18px" }}>
                  Report
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default USidebar;
