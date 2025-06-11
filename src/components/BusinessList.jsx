import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { getBusinessLists } from '../services/businessService';



const BusinessList = () => {

    const [businessData,setBusinessData] = useState([])
    const [offset, setOffset] = useState(0);
    const limit = 18;
    const [hasMore, setHasMore] = useState(true);

    const reservationFields = [
        { label: "Experience", value: "Restaurant" },
        { label: "Date & Time", value: "Nov 12, Tue, 15:30" },
        { label: "Person", value: "3 person" },
        { label: "Location", value: "Paris, France" },
    ];

    useEffect(() => {
        fetchBusinessData()
    },[])

    const fetchBusinessData = async () => {
        const query = {
            offset:offset,
            limit:limit,
            cateId:"65c608806782899b0698f069"
        }
        try {
            let response = await getBusinessLists(query);
            if (response?.status && response.data) {
                const newDocs = response.data?.docs || [];

                setBusinessData((prevData) => [...prevData, ...newDocs]);
                setOffset((prevOffset) => prevOffset + newDocs.length);
                setHasMore(response.data?.hasNextPage)

            }
        } catch (error) {
            //window.location.href = '/error.html';
        } 
    };

    return (
        <>
            <div className="hero-section bg-navy d-flex align-items-center">
                <div className="container-fluid container-xl text-center">
                    <h1 className="hero-title text-orange">
                        Explore and Choose Your Spot
                    </h1>
                </div>
            </div>

            <div className="container-fluid container-xl">
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

            <div className="container-fluid container-xl pt-5">
                <div className='d-flex justify-content-between mb-4'>
                    <div className="text-navy fs-sm">
                        <div className="text-navy fw-semibold">42 matches</div>
                        <p className='mb-0 fw-medium'>Showing based on your preferences</p>
                    </div>
                    <button class="btn-orange px-3 py-2 d-flex align-items-center align-self-center">
                        <span class="fw-semibold pe-3">Filter</span>                        
                        <img alt="Squeez Logo" src="media/filter-icon.svg" />                    
                    </button>
                </div>
                <div className="row g-xxl-5 g-4">
                    {businessData.map((restaurant) => (
                        <div key={restaurant._id} className="col-lg-4 col-md-6 col-12">
                            <div className="card restaurant-card h-100">
                                <div className="card-body position-relative p-md-4 p-3">
                                    <img
                                        src={restaurant.images[0] ? restaurant.images[0] : 'media/ic_restaurantplaceholder_dark_new.svg'}
                                        alt={`${restaurant.name} image`}
                                        className="restaurant-image"
                                    />

                                    <div className="mt-3">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h5 className="text-navy fw-semibold mb-0">
                                                {restaurant.name}
                                            </h5>
                                            {/* <div className="d-flex align-items-center gap-2">
                                                <img alt="Star Icon" className='star-icon' src="media/img/star-icon.svg" />
                                                <span className="text-orange" style={{ fontSize: '20px' }}>
                                                    {restaurant.rating}
                                                </span>
                                            </div>  */}
                                        </div>

                                        {/* <div className="d-flex justify-content-between align-items-center">
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
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {hasMore && (
                    <div className="text-center mt-5">
                        <button className="btn-orange px-5 py-3" onClick={fetchBusinessData}>
                            <span className="fw-semibold" style={{ fontSize: '21px' }}>
                                Show More
                            </span>
                        </button>
                    </div>
                )}
                
            </div>
        </>
    );
}

export default BusinessList;