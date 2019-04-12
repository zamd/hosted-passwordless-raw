

import React, {useState} from 'react'

export default function Start(props) {
  
  const {startAuth} = props;
  const [email, setEmail] = useState("");


  return (
    <div>
      <input type="email" onChange={e=>setEmail(e.target.value)} />
      <input type="button" value="Send OTP" onClick={()=>startAuth(email)} />
    </div>
  )
}
