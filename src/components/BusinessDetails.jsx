import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { getBusinessDetails } from '../services/businessService';
import { useDispatch } from 'react-redux';
import { hideLoader, showLoader } from '../store/slice/loaderSlice';
import { APP_URLs } from '../constants/appURLs';


const BusinessDetails = () => {
  const location = useLocation();
  const dispatch = useDispatch()

  const businessId = location?.state?.businessId;
  const address = '17, rue Notre Dame des Victoires – Paris 2';
  const phone = '03-2723 1515';
  const lat = 48.8688;
  const lng = 2.3416;

  const hours = [
    'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
  ].map(day => (
    <div className="d-flex justify-content-between gap-4" key={day}>
      <span className='fw-medium'>{day}</span>
      <span>11:30 AM - 9:00 PM</span>
    </div>
  ));

  const amenitiesLeft = [
    'Offers Delivery',
    'Moderate Noise',
    'Offers Takeout',
    'Good for Kids',
    'Dogs Allowed',
    'Accepts Credit Cards',
    'Good for Groups',
    'Street Parking',
    'Biking Park'
  ];

  const amenitiesRight = [
    'Takes Reservations',
    'Outdoor Seating',
    'Wi-Fi',
    'Drive-Thru',
    'Offer Catering',
    'Alcohol',
    'Good for Groups'
  ];

  const[businessData,setBusinessData] = useState()

  useEffect(() => {
      fetchBusinessDetails()
  },[])

  const fetchBusinessDetails = async () => {
      dispatch(showLoader())
      try {
          const url = `${APP_URLs.category.getRestaurantById}`
          let response = await getBusinessDetails(url,businessId);
          dispatch(hideLoader())
          if (response?.status && response.data) {
            setBusinessData(response.data);
          }
      } catch (error) {
          dispatch(hideLoader())
      } 
  };

  const handleSqueezClick = () => {
    window.open(businessData?.domainLink,'_blank')
  }

  const handleOpenTableClick = () => {
    if (businessData?.bookingProviderType === 1 || businessData?.bookingProviderType === 2) {
      window.open(businessData?.bookingUrl, '_blank');
    } else {
      window.open(businessData?.bookingProviderLink, '_blank');
    }
  }

  const socialmediaLink = (url) => {
    window.open(url, '_blank');
  }

  const formatTime = (timeStr) => {
    if (!timeStr) return '';
    const [hour, minute] = timeStr.split(':').map(Number);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minute.toString().padStart(2, '0')} ${ampm}`;
  };

  const formatPhoneNumber = (phone) => {
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  };


  return (
    <div className="container-fluid container-xl pt-5">
      {/* Image Section */}
      <div className="row g-3 img-section">
        <div className="col-12 col-md-12">
          <img
            src={businessData?.images[0] ? businessData?.images[0] : "https://t4.ftcdn.net/jpg/02/94/26/33/360_F_294263329_1IgvqNgDbhmQNgDxkhlW433uOFuIDar4.jpg"} 
            alt="Main Dining"
            className="img-fluid w-100 details-main-img"
          />
        </div>
        {/* <div className="col-12 col-md-4">
          <img src="https://st4.depositphotos.com/8911320/40426/i/1600/depositphotos_404261588-stock-photo-render-cafe-restaurant-interior.jpg"
            className="img-fluid mb-3 w-100 details-side-img" alt="img1"
          />
          <img src="https://cdn.pixabay.com/photo/2020/08/27/07/31/restaurant-5521372_640.jpg"
            className="img-fluid w-100 details-side-img" alt="img2"
          />
        </div> */}
      </div>

      <div className="row pt-5">
        <div className="col-12 col-lg-8">
          {/* Restaurant Info */}
          <div className="res-details border-bottom pb-lg-5 mb-lg-5 pb-3 mb-3">
            <h2 className="fw-bold text-navy">{businessData?.name ?? ""}</h2>
            <span className="badge rounded-pill py-2 px-3 mb-4 border-secondary fs-sm bg-white fw-normal text-dark-gray"><i class="bi bi-check-lg pe-2"></i>Unclaimed</span>
            <p className="mb-1">
              <i className="bi bi-star text-orange pe-2"></i><span className='text-orange'>4.7</span> (2,704 Reviews)
            </p>
            <p className="mb-1 d-flex"><i class="bi bi-geo-alt text-orange pe-2"></i> {businessData?.address?.street}, {businessData?.address?.city}, {businessData?.address?.state}, {businessData?.address?.country}</p>
            <p className='mb-0 d-flex'><i className="bi bi-fork-knife text-orange pe-2"></i> New American Cuisine, Cocktails, Dancing • <b>$$$</b></p>
          </div>

          {/* Description */}
          <div className="border-bottom pb-lg-5 mb-lg-5 pb-3 mb-3">
            <h4 className="fw-bold text-navy mb-3">About the restaurant</h4>
            {/* <p className="mb-0">
              In the heart of the city, nestled between two lively alleys in the 2nd arrondissement of Paris, Cali Sisters is an American restaurant that welcomes you from the entrance with a cocktail bar with a cozy atmosphere. Further under the XXL glass roof, by candlelight, enjoy our classic American cuisine - whether it's mac & cheese, meatballs, grilled salmon or wagyu steak, or the famous New York style cheesecake and pizzookie - accompanied by vintage Californian wines, timeless cocktails and "not-so-classics".
            </p> */}
             <div
                dangerouslySetInnerHTML={{ __html: businessData?.description }}
              />
          </div>

          {/* Contact */}
          {
            (businessData?.facebookUrl || businessData?.instagramUrl || businessData?.twitterUrl) &&
            <div className="border-bottom pb-lg-5 mb-lg-5 pb-3 mb-3">
              <h4 className="fw-bold text-navy mb-3">Contact</h4>
              <div className="d-flex gap-3">
                {businessData?.facebookUrl && <i className="bi bi-facebook cusrsorPointer" onClick={() => socialmediaLink(businessData?.facebookUrl)}></i>}
                {businessData?.instagramUrl && <i className="bi bi-instagram cusrsorPointer" onClick={() => socialmediaLink(businessData?.instagramUrl)}></i>}
                {/* <i className="bi bi-youtube"></i>
                <i className="bi bi-envelope"></i> */}
                {businessData?.twitterUrl && <i className="bi bi-x cusrsorPointer" onClick={() => socialmediaLink(businessData?.twitterUrl)}></i>}
              </div>
            </div>
          }

          <div className="border-bottom pb-lg-5 mb-lg-5 pb-3 mb-3">
            <h4 className="fw-bold text-navy mb-3">Hours and Location</h4>
            <div className="rounded overflow-hidden mt-3">
              <iframe
                title="Google Map"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0, borderRadius: '1.25rem' }}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps?q=${businessData?.latitude},${businessData?.longitude}&z=15&output=embed`}
              ></iframe>
            </div>
            <div className="row mt-4 gx-5">
              <div className='col-md-6'>
                <p className="mb-2 d-flex"><i className="bi bi-geo-alt-fill text-orange pe-2"></i>{businessData?.address?.street}, {businessData?.address?.city}, {businessData?.address?.state}, {businessData?.address?.country}</p>
                <p><i className="bi bi-telephone-fill text-orange pe-2"></i>{formatPhoneNumber(businessData?.mobileNumber)}</p>
              </div>

              <div className="col-md-6">
                <div className='d-flex justify-content-md-end gap-2'>
                  <i className="bi bi-clock text-orange pe-2"></i>
                  <div>
                    {businessData?.hoursOfOperationList?.map((item,index) => (
                      <div className="gap-4 mb-3" key={item?._id}>
                        <span className='fw-bold'>{item?.day}:</span>
                        {item?.slots?.map((item,index) => (
                          <div className="d-flex justify-content-between gap-4" key={item?._id}>
                            <span className='fw-medium'>{item?.name}</span>
                            <span>{formatTime(item?.startTime)} - {formatTime(item?.endTime)}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-bottom pb-lg-5 mb-lg-5 pb-3 mb-3 amenities">
            <h4 className="fw-bold mb-3 text-navy">Amenities</h4>
            <div className="row">
              <div className="col-6">
                {amenitiesLeft.map((a, i) => (
                  <div key={i} className="mb-2 d-flex">
                    <i className="bi bi-check-circle-fill text-navy me-2"></i>{a}
                  </div>
                ))}
              </div>
              <div className="col-6">
                {amenitiesRight.map((a, i) => (
                  <div key={i} className="mb-2 d-flex">
                    <i className="bi bi-x-circle text-secondary me-2"></i>{a}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="reviews">
            <h4 className="fw-bold mb-3 text-navy">Reviews</h4>
            <div className='card rating-card flex-md-row p-md-4 border-0'>
              <div class="text-center border-md-end px-xl-5 py-3 px-3">
                <div class="rating-icons d-flex gap-3 text-center justify-content-center">
                  <i class="bi bi-star-fill text-orange"></i><i class="bi bi-star-fill text-orange"></i><i class="bi bi-star-fill text-orange"></i><i class="bi bi-star-fill text-orange"></i><i class="bi bi-star-fill text-orange"></i>
                </div>
                <div class="global-value fw-bold">4.7 <span className='text-dark-gray'>of 5</span></div>
                <p class="total-reviews text-dark-gray fs-sm">(2707 Reviews)</p>
              </div>
              <div class="chart py-3 px-xl-5 px-3 w-100">
                <div class="d-flex align-items-center gap-2 fs-sm mb-1 text-dark-gray">
                  <span class="value">5 Stars</span>
                  <div class="progress-bar"> </div>
                </div>
                <div class="d-flex align-items-center gap-2 fs-sm mb-1 text-dark-gray">
                  <span class="value">4 Stars</span>
                  <div class="progress-bar"> </div>
                </div>
                <div class="d-flex align-items-center gap-2 fs-sm mb-1 text-dark-gray">
                  <span class="value">3 Stars</span>
                  <div class="progress-bar"> </div>
                </div>
                <div class="d-flex align-items-center gap-2 fs-sm mb-1 text-dark-gray">
                  <span class="value">2 Stars</span>
                  <div class="progress-bar">
                    <div className='progress'></div>
                  </div>
                </div>
                <div class="d-flex align-items-center gap-2 fs-sm text-dark-gray">
                  <span class="value">1 Star</span>
                  <div class="progress-bar">
                    <div className='progress'></div>
                  </div>
                </div>
              </div>
            </div>

            <div className='user-review d-md-flex gap-3 mt-4'>
              <div className='user-img'>
                <img
                  src="../../media/img/user.png"
                  alt="User Image"
                />
              </div>
              <div className='pt-2'>
                <div className='user-details'>
                  <h6 className='fs-sm fw-bold mb-1'>Saleen L.</h6>
                  <p className='m-0'>San Jose, CA</p>
                </div>
                <div className='d-flex align-items-center mt-3'>

                  <div class="rating-star d-flex gap-1 me-3">
                    <i class="bi bi-star-fill text-orange"></i><i class="bi bi-star-fill text-orange"></i><i class="bi bi-star-fill text-orange"></i><i class="bi bi-star-fill text-orange"></i><i class="bi bi-star-fill text-orange"></i>
                  </div>
                  <p className='fs-xs mb-0'>November 11, 2024</p>
                </div>
                <p className='fs-sm mb-0'>This is a newer addition to the ferry/pier restaurant scene. I found it a bit difficult to find the actual front entrance, but once you find it and walk right in - it's such a vibe.<br /><br />The interior of the restaurant is modern and very captivating, with its high ceilings and unique chandelier lighting. There is also an outdoor seating area, but my friend + I remained inside to stay cozy.</p>
              </div>
            </div>

            <div className='user-review d-md-flex gap-3 mt-4'>
              <div className='user-img'>
                <img
                  src="../../media/img/user.png"
                  alt="User Image"
                />
              </div>
              <div className='pt-2'>
                <div className='user-details'>
                  <h6 className='fs-sm fw-bold mb-1'>Saleen L.</h6>
                  <p className='m-0'>San Jose, CA</p>
                </div>
                <div className='d-flex align-items-center mt-3'>

                  <div class="rating-star d-flex gap-1 me-3">
                    <i class="bi bi-star-fill text-orange"></i><i class="bi bi-star-fill text-orange"></i><i class="bi bi-star-fill text-orange"></i><i class="bi bi-star-fill text-orange"></i><i class="bi bi-star-fill text-orange"></i>
                  </div>
                  <p className='fs-xs mb-0'>November 11, 2024</p>
                </div>
                <p className='fs-sm mb-0'>This is a newer addition to the ferry/pier restaurant scene. I found it a bit difficult to find the actual front entrance, but once you find it and walk right in - it's such a vibe.<br /><br />The interior of the restaurant is modern and very captivating, with its high ceilings and unique chandelier lighting. There is also an outdoor seating area, but my friend + I remained inside to stay cozy.</p>
              </div>
            </div>

                <button className='btn px-5 py-2 border-secoundry mt-5 rounded-pill border-secondary fs-sm bg-white fw-normal text-dark-gray'>Show More</button>
          </div>
        </div>

        <div className="col-12 col-lg-4 reser-card mt-lg-0 mt-4">
          {/* Reservation Section */}
          
           
              <div className="bg-primary text-white text-center p-xxl-5 p-3 rounded mb-3 pick-card" role="button" onClick={() => handleOpenTableClick()}>
                <h2>Pick what’s available</h2>
                <p className='fw-bold'>Reservation depends on availability.</p>
                <div className="d-inline-flex justify-content-center gap-2 mb-3 flex-wrap">
                  <button className="btn btn-light btn-sm bg-white text-orange rounded-pill px-3">3:30pm</button>
                  <button className="btn btn-light btn-sm bg-white text-orange rounded-pill px-3">4:30pm</button>
                  <button className="btn btn-light btn-sm bg-white text-orange rounded-pill px-3">9:00pm</button>
                  <button className="btn btn-light btn-sm bg-white text-orange rounded-pill px-3">9:00pm</button>
                  <button className="btn btn-light btn-sm bg-white text-orange rounded-pill px-3">9:00pm</button>
                </div>
                <div>
<img src="../../media/img/open-table-logo.svg" alt="Open Table Logo" />
                </div>
                
              </div>
         

           
              <div className="just-squeez text-white text-center p-xxl-4 p-3 rounded" role="button" onClick={() => handleSqueezClick()}>
                <div className='just-squeez-inner h-100 p-xxl-4 pt-xxl-5 p-3'>
                <h2>Can’t get the time you want?</h2>
                <p className='fw-bold my-3'>See if we can “Squeez” you in.</p>
                <button className="btn btn-dark btn-sm px-4 py-2 btn-orange fs-xs">Just Squeez It!<span>®</span></button>
                <p className="m-0 small text-uppercase mt-3 d-flex align-items-center justify-content-center">Powered by<img alt="Squeez Logo" width={80} class="" src="media/SqueezLogo_White.svg"></img></p>
                </div>
              </div>
          
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
