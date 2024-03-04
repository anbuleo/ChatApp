import { Link } from "react-router-dom"



function Login() {
  return  <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className="w-full p-6 rounded-lg shadow-md bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Login <span className="text-orange-700">ChatApp</span>
        </h1>
        <form >
            <div className="">
                <label className='label p-2'>
                    <span className="text-white label-text">UserName</span>
                </label>
                <input type="text" placeholder='Enter UserName' className='bg-transparent input input-bordered input-info w-full max-w-xs h-10' />
            </div>
            <div className="">
                <label className="label">
                    <span className="text-white label-text">Password</span>
                </label>
                <input type="password" placeholder='Enter Password' className='bg-transparent input input-bordered input-info w-full max-w-xs h-10' />
            </div>
            <Link to={'signup'}>
                <p className="text-sm text-green-950 hover:underline hover:text-orange-600 mt-2 inline-block">{"Don't" } have an account?</p>
            </Link>
            <div className="">
                <button className="btn btn-block btn-outline btn-info btn-sm mt-2 ">Login</button>
            </div>
        </form>
    </div>
  </div>
  
}

export default Login