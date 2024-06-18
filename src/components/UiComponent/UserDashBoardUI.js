import "../../App.css";
import UNavbar from "../navbar/UNavbar";
import USidebar from "../navbar/USideBar";
import Footer from "../Footer/Footer";
import UserDashboard from "../../User Dashboard/UserDashBoard";

export default function UserDashBoardUI() {
  return (
    <>
      <div className="container-dashboard">
        <USidebar />
        <div className="main-content">
          <UNavbar />
          <UserDashboard />
          <Footer />
        </div>
      </div>
    </>
  );
}
