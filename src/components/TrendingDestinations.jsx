import React from "react";

function TrendingDestinations() {
	const destinationsList = [
		{
			name: "Maldives",
			image: "./assets/Destinations/Maldives.png",
		},
		{
			name: "Paris",
			image: "./assets/Destinations/paris.png",
		},
		{
			name: "Bali",
			image: "./assets/Destinations/bali.png",
		},
		{
			name: "Egypt",
			image: "./assets/Destinations/egypt.png",
		},
		{
			name: "Spain",
			image: "./assets/Destinations/spain.png",
		},
	];
	return (
		<div className="h-100 my-5 px-4">
			<h1>Trending Destinations</h1>
			<div className=" d-none d-md-flex gap-3 flex-row">
				{destinationsList.map((destination, index) => (
					<div
                    key={index}
						className={`d-flex justify-content-center align-items-end position-relative rounded-3  `}
						style={{
							backgroundImage: `url(${destination.image})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
                            height: "450px",
							width: index === 0 ? "70%" : "33.33%", 
						}}
					>
						<div className="bg-opacity-75 position-absolute p-2">
							<p className="text-white">{destination.name}</p>
						</div>
					</div>
				))}
			</div>

            {/* mobile view */}

			<div className=" d-sm-flex flex-column  d-md-none ">
				{destinationsList.map((destination, index) => (
					<div
                    key={index}
						className={`d-flex justify-content-center align-items-end position-relative rounded-3  mt-3`}
						style={{
							backgroundImage: `url(${destination.image})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
                            width: '100%',
							height: index === 0 ? "190px" : "120px"
						}}
					>
						<div className="bg-opacity-75 position-absolute p-2">
							<p className="text-white">{destination.name}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default TrendingDestinations;
