import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Popup.css'
import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons'

function Popup(props) {
  const handleBackButtonClick = () => {
    // Close the child popup when the "Back" button is pressed
    props.setTrigger(false)
  }
  useEffect(() => {
    const closePopup = (e) => {
      if (e.key === 'Escape') {
        props.setTrigger(false)
      }
    }
    window.addEventListener('keydown', closePopup)
    return () => window.removeEventListener('keydown', closePopup)
  }, [props.trigger])

  return props.trigger ? (
    <div className="popup-add">
      <div className="popup-inner-add">
        <div className="row ">
          <div className="col-lg-12 d-flex heading-add">
            <h4>Add Member</h4>
            <button
              className="close-btn"
              onClick={() => {
                props.setTrigger(false)
                props.closeParent()
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div class="row mt-3">
            <div class="col justify content-start">
              <label htmlFor="Employee" className="form-label">
                Employee Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Emp. Name"
              />
            </div>
            <div class="col justify content-start">
              <label htmlFor="Employee" className="form-label">
                Employee Code
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Emp. Code"
              />
            </div>
            <div class="col justify content-start">
              <label htmlFor="Department" className="form-label">
                Department
              </label>
              <select id="location" className="form-select">
                <option>Select Department</option>
                <option>IT</option>
                <option>Finance</option>
                <option>Marketing</option>
              </select>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <label htmlFor="Employee" className="form-label">
                Designation
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Designation"
              />
            </div>
            <div class="col">
              <label htmlFor="Employee" className="form-label">
                Contact No.
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Contact No."
              />
            </div>
            <div class="col">
              <label htmlFor="Employee" className="form-label">
                Reporting Officer
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Reporting Officer"
              />
            </div>
            <div class="col mb-5">
              <label htmlFor="Employee" className="form-label">
                HOD
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="HOD"
              />
            </div>
            <hr />
          </div>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-dark"
              style={{ width: '100px', margin: '5px' }}
              onClick={handleBackButtonClick}
            >
              <FontAwesomeIcon icon={faArrowLeft} style={{color:'#ffffff'}} />
              &nbsp;
              Back
            </button>
            <button
              className="btn btn-success"
              style={{ width: '100px', margin: '5px' }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ''
  )
}

export default Popup
