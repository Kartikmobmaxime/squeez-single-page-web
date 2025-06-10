import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
    return (
        <footer className="footer-bg text-light pt-5 mt-5">
            <div className="container position-relative" style={{ zIndex: 2 }}>
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-12">
                        <div className="d-flex flex-column flex-md-row gap-3 mb-4">
                            <img
                                src="media/app-store-button.svg"
                                alt="Download on App Store"
                                className="img-fluid"
                                style={{ maxWidth: '205px', height: '60px', objectFit: 'contain' }}
                            />
                            <img
                                src="media/google-play-btn.svg"
                                alt="Get it on Google Play"
                                className="img-fluid"
                                style={{ maxWidth: '205px', height: '59px', objectFit: 'contain' }}
                            />
                        </div>

                        <p className="mb-4" style={{ fontSize: '13px' }}>
                            © 2024 Squeez. All Rights Reserved.
                        </p>
                    </div>

                    <div className="col-lg-6 col-md-4 col-12">
                        <div className="d-flex flex-column flex-md-row justify-content-md-end gap-3">
                            <a href="#" className="text-light text-decoration-none" style={{ fontSize: '20px' }}>
                                FAQ
                            </a>
                            <span className="text-light d-none d-md-inline">|</span>
                            <a href="#" className="text-light text-decoration-none" style={{ fontSize: '20px' }}>
                                Terms of Use
                            </a>
                            <span className="text-light d-none d-md-inline">|</span>
                            <a href="#" className="text-light text-decoration-none" style={{ fontSize: '20px' }}>
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-12">
                        <div className="d-flex flex-column flex-md-row justify-content-md-center gap-3">
                            <img
                                src="media/squeez_transparent.svg"
                                alt="Squeez Background"
                                className="footer-logo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
