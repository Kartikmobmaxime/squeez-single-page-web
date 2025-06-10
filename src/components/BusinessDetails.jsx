import React from 'react';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';


const BusinessDetails = () => {

  const address = '17, rue Notre Dame des Victoires – Paris 2';
  const phone = '03-2723 1515';
  const lat = 48.8688;
  const lng = 2.3416;

  const hours = [
    'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
  ].map(day => (
    <div className="d-flex justify-content-between" key={day}>
      <span>{day}</span>
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

  return (
    <div className="container py-4">
      {/* Image Section */}
      <div className="row g-3">
        <div className="col-12 col-md-8">
          <img
            src="https://t4.ftcdn.net/jpg/02/94/26/33/360_F_294263329_1IgvqNgDbhmQNgDxkhlW433uOFuIDar4.jpg"
            alt="Main Dining"
            className="img-fluid rounded w-100"
            style={{ height: '480px', objectFit: 'cover' }}

          />
        </div>
        <div className="col-12 col-md-4">
          <img src="https://st4.depositphotos.com/8911320/40426/i/1600/depositphotos_404261588-stock-photo-render-cafe-restaurant-interior.jpg"
            className="img-fluid rounded mb-2 w-100" alt="img1"
            style={{ height: '235px', objectFit: 'cover' }} />
          <img src="https://cdn.pixabay.com/photo/2020/08/27/07/31/restaurant-5521372_640.jpg"
            className="img-fluid rounded mb-2 w-100" alt="img2"
            style={{ height: '235px', objectFit: 'cover' }} />
        </div>
      </div>

      <div className="row g-3">
        <div className="col-12 col-md-8">
          {/* Restaurant Info */}
          <div className="mt-4">
            <h2 className="fw-bold">Cali Sisters</h2>
            <span className="badge bg-secondary me-2 rounded-pill p-2 mb-4 border-secondary"><i class="bi bi-check-lg"></i> Unclaimed</span>
            <p className="fw-semibold mb-1">
              <i class="bi bi-star text-danger"></i> 4.7 (2,704 Reviews)
            </p>
            <p className="mb-1"><i class="bi bi-geo-alt text-danger"></i> 17, rue Notre Dame des Victoires – Paris 2</p>
            <p><i class="bi bi-fork-knife text-danger"></i> New American Cuisine, Cocktails, Dancing • <b>$$$</b></p>
          </div>

          {/* Description */}
          <div className="mt-5">
            <h5 className="fw-bold">About the restaurant</h5>
            <p className="text-muted">
              In the heart of the city, nestled between two lively alleys in the 2nd arrondissement of Paris, Cali Sisters is an American restaurant that welcomes you from the entrance with a cocktail bar with a cozy atmosphere. Further under the XXL glass roof, by candlelight, enjoy our classic American cuisine - whether it's mac & cheese, meatballs, grilled salmon or wagyu steak, or the famous New York style cheesecake and pizzookie - accompanied by vintage Californian wines, timeless cocktails and "not-so-classics".
            </p>
          </div>

          {/* Contact */}
          <div className="mt-4">
            <h5 className="fw-bold">Contact</h5>
            <div className="d-flex gap-3">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-envelope"></i>
              <i className="bi bi-x"></i>
            </div>
          </div>

          <div className="mt-4">
            <h5 className="fw-bold">Hours and Location</h5>
            <div className="rounded overflow-hidden mt-3">
              <iframe
                title="Google Map"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
              ></iframe>
            </div>
            <div className="mt-3">
              <p className="mb-1"><i className="bi bi-geo-alt-fill text-danger me-2"></i>{address}</p>
              <p><i className="bi bi-telephone-fill text-primary me-2"></i>{phone}</p>
              <div className="p-2">
                {hours}
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h5 className="fw-bold mb-3">Amenities</h5>
            <div className="row">
              <div className="col-6">
                {amenitiesLeft.map((a, i) => (
                  <div key={i} className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>{a}
                  </div>
                ))}
              </div>
              <div className="col-6">
                {amenitiesRight.map((a, i) => (
                  <div key={i} className="mb-2">
                    <i className="bi bi-x-circle text-secondary me-2"></i>{a}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          {/* Reservation Section */}
          <div className="row g-3 mt-4">
            <div className="col-md-12">
              <div className="bg-primary text-white text-center p-4 rounded">
                <h5>Pick what’s available</h5>
                <p>Reservation depends on availability.</p>
                <div className="d-flex justify-content-center gap-2">
                  <button className="btn btn-light btn-sm">3:30pm</button>
                  <button className="btn btn-light btn-sm">4:30pm</button>
                  <button className="btn btn-light btn-sm">9:00pm</button>
                </div>
                <p className="mt-2 small">Powered by OpenTable</p>
              </div>
            </div>

            <div className="col-md-12">
              <div className="bg-warning text-dark text-center p-4 rounded">
                <h6>Can’t get the time you want?</h6>
                <p>See if we can “Squeeze” you in.</p>
                <button className="btn btn-dark btn-sm">Just Squeeze It!</button>
                <p className="mt-2 small">Powered by Squeeze</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
