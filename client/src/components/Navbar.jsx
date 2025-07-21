import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="text-white w-full">
        <div className="max-w-[900px] w-full mx-auto p-3 flex items-center justify-between font-extrabold uppercase text-green-600">
            <h2 className="text-xl md:text-4xl mx-6"><Link to="/">Instance</Link></h2>
            <ul className="flex items-center justify-center gap-4 text-xl md:text-4xl mx-6">
                <li><Link to="/login">Login/Signup</Link></li>
                <li><Link to="/me">Me</Link></li>
            </ul>
        </div>
    </div>
  )
}
export default Navbar