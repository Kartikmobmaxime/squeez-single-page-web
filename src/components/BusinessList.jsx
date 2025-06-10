import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';



const BusinessList = () => {

    const restaurants = [
        {
            id: 1,
            name: "Terry's Café",
            image: "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
            rating: "8.7",
            location: "75015, Paris",
            cuisine: "Italian",
            priceLevel: 4,
        },
        {
            id: 2,
            name: "Terry's Café",
            image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
            rating: "8.7",
            location: "75015, Paris",
            cuisine: "Italian",
            priceLevel: 4,
        },
        {
            id: 3,
            name: "Terry's Café",
            image: "https://w0.peakpx.com/wallpaper/459/284/HD-wallpaper-american-diner-building-restaurant-american-diner.jpg",
            rating: "8.7",
            location: "75015, Paris",
            cuisine: "Italian",
            priceLevel: 4,
        },
        {
            id: 4,
            name: "Terry's Café",
            image: "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
            rating: "8.7",
            location: "75015, Paris",
            cuisine: "Italian",
            priceLevel: 4,
        },
        {
            id: 5,
            name: "Le Jardin du Raphael",
            image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
            rating: "8.7",
            location: "75015, Paris",
            cuisine: "Italian",
            priceLevel: 4,
        },
        {
            id: 6,
            name: "L'Oiseau Blanc et Le Rooftop",
            image: "https://w0.peakpx.com/wallpaper/459/284/HD-wallpaper-american-diner-building-restaurant-american-diner.jpg",
            rating: "8.7",
            location: "75116, Paris",
            cuisine: "Italian",
            priceLevel: 4,
        },
    ];

    const reservationFields = [
        { label: "Experience", value: "Restaurant" },
        { label: "Date & Time", value: "Nov 12, Tue, 15:30" },
        { label: "Person", value: "3 person" },
        { label: "Location", value: "Paris, France" },
    ];

    return (
        <>
            <div className="hero-section bg-navy d-flex align-items-center">
                <div className="container text-center">
                    <h1 className="hero-title text-orange">
                        Explore and Choose Your Spot
                    </h1>
                </div>
            </div>

            <div className="container">
                <div className="card reservation-card">
                    <div className="card-body p-4">
                        <div className="row g-0">
                            {reservationFields.map((field, index) => (
                                <div
                                    key={index}
                                    className={`col-lg-3 col-md-6 col-12 py-2 px-4 ${index < reservationFields.length - 1 ? 'border-end' : ''
                                        }`}
                                >
                                    <div className="text-muted-gray fw-medium">
                                        {field.label}
                                    </div>
                                    <div className="text-navy fw-semibold">
                                        {field.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-5">
                <div className='d-flex justify-content-between mb-4'>
                    <div className="text-navy fs-sm">
                        <div className="text-navy fw-semibold">42 matches</div>
                        <p className='mb-0 fw-medium'>Showing based on your preferences</p>
                    </div>
                    <button class="btn-orange px-3 py-2 d-flex align-items-center align-self-center">
                        <span class="fw-semibold me-2">Filter</span>
                        <div class="">
                            <img alt="Squeez Logo" src="media/filter-icon.svg" />
                        </div>
                    </button>
                </div>
                <div className="row g-xl-5 g-4">
                    {restaurants.map((restaurant) => (
                        <div key={restaurant.id} className="col-lg-4 col-md-6 col-12">
                            <div className="card restaurant-card h-100">
                                <div className="card-body position-relative p-4">
                                    <img
                                        src={restaurant.image}
                                        alt={`${restaurant.name} image`}
                                        className="restaurant-image"
                                    />

                                    <div className="mt-3">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h5 className="text-navy fw-semibold mb-0">
                                                {restaurant.name}
                                            </h5>
                                            <div className="d-flex align-items-center gap-2">
                                                <img alt="Star Icon" src="media/img/star-icon.svg" />
                                                <span className="text-orange" style={{ fontSize: '20px' }}>
                                                    {restaurant.rating}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <div className="text-dark-gray fs-sm">
                                                    {restaurant.location}
                                                </div>
                                                <div className="text-dark-gray mt-1 fs-sm">
                                                    {restaurant.cuisine}
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                {Array.from({ length: restaurant.priceLevel }).map((_, index) => (
                                                    <i key={index} className="fas fa-dollar-sign text-dark me-1" style={{ fontSize: '16px' }}></i>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-5">
                    <button className="btn-orange px-5 py-3">
                        <span className="fw-semibold" style={{ fontSize: '21px' }}>
                            Show More
                        </span>
                    </button>
                </div>
            </div>


        </>
    );
}

export default BusinessList;