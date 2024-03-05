import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GenderCheck from '../components/GenderCheck'
import useSignup from '../hooks/useSignup'

function SignUp() {
    const [inputs, setInputs] = useState({
        fullName:'',
        username:'',
        password:'',
        confirmPassword: '',
        email:'',
        gender:''
    })
    const {loading,signup} = useSignup()
    const handleCheckboxChange = (gender)=>{
        setInputs({...inputs,gender})
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        await signup(inputs)
        // console.log(inputs)
    }

  return  <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
  <div className="w-full p-6 rounded-lg shadow-md bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
      <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Signup <span className="text-orange-700">ChatApp</span>
      </h1>
      <form onSubmit={handleSubmit}>
          <div className="">
              <label className='label p-2'>
                  <span className="text-white label-text">FullName</span>
              </label>
              <input value={inputs.fullName} onChange={(e)=> setInputs({...inputs,fullName:e.target.value})} type="text" placeholder='jhon joe' className='bg-transparent input input-bordered  text-orange-100 input-info w-full max-w-xs h-10' />
          </div>
          <div className="">
              <label className='label p-2'>
                  <span className="text-white label-text">UserName</span>
              </label>
              <input value={inputs.username} onChange={(e)=> setInputs({...inputs, username:e.target.value})} type="text" placeholder='jejo' className='bg-transparent input input-bordered text-orange-100 input-info w-full max-w-xs h-10' />
          </div>
          <div className="">
              <label className='label p-2'>
                  <span className="text-white label-text">Email</span>
              </label>
              <input value={inputs.email} onChange={(e)=> setInputs({...inputs, email:e.target.value})}  type="email" placeholder='jhonjoe@gmail.com' className='bg-transparent input text-orange-100 input-bordered input-info w-full max-w-xs h-10' />
          </div>
          <div className="">
              <label className="label">
                  <span className="text-white label-text">Password</span>
              </label>
              <input value={inputs.password} onChange={(e)=> setInputs({...inputs, password:e.target.value})}  type="password" placeholder='Enter Password' className='bg-transparent text-orange-100 input input-bordered input-info w-full max-w-xs h-10' />
          </div>
          <div className="">
              <label className="label">
                  <span className="text-white label-text">Confirm Password</span>
              </label>
              <input value={inputs.confirmPassword} onChange={(e)=> setInputs({...inputs, confirmPassword:e.target.value})}  type="password" placeholder='Re-Enter Password' className='bg-transparent text-orange-100 input input-bordered input-info w-full max-w-xs h-10' />
          </div>
          <GenderCheck onCheckeboxChange={handleCheckboxChange} selectedGender = {inputs.gender} />
          <Link to={'/'}>
              <p className="text-sm text-green-950 hover:underline hover:text-orange-600 mt-2 inline-block">Already have an account?</p>
          </Link>
          <div className="">
              <button className="btn btn-block btn-outline btn-info btn-sm mt-2" disabled={loading} >{loading ? <span className='loading loading-spinner'></span>: "Signup"}</button>
          </div>
      </form>
  </div>
</div>
}

export default SignUp