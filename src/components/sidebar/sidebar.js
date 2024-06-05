import './sidebar.css'
import Jindal from '../../assets/images/jindal-logo-revised-2@2x.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faUsers } from '@fortawesome/free-solid-svg-icons'
import { RiHome4Line } from 'react-icons/ri'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Jindal} alt="Logo" />
      </div>
      <div className="options">
        <div className="content">
          <ul id="iq-sidebar-toggle" className="iq-menu text-white">
            <li className="active">
              <a
                href="#dashboard"
                className="iq-waves-effect"
                aria-expanded="false"
              >
                <RiHome4Line />
                <span style={{marginLeft:'10px',fontSize:'18px'}}>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="iq-waves-effect">
                <FontAwesomeIcon icon={faFile} />
                <span style={{marginLeft:'10px',fontSize:'18px'}}>Report</span>
              </a>
            </li>
            <li>
              <a href="#" className="iq-waves-effect">
                <FontAwesomeIcon icon={faUsers} />
                <span style={{marginLeft:'10px',fontSize:'18px'}}>Team</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
