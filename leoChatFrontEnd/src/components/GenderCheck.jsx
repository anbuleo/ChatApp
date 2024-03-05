import React from 'react'

function GenderCheck({onCheckeboxChange,selectedGender}) {
  return  <div className='flex '>
    <div className="form-control">
        <label className={`gap-2 cursor-pointer label ${selectedGender === "male" ? "selected": ""}`}>
            <span className="label-text text-white">Male</span>
            <input type="checkbox"  className="checkbox checkbox-info"  
              checked={selectedGender === 'male'}
              onChange={()=>onCheckeboxChange("male")}
            />
        </label>
    </div>
    <div className="form-control">
    <label className={`gap-2 cursor-pointer label ${selectedGender === "female" ? "selected": ""}`}>
            <span className="label-text text-white">Female</span>
            <input type="checkbox"  className="checkbox checkbox-info" 
               checked={selectedGender === 'female'}
               onChange={()=>onCheckeboxChange("female")}
            />
        </label>
    </div>
  </div>
  
}

export default GenderCheck