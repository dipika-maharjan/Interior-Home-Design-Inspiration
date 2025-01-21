import React from "react";
import '../../styles/BrowseIdea.css';
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
import { useNavigate } from "react-router-dom";

function BrowseIdea() {
    const navigate = useNavigate();

    const sections = [
        {
            title: "By Room",
            items: [
                { name: "Living Room", path: "/LivingSection" },
                { name: "Bed Room", path: "/BedroomSection" },
                { name: "Dining", path: "/DiningSection" },
                { name: "Kitchen", path: "/KitchenSection" },
                { name: "Office", path: "/OfficeSection" },
                { name: "Bathroom", path: "/BathroomSection" }
            ],
            images: [
                livingRoomImage, 
                bedroomImage, 
                diningImage, 
                kitchenImage, 
                officeImage, 
                bathroomImage
            ]
        },
        {
            title: "By Design",
            items: [
                { name: "Modern", path: "/ModernSection" },
                { name: "Rustic", path: "/RusticSection" },
                { name: "Bohemian", path: "/BohemianSection" },
                { name: "Minimalist", path: "/MinimalistSection" },
                { name: "Traditional", path: "/TraditionalSection" },
                { name: "Contemporary", path: "/ContemporarySection" }
            ],
            images: [
                modernImage,
                rusticImage,
                bohemianImage,
                minimalistImage,
                traditionalImage,
                contemporaryImage
            ]
        },
        {
            title: "By Themes",
            items: [
                { name: "Budget-friendly", path: "/BudgetFriendlySection" },
                { name: "Luxury", path: "/LuxurySection" }
            ],
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
                            <div 
                                key={i} 
                                className="box-item" 
                                onClick={() => navigate(item.path)} 
                            >
                                <div 
                                    className="box-image" 
                                    style={{ backgroundImage: `url(${section.images[i]})` }}
                                ></div>
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BrowseIdea;
