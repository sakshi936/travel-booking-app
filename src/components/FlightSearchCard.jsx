import React from "react";
import { useState } from "react";
import "./Custom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

const FlightSearchCard = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [showCalendar, setShowCalendar] = useState(false);

	const airports = [
		{ name: "Dubai International", country: "United Arab Emirates", code: "DXB" },
		{ name: "Dubrovnik", country: "Croatia", code: "DBV" },
		{ name: "Dubbo", country: "Australia", code: "DBO" },
		{ name: "Al Minhad Air Base", country: "United Arab Emirates", code: "NHD" },
		{ name: "Pardubice", country: "Czech Republic", code: "PED" },
	];
	return (
		<div className="bg-white p-4 rounded-4  shadow-lg w-auto">
			{/* Trip Type Buttons */}
			<div className="d-flex  gap-2 mb-3 justify-content-start">
				<button className="btn btn-sm teal-border ">ONE WAY</button>
				<button className="btn btn-outline-secondary btn-sm">Round Trip</button>
				<button className="btn btn-outline-secondary btn-sm">Multi-City</button>
			</div>

			{/* Flight Search Card */}
			<div className="d-flex flex-column justify-content-center">
				{/* From and To Section */}
				<div className="d-flex flex-column flex-md-row align-items-center justify-content-center  mb-3 border p-2 rounded-3">
					{/* from section */}
					<div className=" text-center  text-md-start">
						<small className="text-muted">From</small>
						<h5 onClick={() => setIsOpen(!isOpen)} className="mb-0 font-weight-bold cursor-pointer">
							Dubai (DXB)
						</h5>
						<p className="text-muted small">Dubai International Airport</p>

						{/* Dropdown for Airport List */}
						{isOpen && (
							<div className="position-absolute z-3 mt-2 bg-light rounded-3 shadow-lg dropdown-width">
								<ul className=" m-0 p-0 ">
									{airports.map((airport, index) => (
										<li
											key={index}
											className={`d-flex justify-content-between align-items-center border m-0 px-2 py-1  rounded-3 ${
												index === 0 ? "bg-teal" : "bg-light"
											} cursor-pointer`}
											onClick={() => setIsOpen(!isOpen)}
										>
											<div className="text-start">
												<p className=" mb-0  fw-medium">{airport.name}</p>
												<span className=" small text-muted">{airport.country}</span>
											</div>

											<span className=" fw-semibold">{airport.code}</span>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>

					{/* swap button */}
					<div className="px-2 py-1 rounded-circle mx-4 bg-teal">
						<FontAwesomeIcon icon={faArrowRightArrowLeft} size="lg" className="text-white" />
					</div>

					{/* To section */}
					<div className="text-center text-md-end">
						<small className="text-muted">To</small>
						<h5 onClick={() => setIsOpen(!isOpen)} className="mb-0 font-weight-bold cursor-pointer">
							Kuwait (KWI)
						</h5>
						<p className="text-muted small">Kuwait International Airport</p>
					</div>
				</div>

				{/* Departure and Return Section */}
				<div className="d-flex flex align-items-center justify-content-between mb-3 border p-2 rounded-3">
					{/* Departure */}
					<div className=" text-start text-md-left mb-2 mb-md-0">
						<small className="text-muted">Departure</small>
						<h6 className=" mb-0 font-weight-bold cursor-pointer hover-bg-teal" onClick={() => setShowCalendar(!showCalendar)}>
							23-06-2025
						</h6>
						<p className="text-muted small">Friday</p>

						{/* Calendar Dropdown */}
						{showCalendar && (
							<div className="position-absolute z-3 m-0 bg-secondary-subtle rounded-4 shadow-lg p-3 ">
								<div className="d-flex  justify-content-between  gap-4 drop-cal-width">
									{["December", "January"].map((month) => (
										<div className="calendar-container d-none d-md-block" keDecember>
											<h1 className="calendar-header">{month} 2025</h1>
											<div className="calendar-grid">
												{/* Calendar Header */}
												{["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
													<div key={day} className="calendar-day-header">
														{day}
													</div>
												))}

												{[...Array(31)].map((_, index) => (
													<button
														key={index}
														className={`btn calendar-day ${index + 1 <= 30 && index + 1 >= 25 ? "highlighted-day" : ""}`}
														onClick={() => setShowCalendar(!showCalendar)}
													>
														{index + 1}
													</button>
												))}
											</div>
										</div>
									))}

									{/* mobile view */}
									<div className="calendar-container d-block d-md-none">
											<h1 className="calendar-header">December 2025</h1>
											<div className="calendar-grid">
												{/* Calendar Header */}
												{["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
													<div key={day} className="calendar-day-header">
														{day}
													</div>
												))}

												{[...Array(31)].map((_, index) => (
													<button
														key={index}
														className={`btn calendar-day ${index + 1 <= 30 && index + 1 >= 25 ? "highlighted-day" : ""}`}
														onClick={() => setShowCalendar(!showCalendar)}
													>
														{index + 1}
													</button>
												))}
											</div>
										</div>
								</div>
							</div>
						)}
					</div>

					{/* Return */}
					<div className=" text-end text-md-right">
						<small className="text-muted">Return</small>
						<h6 onClick={() => setShowCalendar(!showCalendar)} className="mb-0 font-weight-bold cursor-pointer">
							26-06-2025
						</h6>
						<p className="text-muted small">Sunday</p>
					</div>
				</div>

				<div className="d-flex gap-2 justify-content-between">
					{[
						{ label: "Adult", subLabel: "(12+yrs)", count: "01" },
						{ label: "Child", subLabel: "(2-12yrs)", count: "00" },
						{ label: "Infant", subLabel: "(0-2yrs)", count: "00" },
					].map(({ label, subLabel, count }) => (
						<div key={label} className="d-flex border rounded-3 gap-1  gap-md-4 align-items-center p-1">
							{/* Label and Count Section */}
							<div className="d-flex align-items-center gap-2 gap-md-4 flex-grow-1">
								<div className="text-center ">
									<label className="d-block small mb-0">{label}</label>
									<p className="text-muted mb-0 text-sm">{subLabel}</p>
								</div>
								<h6 className={`mb-0 font-weight-bold ${count === "01" ? "text-dark" : "text-muted"}`}>{count}</h6>
							</div>

							<div className="d-none d-md-flex flex-column">
								<span className="border rounded-top d-block text-center bg-light">&#x25B2;</span>
								<span className="border rounded-bottom d-block text-center bg-light">&#x25BC;</span>
							</div>
						</div>
					))}
				</div>

				{/* Direct Flight Checkbox */}
				<div className="form-check my-3 text-start">
					<input type="checkbox" className="form-check-input" id="directFlight" />
					<label className="form-check-label text-muted small" htmlFor="directFlight">
						Direct flights
					</label>
				</div>

				{/* Search Button */}
				<div className="text-center mx-4 ">
					<button className="btn p-3 bg-teal w-100">Search Flight</button>
				</div>
			</div>
		</div>
	);
};

export default FlightSearchCard;
