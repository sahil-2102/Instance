import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"
const Homepage = () => {
  const navigate = useNavigate('');
  return (
    <div className="h-screen w-full bg-black">
        <Navbar/>
        <div className="mt-20 max-w-[800px] w-full mx-auto text-white p-2">
          <div className="flex flex-col items-center justify-center text-center gap-4 p-6">
            <h1 className="text-3xl sm:text-8xl font-semibold">Hello Dev!</h1>
            <p className="text-xl sm:text-3xl font-semibold">Welcome to Instance. Share precious moments and make new friends!</p>
            <button
            onClick={()=>navigate('/signup')}
            className="bg-green-400 p-3 rounded-md text-black font-semibold hover:opacity-95">Get Started!</button>
          </div>
        </div>
    </div>
  )
}
export default Homepage