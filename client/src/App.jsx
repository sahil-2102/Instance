import { Routes, Route } from "react-router-dom"
import Signup from "./pages/Signup"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
function App() {

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
