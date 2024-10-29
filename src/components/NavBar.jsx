import React from "react";
import { Navbar, Nav, NavDropdown, Container, NavbarBrand, NavItem } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faUser } from "@fortawesome/free-solid-svg-icons";
const CustomNavbar = () => {
return (
		<div className="container-fluid bg-white d-flex justify-content-between align-items-center m-0 p-0 ">
			{/* Logo */}
			<div className="position-relative" style={{ width: "300px", maxWidth: "320px" }}>
				<img src="./assets/NavBar/Vector2.png" alt="vector" className="img-fluid" />
				<div className="position-absolute top-0 start-0 h-100 w-100 d-flex align-items-center justify-content-start  bg-opacity-0 ms-2 m-0">
					<img src="./assets/NavBar/logo.svg" alt="logo" className="w-100" style={{ width: "144px", maxWidth: "224px" }} />
				</div>
			</div>

			{/* Nav options */}
			<FontAwesomeIcon icon={faBars} size="lg" className="text-dark d-md-none  me-4" />

      {/* Nav Items */}
			<div className="d-none d-md-flex align-items-center gap-4 me-4">
				<ul className="list-unstyled d-flex gap-4 mb-0">
					<li className="text-success fw-bold">Home</li>
					<li>Flight</li>
					<li>Hotel</li>
				</ul>
				<div className="bg-success" style={{ height: "32px", width: "2px" }}></div>
				<ul className="list-unstyled d-flex gap-4 mb-0">
					<li>
						<select className="form-select  border-0">
							<option value="en">English</option>
							<option value="es">Spanish</option>
							<option value="fr">French</option>
							<option value="hi">Hindi</option>
						</select>
					</li>
					<li>
						<select className="form-select border-0">
							<option value="USD">USD</option>
							<option value="EUR">EUR</option>
							<option value="INR">INR</option>
							<option value="JPY">JPY</option>
							{/* Add more currencies as needed */}
						</select>
					</li>
					<li className="d-flex align-items-center">
						<FontAwesomeIcon icon={faUser} className="text-secondary" />
						<select className="form-select border-0">
							<option value="login">Login</option>
							<option value="signup">Signup</option>
						</select>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default CustomNavbar;
