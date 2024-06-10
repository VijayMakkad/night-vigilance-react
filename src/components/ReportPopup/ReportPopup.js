import React, { useState } from 'react'
import './report.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faSave } from '@fortawesome/free-solid-svg-icons'
import Theft from '../../assets/images/page-img/thief.jpg'
import Sleep from '../../assets/images/page-img/sleeping.jpg'
import Lack from '../../assets/images/page-img/lack_ppe.jpg'
import WorkPractices from '../../assets/images/page-img/unsafe_work_practices.jpg'
import HouseKeeping from '../../assets/images/page-img/poort_housekeeping.jpg'
import Over from '../../assets/images/page-img/over.jpg'
import Lockout from '../../assets/images/page-img/lock_out.jpg'
import MachineGaurd from '../../assets/images/page-img/machine-guarding.jpg'
import Material from '../../assets/images/page-img/material-handling.jpg'
import Electrical from '../../assets/images/page-img/electrical_hazards.jpg'
import Fire from '../../assets/images/page-img/fire.jpg'
import Switch from '@mui/material/Switch'
import AddingReport from '../Addingreport/AddingReport'

const data = [
  {
    id: 1,
    title: 'Theft',
    src: Theft,
  },
  {
    id: 2,
    title: 'Sleeping',
    src: Sleep,
  },
  {
    id: 3,
    title: 'Lack of PPE',
    src: Lack,
  },
  {
    id: 4,
    title: 'Unsafe Work Practices',
    src: WorkPractices,
  },
  {
    id: 5,
    title: 'Poor Housekeeping',
    src: HouseKeeping,
  },
  {
    id: 6,
    title: 'Overcrowded Blocked Emergency',
    src: Over,
  },
  {
    id: 7,
    title: 'Failure to Lockout/Tagout',
    src: Lockout,
  },
  {
    id: 8,
    title: 'Inadequate Machine Guarding',
    src: MachineGaurd,
  },
  {
    id: 9,
    title: 'Hazardous Material Handling',
    src: Material,
  },
  {
    id: 10,
    title: 'Electrical Hazardous',
    src: Electrical,
  },
  {
    id: 11,
    title: 'Fire Safty Violations',
    src: Fire,
  },
]

const ProfilePopup = ({ trigger, setTrigger }) => {
  const [addReport, setAddReport] = useState(false)

  return trigger ? (
    <div className="popup-report">
      <div className="popup-inner-report">
        <div className="row">
          <div className="col-lg-12 d-flex heading-report">
            <h4>Report Add/Edit</h4>
            <button className="close-btn" onClick={() => setTrigger(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
        <div className="card-report">
          <h4>Report Highlights</h4>
          <div className="row">
            {data.map((item) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={item.id}>
                <div className="card-inside">
                  <img
                    src={item.src}
                    className="card-inside-img-top"
                    alt={item.title}
                  />
                  <div className="card-inside-body">
                    <Switch />
                    <h5 className="card-inside-title">{item.title}</h5>
                    <div className="report-btn-container">
                      <button className="add-report-btn" style={{width:'200px'}} onClick={()=>setAddReport(true)}>+ Add Report</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div
              className="buttonss m-3 d-flex justify-content-end"
              style={{ borderTop: '1px solid grey' }}
            >
              <button
                className="btn btn-danger"
                onClick={() => setTrigger(false)}
              >
                Close
              </button>
              <button
                className="btn btn-success"
                style={{ marginRight: '30px' }}
              >
                <FontAwesomeIcon icon={faSave} /> &nbsp; Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <AddingReport trigger={addReport} setTrigger={setAddReport}/>
    </div>
  ) : (
    ''
  )
}

export default ProfilePopup
