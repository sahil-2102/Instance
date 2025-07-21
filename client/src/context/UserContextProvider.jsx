import { useEffect, useState } from "react";
import UserContext from "./UserContext";
import axios from "axios";
const UserContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
      const res = await axios.get('http://localhost:5000/api/user/me', {withCredentials:true});
      if(res.data){
        setLogged(true);
        setUser({
          id: res.data.id,
          name: res.data.name,
          email: res.data.email
        });
      }else{
        setLogged(false);
      }
    } catch (error) {
      setLogged(false);

    } finally {
      setLoading(false);
    }
    }
    fetchUser();
  },[])
  if(loading) return <div>Loading...</div>
  return (
    <UserContext.Provider value={{user,setUser, setLogged, logged}}>
      {children}
    </UserContext.Provider>
  )
}
export default UserContextProvider