import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './edit.css'

const EditViewPopup = ({ trigger, setTrigger, closeParent, data})   => {
  const [formData, setFormData] = useState(data || {})

  useEffect(() => {
    setFormData(data || {})
  }, [data])

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Updated Data:', formData)
    setTrigger(false)
  }

  return trigger ? (
    <div className="popup-edit">
      <div className="popup-inner-edit">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between align-items-center heading-view">
            <h4>Edit Report</h4>
            <button
              className="close-btn"
              onClick={() => {
                setTrigger(false)
                closeParent()
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row mt-3">
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
            <div className="col justify-content-start">
              <label htmlFor="teamHead" className="form-label">
                Team Head
              </label>
              <input
                type="text"
                id="teamHead"
                className="form-control"
                value={formData.teamHead || ''}
                onChange={handleChange}
              />
            </div>
            <div className="col justify-content-start">
              <label htmlFor="shiftInCharge" className="form-label">
                Shift Incharge
              </label>
              <input
                type="text"
                id="shiftInCharge"
                className="form-control"
                value={formData.shiftInCharge || ''}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col justify-content-start">
              <label htmlFor="securityStaff" className="form-label">
                Security Staff
              </label>
              <input
                type="text"
                id="securityStaff"
                className="form-control"
                value={formData.securityStaff || ''}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <label htmlFor="scheduleDate" className="form-label">
                Schedule Date
              </label>
              <input
                type="date"
                id="scheduleDate"
                className="form-control"
                value={formData.scheduleDate || ''}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <label htmlFor="scheduleTime" className="form-label">
                Schedule Time
              </label>
              <input
                type="time"
                id="scheduleTime"
                className="form-control"
                value={formData.scheduleTime || ''}
                onChange={handleChange}
              />
            </div>
          </div>
          <div
            className="d-flex mt-3 justify-content-end m-2"
            style={{ borderTop: '1px solid grey' }}
          >
            <button
              className="btn btn-success"
              type="submit"
              style={{ width: '100px', marginTop: '10px' }}
            >
              Save
            </button>
            <button
              className="btn btn-dark"
              style={{ marginLeft: '30px', width: '100px', marginTop: '10px' }}
              onClick={()=>setTrigger(false)}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null
}

export default EditViewPopup
