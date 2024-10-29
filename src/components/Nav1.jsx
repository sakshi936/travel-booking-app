import React from 'react';
// import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faFacebookF, faInstagram, faXTwitter  } from "@fortawesome/free-brands-svg-icons";

const Nav1 = () => {
  const socialIcons= [
    faFacebookF,faXTwitter,faInstagram,faLinkedinIn
]
  return (
    <header className="header bg-black px-5 py-2 h-25 d-none d-md-block h-48" >
        <div className=" d-flex justify-content-between align-items-center px-5 " >
          
          {/* Email Section */}
          <div className=" d-flex gap-md-3 justify-content-center align-items-center " style={{fontSize:'12px',}}>
            <img src="./assets/nav-1/Vector.png" alt="vector" width={20} height={20}/>

            <div className='d-flex  flex-column justify-content-center align-items-start '>
            <span className='text-white  '>Email:</span>
            <a  style={{ color: '#15B392',}} className=''>
              Travelbooking@gmail.com
            </a>
            </div>
          </div>

          {/* Social Icons Section */}
          <div className=" d-flex  justify-content-center gap-md-3 ">
          {
                socialIcons?.map((icon,index)=>(
                    
                <div className='border border-white d-flex justify-content-center align-items-center rounded-5' key={index} style={{width:"30px", height:"30px"}}> 
                <FontAwesomeIcon icon={icon} size='sm' color='white' />
                </div>
               
            ))}
          </div>
          

      </div>
    </header>
  );
};

export default Nav1;

