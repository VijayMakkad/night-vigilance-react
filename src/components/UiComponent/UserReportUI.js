import Footer from '../Footer/Footer'
import UserReport from '../../User Dashboard/UserReport'
import RUSidebar from '../navbar/RUSidebar'
import RNavbar from '../navbar/RNavbar'

export default function UserReportUi() {
  return (
    <>
      <div className="container-dashboard">
        <RUSidebar />
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
