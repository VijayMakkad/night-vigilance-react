import React, { useEffect, useRef } from 'react'
import './teamDashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function TeamView(props) {
  const popupRef = useRef(null)

  useEffect(() => {
    const closePopup = (e) => {
      if (e.key === 'Escape') {
        props.setTrigger(false)
      }
    }
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        props.setTrigger(false)
      }
    }

    if (props.trigger) {
      window.addEventListener('keydown', closePopup)
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      window.removeEventListener('keydown', closePopup)
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      window.removeEventListener('keydown', closePopup)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [props.trigger, props.setTrigger])

  return props.trigger ? (
    <div className="popup-team">
      <div className="popup-inner-team" ref={popupRef}>
        <div className="row heading-team">
          <div className="col-lg-12 d-flex justify-content-between align-items-center">
            <h4>Team Member List</h4>
            <button
              className="close-btn"
              onClick={() => {
                props.setTrigger(false)
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
        <div
          className="row d-flex justify-content-between mt-3 py-2"
          style={{ borderTop: '1px solid grey', borderBottom: '1px solid' }}
        >
          <div className="col">
            <p>Sr. No.</p>
          </div>
          <div className="col">
            <p>Location</p>
          </div>
          <div className="col">
            <p>Team Head</p>
          </div>
          <div className="col">
            <p>Shift Incharge</p>
          </div>
          <div className="col">
            <p>Security Staff</p>
          </div>
          <div className="col">
            <p>Schedule Date</p>
          </div>
          <div className="col">
            <p>Schedule Time</p>
          </div>
        </div>
        <div
          className="row d-flex justify-content-between py-2"
          style={{ borderBottom: '1px solid grey' }}
        >
          <div className="col">
            <p>{props.member.id}</p>
          </div>
          <div className="col">
            <p>{props.member.location}</p>
          </div>
          <div className="col">
            <p>{props.member.teamHead}</p>
          </div>
          <div className="col">
            <p>{props.member.shiftInCharge}</p>
          </div>
          <div className="col">
            <p>{props.member.securityStaff}</p>
          </div>
          <div className="col">
            <p>{props.member.scheduleDate}</p>
          </div>
          <div className="col">
            <p>{props.member.scheduleTime}</p>
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export default TeamView
