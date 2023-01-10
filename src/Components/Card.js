import React from "react";

const Card = (props) =>{
    return (
        <>
            <div className="col-lg-3 mt-3">
                <div className="card" >
                    <img className="card-img-top" src={props.source} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Know More ...</a>
                        </div>
                </div>                    
            </div>
        </>
    );
};

export default Card;