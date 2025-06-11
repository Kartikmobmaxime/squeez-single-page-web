import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
    return (
        <footer className="footer-bg text-light mt-5">
            <div className="container-fluid container-xl position-relative" style={{ zIndex: 2 }}>
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-6 col-12 text-sm-start text-center">
                        <div className="d-flex flex-column flex-md-row gap-3 mb-4">
                            <a href="#">
                            <img
                                src="media/app-store-button.svg"
                                alt="Download on App Store"
                                className="img-fluid"
                                
                            />
                            </a>
                            <a href="#">
                            <img
                                src="media/google-play-btn.svg"
                                alt="Get it on Google Play"
                                className="img-fluid"
                                
                            />
                            </a>
                        </div>

                        <p className="mb-4" style={{ fontSize: '13px' }}>
                            © 2024 Squeez. All Rights Reserved.
                        </p>
                    </div>

                    <div className="col-lg-6 col-md-4 col-sm-6 col-12 text-sm-end text-center">
                        <div className="d-flex flex-column flex-lg-row justify-content-lg-end gap-3 text-sm-end text-center">
                            <a href="#" className="text-light text-decoration-none fs-sm">
                                FAQ
                            </a>
                            <span className="text-light d-none d-lg-inline">|</span>
                            <a href="#" className="text-light text-decoration-none fs-sm">
                                Terms of Use
                            </a>
                            <span className="text-light d-none d-lg-inline">|</span>
                            <a href="#" className="text-light text-decoration-none fs-sm">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                  
                </div>
                  <img
                                src="media/squeez_transparent.svg"
                                alt="Squeez Background"
                                className="footer-logo w-100 mt-4"
                            />
            </div>
        </footer>
    );
}
