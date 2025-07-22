import Navbar from "../components/Navbar";
import UserContext from "../context/UserContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom";
const Profile = () => {
    const {user} = useContext(UserContext);
    const navigate = useNavigate('');
  if(!user){
    navigate('/');
    return
  }
  return (
    <div className="h-screen w-full bg-black">
        <div className="max-w-[900px] w-full mx-auto"><Navbar/></div>
        <div className="max-w-[600px] w-full mx-auto text-white flex flex-col items-center justify-center pt-20">
            <h1 className="text-4xl uppercase text-green-500 font-extralight mb-10">My Profile</h1>
            <ul className="flex flex-col items-center justify-center w-full px-10">
                <li className="w-full border-b border-green-600 p-3 flex gap-2">
                    <span className="text-green-600">Email:</span>
                    <span >{user.email}</span>
                </li>
                <li className="w-full border-b border-green-600 p-3 flex gap-2">
                    <span className="text-green-600">Name:</span>
                    <span >{user.name}</span>
                </li>
            </ul>
        </div>
    </div>
  )
}
export default Profile