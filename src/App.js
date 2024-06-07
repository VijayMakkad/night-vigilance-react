import './App.css'
import Sidebar from './components/sidebar/sidebar'
import Navbar from './components/navbar/navbar'
import Dashboard from './components/Dashboard/Dashboard'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'

function App() {
  return (
    <>
      {/* <Login /> */}
      <div className="container-dashboard">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <Dashboard />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
