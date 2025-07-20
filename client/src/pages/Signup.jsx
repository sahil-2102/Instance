import SubmitButton from "../components/SubmitButton"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");
    const [load,setLoad] = useState(false);
    const navigate = useNavigate('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoad(true);
        setMessage("");
        try {
            const res = await axios.post("http://localhost:5000/api/auth/signup",{name,email,password},{withCredentials:true});
            if(res){
                setMessage(res.data.message);
            }
            setName("");
            setEmail("");
            setPassword("");
            setLoad(false);
            navigate('/');
        } catch (error) {
            setMessage(error.response?.data?.message);
            setName("");
            setEmail("");
            setPassword("");
            setLoad(false);
            return;
        }
    }

  return (
    <div className="h-screen w-full bg-black">
        <div className="h-screen max-w-sm mx-auto w-full flex flex-col items-center justify-center text-center
        
        ">
            <h1 className="text-white text-4xl mb-10 uppercase">Sign up</h1>
            <p className={`mb-6 font-semibold uppercase ${message.includes('success')? "text-green-600": "text-red-600"}`}>{message && message}</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center justify-center w-full
            ">
                <input type="text" placeholder="Enter Name"
                className="p-3 rounded-md w-full bg-black border border-gray-800 text-white" 
                value={name} onChange={e => setName(e.target.value)}
                />
                <input type="email" placeholder="Enter Email"
                className="p-3 rounded-md w-full bg-black border border-gray-800 text-white" 
                value={email} onChange={e=>setEmail(e.target.value)}
                />
                <input type="password" placeholder="Enter Password"
                className="p-3 rounded-md w-full bg-black border border-gray-800 text-white" 
                value={password} onChange={e=>setPassword(e.target.value)}
                />
                <SubmitButton load={load} disabled={load}/>
            </form>
        </div>

    </div>
  )
}
export default Signup