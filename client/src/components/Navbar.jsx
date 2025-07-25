import { useContext } from "react"
import { Link } from "react-router-dom"
import UserContext from "../context/UserContext"
import axios from "axios";

const Navbar = () => {
  const {setUser,setLogged,logged} = useContext(UserContext);
  const handleLogout = async() => {
    await axios.post('http://localhost:5000/api/auth/logout',{}, {withCredentials: true} );
    setLogged(false);
    setUser(null);
  }
  return (
    <div className="text-white w-full">
        <div className="max-w-[900px] w-full mx-auto p-3 flex items-center justify-between font-extralight uppercase text-green-600">
            <h2 className="text-xl md:text-4xl mx-6"><Link to="/">Instance</Link></h2>
            <ul className="flex items-center justify-center gap-4 text-xl md:text-4xl mx-6">
                <li>
                  {logged ? (<button onClick={()=>handleLogout()}>Log out</button>):(<Link to="/login">Log in</Link>)}
                </li>
                <li><Link to="/me">Me</Link></li>
                <li><Link to="/chat">Chat</Link></li>
            </ul>
        </div>
    </div>
  )
}
export default Navbar