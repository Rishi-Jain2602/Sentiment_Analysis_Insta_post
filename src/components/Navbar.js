import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import './Styles/Navbar.css'
export default function Navbar() {
    const location = useLocation();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* <Link className="navbar-brand" to="/">Sentiment Analyis</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button> */}
                    <span className="navbar-title">Sentiment Analysis</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {location.pathname === '/video' ? (
                                <li className="nav-item mx-5">
                                    <Link className="nav-link" to="/image">Image</Link>
                                </li>
                            ) : location.pathname === '/image' ? (
                                <li className="nav-item mx-5">
                                    <Link className="nav-link" to="/video">Video</Link>
                                </li>
                            ) : null}
                        </ul>
                    </div>
                </div>
            </nav>

        </>

    )
}
