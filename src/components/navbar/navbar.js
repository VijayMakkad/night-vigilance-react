import './navbar.css'
import Profile from '../../assets/images/user/01.jpg'
const NaNavbar = () => {
  return (
    <nav>
      <div className="nav-content">
        <span className='parent-span'>
          <h5>
            Dashboard <br />
          </h5>
          <span className="abla">
            <p>
              <a href="#">Home</a>
            </p>/
            <p>Home</p>
          </span>
        </span>
        <div className="user">
          <a
            href="#"
            className="search-toggle iq-waves-effect bg-dark text-white"
          >
            <img src={Profile} alt="" className="user-img" />
          </a>
        </div>
      </div>
    </nav>
  )
}
export default NaNavbar