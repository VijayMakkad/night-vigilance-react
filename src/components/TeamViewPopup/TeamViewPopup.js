import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './team.css'
import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons'

function TeamViewPopup(props) {
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
    <div className="popup-view">
      <div className="popup-inner-view">
        <div className="row">
          <div className="col-lg-12 d-flex heading-view">
            <h4>Team Member Details</h4>
            <button
              className="close-btn"
              onClick={() => {
                props.setTrigger(false)
                props.closeParent()
              }}
            >
              {' '}
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
        <div className="mt-4 p-3" style={{ border: '1px solid grey' }}>
          <div className="row ">
            <div
              className="d-flex justify-content-between"
              style={{ borderBottom: '1px solid grey' }}
            >
              <h5>Name:</h5>
              <p>Anuj Kumar Singh</p>
            </div>
          </div>
          <div className="row mt-2 ">
            <div
              className="d-flex justify-content-between"
              style={{ borderBottom: '1px solid grey' }}
            >
              <h5>Employee Code:</h5>
              <p>11101192</p>
            </div>
          </div>
          <div className="row mt-2">
            <div
              className="d-flex justify-content-between"
              style={{ borderBottom: '1px solid grey' }}
            >
              <h5>Department:</h5>
              <p>IT</p>
            </div>
          </div>
          <div className="row mt-2">
            <div
              className="d-flex justify-content-between"
              style={{ borderBottom: '1px solid grey' }}
            >
              <h5>Designation:</h5>
              <p>Manager</p>
            </div>
          </div>
          <div className="row mt-2">
            <div
              className="d-flex justify-content-between"
              style={{ borderBottom: '1px solid grey' }}
            >
              <h5>Reporting Officer:</h5>
              <p>Akash Singh</p>
            </div>
          </div>
          <div className="row mt-2 ">
            <div className="d-flex justify-content-between">
              <h5>Your HOD:</h5>
              <p>Praveen Singh</p>
            </div>
          </div>
        </div>
        <button
          className="btn btn-dark"
          style={{ width: '100px', margin: '15px', float: 'right'}}
          onClick={handleBackButtonClick}
        >
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#ffffff' }} />
          &nbsp; Back
        </button>
      </div>
    </div>
  ) : (
    ''
  )
}

export default TeamViewPopup
