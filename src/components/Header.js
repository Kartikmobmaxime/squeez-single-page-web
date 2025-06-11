import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-navy py-3">
            <div className="container-fluid container-xl">
                <a className="navbar-brand" href="#">
                    <img
                        src="media/SqueezLogo_White.svg"
                        alt="Squeez Logo"
                        height="51"
                        className="d-inline-block align-text-top"
                    />
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    style={{ border: 'none', boxShadow: 'none' }}
                >
                   <img
                        src="media/menus.svg"
                        alt="Squeez Logo"
                        style={{ width: '31px', height: '31px' }}
                    />
                    {/* <i className="fas fa-bars text-light"></i> */}
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto text-center">
                        <li className="nav-item me-lg-5">
                            <a className="nav-link text-light" href="#" style={{ fontSize: '18px' }}>
                                About Squeez
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#" style={{ fontSize: '18px' }}>
                                Squeez for Business
                            </a>
                        </li>
                    </ul>

                    <button className="btn-orange px-3 py-2 d-flex align-items-center mx-auto mx-lg-0 mt-lg-0 mt-2">
                        <span className="pe-3 fw-normal" style={{ fontSize: '18px' }}>Log In</span>
                        <div className="bg-white rounded-circle d-flex align-items-center justify-content-center"
                            style={{ width: '31px', height: '31px' }}>
                                 <img
                                    src="media/user-icon.svg"
                                    alt="Squeez Logo"
                                />
                            {/* <i className="fas fa-user text-dark"></i> */}
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
}
