import React from "react";
import css from '../../assets/styles/style.css';
import livingRoomImage from "../../assets/images/living.jpg";
import bedroomImage from "../../assets/images/bedroom.jpg";
import diningImage from "../../assets/images/dining.jpg";
import kitchenImage from "../../assets/images/kitchen.jpg";
import officeImage from "../../assets/images/office.jpg";
import bathroomImage from "../../assets/images/bathroom.jpg";
import modernImage from "../../assets/images/modern.jpg";
import rusticImage from "../../assets/images/rustic.jpg";
import bohemianImage from "../../assets/images/bohemian.jpg";
import minimalistImage from "../../assets/images/minimalist.jpg";
import traditionalImage from "../../assets/images/traditional.jpg";
import contemporaryImage from "../../assets/images/contemporary.jpg";
import budgetFriendlyImage from "../../assets/images/budget.jpg";
import luxuryImage from "../../assets/images/luxury.jpg";

function BrowseIdea() {
    const sections = [
        { 
            title: "By Room", 
            items: ["Living Room", "Bed Room", "Dining", "Kitchen", "Office", "Bathroom"], 
            images: [livingRoomImage, bedroomImage, diningImage, kitchenImage, officeImage, bathroomImage] 
        },
        { 
            title: "By Design", 
            items: ["Modern", "Rustic", "Bohemian", "Minimalist", "Traditional", "Contemporary"], 
            images: [modernImage, rusticImage, bohemianImage, minimalistImage, traditionalImage, contemporaryImage] 
        },
        { 
            title: "By Themes", 
            items: ["Budget-friendly", "Luxury"], 
            images: [budgetFriendlyImage, luxuryImage] 
        }
    ];

    return (
        <div className="main">
            <div className="content">
                <h2>Explore Real Spaces</h2>
            </div>
            {sections.map((section, index) => (
                <div key={index} className="box">
                    <h2>Browse Ideas {section.title}</h2>
                    <div className="box-content">
                        {section.items.map((item, i) => (
                            <div key={i} className="box-item">
                                <div 
                                    className="box-image" 
                                    style={{ backgroundImage: `url(${section.images[i]})` }}
                                ></div>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BrowseIdea;
