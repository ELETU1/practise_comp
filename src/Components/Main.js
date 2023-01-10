import React from "react";
import Card from "./Card";
import data from "../Data";

const Main = () =>{
    return(
        <>
            <div class="jumbotron jumbotron-fluid text-center mt-3">
                <div class="container">
                    <h1 class="display-4">WELCOME TO ELETUTECH'S WEBSITE</h1>
                </div>
            </div>

            <div className="container my-5">
                <div className="row">
                    { data.map( (d, index) =>{ 
                        return (
                            <Card key={index} source={d.source} title={d.title} />
                            );
                    }) }
                </div>
            </div>
        </>
    );
};

export default Main;