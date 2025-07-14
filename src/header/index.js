import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import img1 from "../images/logo.jpg"
import { useSelector } from 'react-redux';
import { selectTranslations } from "../slices/languageSlices";
import LanguageSwitcher from "./languageSwitch";
import { BsMoon } from "react-icons/bs";
// import img2 from '../images/Flags.png'
// import img3 from '../images/uz.jpg'
import { IoChevronDown } from "react-icons/io5";
import Themetoggle from "../components/themetoggle/index";
const Headermain = () => {
    const translations = useSelector(selectTranslations);

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
        document.body.classList.toggle("ovhidden");
    };

    return (
        <div>
            <nav>
                <div className="nav">
                    <div className="logo">
                        <a href="/">
                            <img src={img1} alt="" className='nav_img' />
                        </a>
                    </div>
                    <ul className='nav_ul'>
                        <li>
                            <a href="/about">Biz Haqimizda</a>
                        </li>
                        <li>
                            <a href="#">Menu</a>
                        </li>
                        <li>
                            <a href="/upload">Upload images</a>
                        </li>
                        {/* <li>
                            <a href="#">Career</a>
                        </li>
                        <li>
                            <a href="#">Feedback</a>
                        </li>
                        <li>
                            <a href="#">Branches</a>
                        </li> */}
                        {/* <LanguageSwitcher /> */}
                        <div className="d-flex align-items-center justify-content-between">
                            <Link className="navbar-brand nav_ac" to="/"></Link>
                            <div className="d-flex align-items-center">
                                <Themetoggle />
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Headermain;
