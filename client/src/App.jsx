import { Routes, Route } from "react-router-dom"
import Signup from "./pages/Signup"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
function App() {

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/me" element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default App
