import React from 'react'
import FlightSearchCard from './FlightSearchCard'
import "./Custom.css";

function Hero() {
  return (
    <div className=" d-flex flex-column flex-md-row gap-4 justify-content-center align-items-center  py-5 px-3 h-auto bg-img" 
    >
  
    {/* Discount image */}
    <div className="text-center text-white d-flex flex-column justify-content-center align-items-center gap-4 " 
         style={{ width: 'auto', maxWidth: '500px' }}>
        <h1 className=" fw-semibold text-white text-xl ">Take a trip around the world together!</h1>
        <img src="./assets/Hero/discount.png" alt="discount" className="img-fluid discount-img"  />
    </div>

    {/* Flight search card */}
    <FlightSearchCard />
</div>
  )
}

export default Hero