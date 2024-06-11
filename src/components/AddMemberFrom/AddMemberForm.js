import React, { useEffect, useState } from 'react'
import './AddMemberForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTimes,
  faPencil,
  faEye,
  faTrash,
  faXmark,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'
import AddPopup from './../Popup/AddPopup'
import TeamView from './../TeamViewPopup/TeamViewPopup'
import EditView from './../EditViewPopup/EditViewPopup'

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

const AddMemberForm = ({ trigger, setTrigger }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [entries, setEntries] = useState(10)
  const [popupVisible, setPopupVisible] = useState(false)
  const [teamViewVisible, setTeamViewVisible] = useState(false)
  const [editVisible, setEditViewVisible] = useState(false)

  const filteredData = data.filter((item) => {
    return (
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.teamHead.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.shiftInCharge.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.securityStaff.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.scheduleDate.includes(searchTerm) ||
      item.scheduleTime.includes(searchTerm)
    )
  })

  const closeParentPopup = () => {
    setTrigger(false)
  }

  useEffect(() => {
    const closePopup = (e) => {
      if (e.key === 'Escape') {
        setTrigger(false)
      }
    }
    window.addEventListener('keydown', closePopup)
    return () => window.removeEventListener('keydown', closePopup)
  }, [])


  return trigger ? (
    <div className="popup">
      <div className="popup-inner container">
        <div className="row">
          <div className="col-lg-12 d-flex heading">
            <h4>Roaster Add/Edit</h4>
            <button className="close-btn btn" onClick={() => setTrigger(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
        <div className="row form-section">
          <div className="col-md-4 mb-3">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <select id="location" className="form-select">
              <option>Select Location</option>
              <option>Angul</option>
              <option>Raigarh</option>
              <option>Patratu</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="teamHead" className="form-label">
              Team Head Email
            </label>
            <input
              type="text"
              id="teamHead"
              className="form-control"
              placeholder="TeamHead@jindalsteel.com"
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="shiftIncharge" className="form-label">
              Shift Incharge Email
            </label>
            <input
              type="text"
              id="shiftIncharge"
              className="form-control"
              placeholder="ShiftIncharge@jindalsteel.com"
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="securityStaff" className="form-label">
              Security Staff Code
            </label>
            <input
              type="text"
              id="securityStaff"
              className="form-control"
              placeholder="Security Staff code"
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="scheduleDate" className="form-label">
              Schedule Date
            </label>
            <input type="date" id="scheduleDate" className="form-control" />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="scheduleTime" className="form-label">
              Schedule Time
            </label>
            <input type="time" id="scheduleTime" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-3 btun">
            <button
              className="btn btn-success "
              onClick={() => setPopupVisible(true)}
            >
              {' '}
              <FontAwesomeIcon icon={faPlus} /> Add Members
            </button>
          </div>
        </div>
        <div className="row mb-3"></div>
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <div className="d-flex justify-content-between">
                <div className="col-sm-2">
                  <div className="entries-select">
                    <span>Show</span>
                    <select
                      id="entries"
                      className="form-select form-select-sm ms-2"
                      value={entries}
                      onChange={(e) => setEntries(e.target.value)}
                    >
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                      <option value={15}>15</option>
                      <option value={20}>20</option>
                    </select>
                    <span className="ms-2">entries</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="search-box">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                      className="btn btn-outline-secondary ms-2"
                      onClick={() => setSearchTerm('')}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                  </div>
                </div>
              </div>
              <table
                id="example"
                className="nowrap table-bordered "
                style={{ width: '100%' }}
              >
                <thead className="tbs">
                  <tr>
                    <th>Sr. No.</th>
                    <th>Location</th>
                    <th>Team Head</th>
                    <th>Shift In Charge</th>
                    <th>Security Staff</th>
                    <th>Schedule Date</th>
                    <th>Schedule Time</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.slice(0, entries).map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.location}</td>
                      <td>{item.teamHead}</td>
                      <td>{item.shiftInCharge}</td>
                      <td>{item.securityStaff}</td>
                      <td>{item.scheduleDate}</td>
                      <td>{item.scheduleTime}</td>
                      <td className="text-center">
                        <div className="btn-group">
                          <button
                            className="btn icon-btn btn-outline-success btn-sm me-2"
                            onClick={() => setEditViewVisible(true)}
                          >
                            <FontAwesomeIcon
                              icon={faPencil}
                              aria-hidden="true"
                            />
                          </button>
                          <button
                            className="btn icon-btn btn-outline-dark btn-sm me-2"
                            onClick={() => setTeamViewVisible(true)}
                          >
                            <FontAwesomeIcon icon={faEye} aria-hidden="true" />
                          </button>
                          <button className="btn icon-btn btn-outline-danger btn-sm">
                            <FontAwesomeIcon
                              icon={faTrash}
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="d-flex justify-content-between">
                <div>
                  Showing {Math.min(entries, filteredData.length)} of{' '}
                  {filteredData.length} entries
                </div>
                <div>
                  {/* Pagination controls can be added here if needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddPopup
        trigger={popupVisible}
        setTrigger={setPopupVisible}
        closeParent={closeParentPopup}
      />
      <TeamView
        trigger={teamViewVisible} // Pass the visibility state of TeamViewPopup
        setTrigger={setTeamViewVisible} // Pass the state update function of TeamViewPopup
        closeParent={closeParentPopup} // Pass the close function for the parent popup
      />
      <EditView
        trigger={editVisible}
        setTrigger={setEditViewVisible}
        closeParent={closeParentPopup}
        data={data} // Pass the entire data object
      />
    </div>
  ) : null
}

export default AddMemberForm
