import "../../App.css";
import Sidebar from "../sidebar/sidebar";
import Navbar from "../navbar/navbar";
import Dashboard from "../Dashboard/Dashboard";
import Footer from "../Footer/Footer";

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
  );
}

export default App;
