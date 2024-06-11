import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Popup.css'
import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons'

function Popup(props) {
  const [currentMember, setCurrentMember] = useState(0)
  const totalMembers = 6

  const roles = [
    'Team Head',
    'Security Staff',
    'Shift In Charge',
    'Member 1',
    'Member 2',
    'Member 3',
  ]

  const handleBackButtonClick = () => {
    if (currentMember === 0) {
      props.setTrigger(false)
    } else {
      setCurrentMember(currentMember - 1)
    }
  }

  const handleNextButtonClick = () => {
    if (currentMember < totalMembers - 1) {
      setCurrentMember(currentMember + 1)
    } else {
      // Submit all members
      props.setTrigger(false)
    }
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
        <div className="row">
          <div className="col-lg-12 d-flex heading-add">
            <h4>Add {roles[currentMember]}</h4>
            <button
              className="close-btn"
              onClick={() => {
                props.setTrigger(false)
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="row mt-3">
            <div className="col justify content-start">
              <label htmlFor={`email-${currentMember}`} className="form-label">
                {roles[currentMember]} Email
              </label>
              <input
                type="text"
                id={`email-${currentMember}`}
                className="form-control"
                placeholder="Emp@jindalsteel.com"
              />
            </div>
            <div className="col justify content-start">
              <label htmlFor={`name-${currentMember}`} className="form-label">
                {roles[currentMember]} Name
              </label>
              <input
                type="text"
                id={`name-${currentMember}`}
                className="form-control"
                placeholder="Emp. Name"
              />
            </div>
            <div className="col justify content-start">
              <label htmlFor={`code-${currentMember}`} className="form-label">
                {roles[currentMember]} Code
              </label>
              <input
                type="text"
                id={`code-${currentMember}`}
                className="form-control"
                placeholder="Emp. Code"
              />
            </div>
            <div className="col justify content-start">
              <label
                htmlFor={`department-${currentMember}`}
                className="form-label"
              >
                Department
              </label>
              <select
                id={`department-${currentMember}`}
                className="form-select"
              >
                <option>Select Department</option>
                <option>IT</option>
                <option>Finance</option>
                <option>Marketing</option>
              </select>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <label
                htmlFor={`designation-${currentMember}`}
                className="form-label"
              >
                Designation
              </label>
              <input
                type="text"
                id={`designation-${currentMember}`}
                className="form-control"
                placeholder="Designation"
              />
            </div>
            <div className="col">
              <label
                htmlFor={`contact-${currentMember}`}
                className="form-label"
              >
                Contact No.
              </label>
              <input
                type="text"
                id={`contact-${currentMember}`}
                className="form-control"
                placeholder="Contact No."
              />
            </div>
            <div className="col">
              <label
                htmlFor={`reporting-${currentMember}`}
                className="form-label"
              >
                Reporting Officer
              </label>
              <input
                type="text"
                id={`reporting-${currentMember}`}
                className="form-control"
                placeholder="Reporting Officer"
              />
            </div>
            <div className="col mb-5">
              <label htmlFor={`hod-${currentMember}`} className="form-label">
                HOD
              </label>
              <input
                type="text"
                id={`hod-${currentMember}`}
                className="form-control"
                placeholder="HOD"
              />
            </div>
            <hr />
          </div>
          <div className="d-flex justify-content-end">
            {currentMember > 0 && (
              <button
                className="btn btn-dark"
                style={{ width: '100px', margin: '5px' }}
                onClick={handleBackButtonClick}
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  style={{ color: '#ffffff' }}
                />
                &nbsp; Back
              </button>
            )}
            <button
              className="btn btn-success"
              style={{ width: '100px', margin: '5px' }}
              onClick={handleNextButtonClick}
            >
              {currentMember < totalMembers - 1 ? 'Next' : 'Submit'}
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
