import RSidebar from "../navbar/RSidebar";
import RNavbar from "../navbar/RNavbar";
import Footer from "../Footer/Footer";
import UserReport from "../../User Dashboard/UserReport";

export default function ReportUi() {
  return (
    <>
      <div className="container-dashboard">
        <RSidebar />
        <div className="main-content">
          <RNavbar />
          <UserReport />
          <div className="gg">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
