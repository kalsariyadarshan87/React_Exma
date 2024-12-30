import { Link } from "react-router-dom";
import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/"><b>Products</b></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/studentlist">Products-List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/studentform">Products-Form</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                           
                            <>
                                <Link to="/signup" className="btn btn-light me-2">Sign Up</Link>
                                <Link to="/login" className="btn btn-light">Login</Link>
                            </>
                            

                        
                        </div>
                    </div>
                </div>
            </nav>
  )
}





