import React from 'react'

function GenderCheck() {
  return  <div className='flex '>
    <div className="form-control">
        <label className="gap-2 cursor-pointer label">
            <span className="label-text text-white">Male</span>
            <input type="checkbox"  className="checkbox checkbox-info" />
        </label>
    </div>
    <div className="form-control">
    <label className="gap-2 cursor-pointer label">
            <span className="label-text text-white">Female</span>
            <input type="checkbox"  className="checkbox checkbox-info" />
        </label>
    </div>
  </div>
  
}

export default GenderCheck