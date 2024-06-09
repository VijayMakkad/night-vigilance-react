import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import UiComponent from './components/UiComponent/UiComponent'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashBoard" element={<UiComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
