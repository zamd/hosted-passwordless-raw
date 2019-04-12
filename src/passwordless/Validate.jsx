

import React, {useState} from 'react'

export default function Start(props) {
  
  const {validateOtp} = props;
  const [otp, setOtp] = useState("");

  return (
    <div>
      <input type="text" onChange={e=>setOtp(e.target.value)} />
      <input type="button" value="Validate OTP" onClick={()=>validateOtp(otp)} />
    </div>
  )
}
