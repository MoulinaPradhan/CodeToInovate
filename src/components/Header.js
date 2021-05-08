import React from 'react'
import Typewriter from 'typewriter-effect';
const Header = () => {
    return (
        <div>
    <h1 className="heading" style={{color:"white"}}>
       Translate from
     <Typewriter
     options={{
     strings: ['Speach to Text..','Text to Speach..'],
    autoStart: true,
    loop: true,
  }}
/>
</h1> 
        </div>
    )
}

export default Header
