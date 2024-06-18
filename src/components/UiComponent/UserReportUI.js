import Footer from '../Footer/Footer'
import UserReport from '../../User Dashboard/UserReport'
import USidebar from '../navbar/USideBar'
import RNavbar from '../navbar/RNavbar'

export default function UserReportUi() {
  return (
    <>
      <div className="container-dashboard">
        <USidebar />
        <div className="main-content">
          <RNavbar />
          <UserReport />
          <div className="gg1">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
