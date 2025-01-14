import React from "react";
import '../../assets/styles/style.css';
import consultImage from '../../assets/images/consultation.jpg';

function Consultation(){
    return(
        <div className="consult">
        <p>Happy Clients, Beautiful Designs</p>
        <div className="consultation">
            <div 
                className="consult-img" 
                style={{ backgroundImage: `url(${consultImage})` }}
                ></div>
            <div className="consult-text">
            <p>"Inspiration for Every Corner of Your Home"</p>
            <button>SCHEDULE A CONSULTATION</button>
            </div>
        </div>
        </div>
    );
}
export default Consultation;
