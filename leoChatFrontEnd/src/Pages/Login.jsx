import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import useLogin from "../hooks/useLogin"



function Login() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const {loading, login} = useLogin()
    let navigate = useNavigate()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        await login(username,password)
    }

  return  <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className="w-full p-6 rounded-lg shadow-md bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Login <span className="text-orange-700">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
            <div className="">
                <label className='label p-2'>
                    <span className="text-white label-text">UserName</span>
                </label>
                <input value={username}  onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='Enter UserName' className='bg-transparent input input-bordered text-orange-100 input-info w-full max-w-xs h-10' />
            </div>
            <div className="">
                <label className="label">
                    <span className="text-white label-text">Password</span>
                </label>
                <input value={password}  onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter Password' className='bg-transparent input input-bordered text-orange-100 input-info w-full max-w-xs h-10' />
            </div>
            <div onClick={()=>navigate('/signup')}>
                <p className="text-sm text-green-950 hover:underline hover:text-orange-600 mt-2 inline-block">{"Don't" } have an account?</p>
            </div>
            <div className="">
                <button className="btn btn-block btn-outline btn-info btn-sm mt-2  " disabled={loading} >{loading ? (<span className=" text-orange-100 loading loading-spinner"></span>): "Login" }</button>
            </div>
        </form>
    </div>
  </div>
  
}

export default Login