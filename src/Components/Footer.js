import React from "react";

const Footer = () =>{
    return(
        <>
            <div className="container-fluid px-0">
                <div className="card text-center">
                    <div className="card-header">
                        Featured
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer text-muted">
                        &copy; ELETUTECH
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;