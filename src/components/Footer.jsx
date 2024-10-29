import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faFacebookF, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";


function Footer() {
    const socialIcons = [faFacebookF, faXTwitter, faInstagram, faLinkedinIn];
	
  return (
    <footer className="bg-dark text-white py-5 px-5 d-flex flex-column justify-content-center align-items-center">
      
        {/* Input Section */}
        <div className="row mb-4 d-none d-md-flex align-items-center">
          <div className="col-md-6 text-start">
            <h2 className="h4 font-weight-bold mb-3">We have some good news</h2>
            <p className="mb-4">Sign up for our newsletter to receive all the offers and discounts. Discounts are only valid for our newsletter subscribers.</p>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <input
              type="email"
              placeholder="Enter Your Email id"
              className="form-control rounded me-2"
              style={{ maxWidth: '250px' }}
            />
            <button className="btn btn-warning text-dark rounded">Subscribe</button>
          </div>
        </div>

        <hr className="border border-white my-4 d-none d-md-block w-100" /> 

        {/* Footer Content */}
        <div className=" d-flex flex-column flex-md-row justify-content-between w-100 ">
          {/* Logo Section */}
          <div >
            <ul className="list-unstyled">
              <li>
                <img src="./assets/NavBar/logo.svg" alt="Travel Bookings Logo" className="img-fluid" width="300" />
              </li>
              <li>
                <p className="text-white d-none d-md-block mt-2">
                  Lorem ipsum dolor sit amet consectetur. Vitae <br /> imperdiet id amet lacus risus.
                </p>
              </li>
              <li>
                <div className="d-flex gap-2 mt-3">
                  {socialIcons?.map((icon, index) => (
                    <div className="border border-white rounded-circle p-2" key={index}>
                      <FontAwesomeIcon icon={icon} size="sm" />
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>

      
      
        <div className=' d-flex d-md-none justify-content-between mt-4 gap-3'>
            {/* About Links */}
        <div >
            <h3 className="h6 font-weight-bold">About</h3>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white ">About us</a></li>
              <li><a href="#" className="text-white">Terms and conditions</a></li>
              <li><a href="#" className="text-white">Privacy and cookies policy</a></li>
              <li><a href="#" className="text-white">Contact us</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div >
            <h3 className="h6 font-weight-bold">Quick Links</h3>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Flight</a></li>
              <li><a href="#" className="text-white">Hotel</a></li>
            </ul>
          </div>
        </div>
        
          {/* About Links */}
          <div  className=' d-none d-md-block'>
            <h3 className="h6 font-weight-bold">About</h3>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white ">About us</a></li>
              <li><a href="#" className="text-white">Terms and conditions</a></li>
              <li><a href="#" className="text-white">Privacy and cookies policy</a></li>
              <li><a href="#" className="text-white">Contact us</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className=' d-none d-md-block'>
            <h3 className="h6 font-weight-bold">Quick Links</h3>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Flight</a></li>
              <li><a href="#" className="text-white">Hotel</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div >
            <ul className="list-unstyled d-none d-md-block">
              <li className="d-flex align-items-center gap-2">
                <FontAwesomeIcon icon={faPhone} size="sm" />
                <span>00965-22660160</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} size="sm" />
                <span>travellogo@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>


        {/* Footer Bottom */}
        <div className="text-center text-light mt-3">
          <small>Copyright &copy; 2023. Website Powered by</small>
        </div>
  
    </footer>
  )
}

export default Footer