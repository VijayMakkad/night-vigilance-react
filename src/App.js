import './App.css'
import Sidebar from './components/sidebar/sidebar'
import Navbar from './components/navbar/navbar'
import Dashboard from './components/Dashboard/Dashboard'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="container-dashboard">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Dashboard />
        <Footer />
      </div>
    </div>
  )
}

export default App
