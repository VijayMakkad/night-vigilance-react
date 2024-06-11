import RSidebar from "../navbar/RSidebar";
import RNavbar from "../navbar/RNavbar";
import Footer from "../Footer/Footer";
import Report from "../Report/Report";

export default function ReportUi() {
  return (
    <>
      <div className="container-dashboard">
        <RSidebar />
        <div className="main-content">
          <RNavbar />
          <Report />
          <Footer />
        </div>
      </div>
    </>
  );
}
