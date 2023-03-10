import React from "react";
import  "./Cards.css"
import DOM from "react-dom";

function Cards() {
    return (

        <div className="wrapper">

            <div className="card__body">
                <img src="" alt="card-img"/>
                <h2 className="card__title">  </h2>

                <p className="card__description"> </p>
            </div>
            <button className="card__btn"> Read more...</button>

        </div>
    )
}

DOM.render(<Cards />, 
document.getElementById("")
)
export default Cards;

