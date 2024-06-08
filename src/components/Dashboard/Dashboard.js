import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faPlus,
  faPencil,
  faEye,
  faXmark,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddMemberForm from './../AddMemberFrom/AddMemberForm'
import './dashboard.css'
import TeamView from './../TeamViewDashboard/TeamViewDashboard'
import TeamDetails from './../TeamDetails/TeamDetails'
import ReportPopup from './../ReportPopup/ReportPopup'


const data = [
  {
    id: 1,
    location: 'Angul',
    teamHead: 'Arjun Patil',
    shiftInCharge: 'Amit Singh',
    securityStaff: 'Suraj Das',
    scheduleDate: '12-04-2023',
    scheduleTime: '18:30 pm',
  },
  {
    id: 2,
    location: 'Raigarh',
    teamHead: 'Arjun Patil',
    shiftInCharge: 'Amit Singh',
    securityStaff: 'Suraj Das',
    scheduleDate: '12-04-2023',
    scheduleTime: '18:30 pm',
  },
  {
    id: 3,
    location: 'Patratu',
    teamHead: 'Arjun Patil',
    shiftInCharge: 'Amit Singh',
    securityStaff: 'Suraj Das',
    scheduleDate: '12-04-2023',
    scheduleTime: '18:30 pm',
  },
  // Add more data if needed
]

const Dashboard = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(10)
  const [searchTerm, setSearchTerm] = useState('')
  const [popupVisible, setPopupVisible] = useState(false)
  const [teamPopupVisible, setTeamPopupVisible] = useState(false)
  const [viewMemberVisible, setViewMemberVisible] = useState(false)
  const [selectedMember, setSelectedMember] = useState(null)
  const [reportPopupVisible, setReportPopupVisible] = useState(false)



  const handleEntriesChange = (e) => {
    setEntriesPerPage(Number(e.target.value))
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleClearSearch = () => {
    setSearchTerm('')
  }

  const filteredData = data.filter(
    (item) =>
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.teamHead.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.shiftInCharge.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.securityStaff.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.scheduleDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.scheduleTime.toLowerCase().includes(searchTerm.toLowerCase())
  )
    const handleViewMemberClick = (member) => {
      setSelectedMember(member)
      setViewMemberVisible(true)
    }

   const handleTeamPopup = () => {
     console.log('Opening Team Popup')
     setTeamPopupVisible(true)
   }


  return (
    <div className="dashboard">
      <div className="container">
        <div className="row upper-component">
          <div className="col-lg-12 d-flex flex-wrap">
            <div className="col">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option>Select Location</option>
                <option>Raigarh</option>
                <option>Patratu</option>
                <option>Angul</option>
              </select>
            </div>
            <div className="col">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option>Select Team Head</option>
                <option>S.K. Sharma</option>
                <option>Amit Jashwal</option>
              </select>
            </div>
            <div className="col">
              <input
                type="date"
                name="current-date"
                className="form-control"
                required=""
                placeholder="Last Working Date"
              />
            </div>
            <div className="col roaster">
              <button
                className="btn btn-info text-white"
                style={{ width: '200px', fontSize: '1.2rem' }}
              >
                <FontAwesomeIcon icon={faSearch} style={{ color: '#ffffff' }} />
                &nbsp; Search
              </button>
            </div>
          </div>
        </div>
        <div className="row lower-component">
          <div className="col-lg-12 d-flex flex-wrap">
            <div className="col roaster">
              <h4 className="card-title text-white">Roaster Summary</h4>
              <button
                className="btn btn-success"
                onClick={() => setPopupVisible(true)}
              >
                <FontAwesomeIcon icon={faPlus} style={{ color: '#ffffff' }} />
                &nbsp; Add Members
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="table-responsive">
          <div className="d-flex justify-content-between mb-2">
            <div className="entries-select">
              <label htmlFor="entries">Show entries:</label>
              <select
                id="entries"
                value={entriesPerPage}
                onChange={handleEntriesChange}
                className="form-select form-select-sm ms-2"
                style={{ width: 'auto', display: 'inline-block' }}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
            </div>
            <div className="search-box">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button
                className="btn btn-outline-secondary ms-2"
                onClick={handleClearSearch}
              >
                <FontAwesomeIcon icon={faXmark} style={{ color: '#000000' }} />
              </button>
            </div>
          </div>
          <table
            id="example"
            className="nowrap table-bordered"
            style={{ width: '100%' }}
          >
            <thead>
              <tr>
                <th>Sr.No.</th>
                <th scope="col">Location</th>
                <th scope="col">Team Head</th>
                <th scope="col">Shift In charge</th>
                <th scope="col">Security Staff</th>
                <th scope="col">Schedule Date</th>
                <th scope="col">Schedule Time</th>
                <th scope="col">Team Members</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.slice(0, entriesPerPage).map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.location}</td>
                  <td>{item.teamHead}</td>
                  <td>{item.shiftInCharge}</td>
                  <td>{item.securityStaff}</td>
                  <td>{item.scheduleDate}</td>
                  <td>{item.scheduleTime}</td>
                  <td>
                    <a href="#" onClick={handleTeamPopup}>
                      View Member
                    </a>
                  </td>
                  <td className="text-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn icon-btn btn-outline-dark btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#editModalToggle"
                        onClick={() => setPopupVisible(true)}
                      >
                        <FontAwesomeIcon icon={faPencil} aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        className="btn icon-btn btn-outline-dark btn-sm"
                        onClick={() => handleViewMemberClick(item)}
                      >
                        <FontAwesomeIcon icon={faEye} aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        className="btn icon-btn btn-outline-success btn-sm"
                        onClick={() => setReportPopupVisible(true)}
                      >
                        <FontAwesomeIcon icon={faPlus} aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        className="btn icon-btn btn-outline-danger btn-sm"
                      >
                        <FontAwesomeIcon icon={faTrash} aria-hidden="true" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row mt-2">
            <div className="col d-flex justify-content-between">
              <div>
                Showing {filteredData.length > 0 ? 1 : 0} to{' '}
                {Math.min(entriesPerPage, filteredData.length)} of{' '}
                {filteredData.length} entries
              </div>
            </div>
          </div>
        </div>
      </div>
      <TeamDetails
        trigger={teamPopupVisible}
        setTrigger={setTeamPopupVisible}
      />
      <AddMemberForm trigger={popupVisible} setTrigger={setPopupVisible} />
      <TeamView
        trigger={viewMemberVisible}
        setTrigger={setViewMemberVisible}
        member={selectedMember}
      />

      <ReportPopup
        trigger={reportPopupVisible}
        setTrigger={setReportPopupVisible}/>
        
    </div>
  )
}

export default Dashboard
