import { useContext } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
const Homepage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center relative">
      <div className="fixed top-0 w-full"><Navbar /></div>
      <div className=" max-w-[800px] w-full mx-auto text-white p-2">
          {user ? (
            <div className="flex flex-col items-center justify-center text-center gap-4 p-6">
              <h1 className="text-3xl sm:text-8xl font-semibold">
                Welcome back <span className="text-green-600">{`${user.name}`}</span>..!
              </h1>
              <p className="text-2xl sm:text-4xl font-semibold">What moment are you sharing today?</p>
             <button
                onClick={() => navigate("/feed")}
                className="bg-green-400 p-3 rounded-md text-black font-semibold mt-4 hover:opacity-95
                 flex items-center justify-center gap-4 transition-all duration-200 ease-in-out
                "
              >
                <span>Go to Feed</span>
                <span><i className="fa-solid fa-arrow-right"></i></span>
              </button>
            </div>
          
          ) : (
            <div className="flex flex-col items-center justify-center text-center gap-4 p-6">
              <h1 className="text-3xl sm:text-8xl font-semibold">
                Welcome to Instance!
              </h1>
              <p className="text-xl sm:text-3xl font-semibold">
                Share precious moments and make new friends!
              </p>
              <button
                onClick={() => navigate("/signup")}
                className="bg-green-400 p-3 rounded-md text-black font-semibold hover:opacity-95"
              >
                Get Started!
              </button>
            </div>
          )}
        
      </div>
    </div>
  );
};
export default Homepage;
