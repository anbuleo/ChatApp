import Login from "./Pages/Login"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import SignUp from "./Pages/SignUp"
import Home from "./Pages/Home"


function App() {
 

  return <div className="p-4 h-screen flex items-center justify-center">

    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Login />} />
      <Route path={'/signup'} element={<SignUp />} />
      <Route path={'/home'} element={<Home />} />

    </Routes>
    </BrowserRouter>
    
  </div>
}

export default App
