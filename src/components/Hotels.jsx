import React from "react";

function Hotels() {
	const hotels = [
		{
			image: "./assets/Hotels/img1.png",
		},
		{
			image: "./assets/Hotels/img2.png",
		},
		{
			image: "./assets/Hotels/img3.png",
		},
		{
			image: "./assets/Hotels/img4.png",
		},
	];
	return (
		<div className="h-100 my-5 px-4">
			<h2>Recommended Best Hotels</h2>
			<div className="d-flex flex-column flex-md-row gap-3  rounded-4">
				{hotels.map((hotel, index) => (
					<div key={index} className={` rounded-4  `}>
						<img src={hotel.image} key={index}  style={{
                            width: '100%',
                            height: '300px'
                        }}/>
					</div>
				))}
			</div>

	
		</div>
	);
}

export default Hotels;
