import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const ToggleBurger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`burger-container ${isOpen ? "open" : ""}`}>
            <button onClick={handleToggle} className="burger-btn">
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
            {isOpen && (
                <div className="menu">
                    <ul className="flex flex-col gap-12 font-roboto font-light transition-all duration-300">
                        <li
                            onClick={handleToggle}
                            className="cursor-pointer text-[#444341] hover:text-[#D2AC47] text-center"
                        >
                            Home
                        </li>
                        <li
                            onClick={handleToggle}
                            className="cursor-pointer text-[#444341] hover:text-[#D2AC47] text-center"
                        >
                            About Us
                        </li>
                        <li
                            onClick={handleToggle}
                            className="cursor-pointer text-[#444341] hover:text-[#D2AC47] text-center"
                        >
                            Product
                        </li>
                        <li
                            onClick={handleToggle}
                            className="cursor-pointer text-[#444341] hover:text-[#D2AC47] text-center"
                        >
                            Contact
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ToggleBurger;
