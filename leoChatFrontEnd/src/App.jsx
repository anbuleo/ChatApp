import Login from "./Pages/Login"
import { BrowserRouter,Navigate,Route,Routes } from "react-router-dom"
import SignUp from "./Pages/SignUp"
import Home from "./Pages/Home"
import {Toaster} from 'react-hot-toast'
import { AuthContextProvider, useAuthContext } from "./context/AuthContext"


function App() {
  const {authUser} = useAuthContext()

  return <div className="p-4 h-screen flex items-center justify-center">

    <BrowserRouter>
    <Routes>
      
      <Route path={'/login'} element={authUser ? <Navigate to={'/'} /> : <Login />} />
      <Route path={'/signup'} element={authUser ? <Navigate to={'/'} /> : <SignUp />} />
      <Route path={'/'} element={authUser ? <Home /> :<Navigate to={'/login'} /> } />
      
    </Routes>
    <Toaster/>
    </BrowserRouter>
    
  </div>
}

export default App
