import React from 'react'
import "./Footer.css"
import { selectTranslations } from "../../slices/languageSlices"
// import img1 from '../../images/logo.png'
import { BsTelegram } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiYoutube } from "react-icons/si";
import { useSelector } from 'react-redux';

function Footer() {
    const translations = useSelector(selectTranslations);

    return (
        <div className='footer'>
            <div className="footer_main">
                <div className="logo_footer">
                    {/* <img src={img1} alt="" /> */}
                    <p>{translations.footer.served} </p>
                    <div className="icons_footer">
                        <BsTelegram />
                        <BsInstagram />
                        <SiYoutube />
                    </div>
                </div>
                <div className="nav_footer">
                    <p>{translations.header.Aboutus} </p>
                    <p>{translations.header.Courses}</p>
                    <p>{translations.header.Career}</p>
                    <p>{translations.header.Branches}</p>
                </div>
                <div className="nav_footer">
                    <p>{translations.footer.FAQ} </p>
                    <p>{translations.footer.Blog}</p>
                    <p>{translations.footer.Agreement}</p>
                    <p>{translations.footer.Settings}</p>
                </div>
                <div className="nav_footer1">
                    <p>{translations.footer.English}</p>
                    <p>{translations.footer.Russian}</p>
                    <p>DTM</p>
                </div>

            </div>
            <div className="footer_main1">
                <div className="logo_footer">
                    {/* <img src={img1} alt="" /> */}
                </div>
                <div className="mine">
                    <p>About us</p>
                    <p>Courses</p>
                    <p>Career</p>
                    <p>Branches</p>
                    <p>FAQ</p>
                    <p>Blog</p>
                    <p>User Agreement</p>
                    <p>Cookie Settings</p>
                    <p>English language</p>
                    <p>Russian language</p>
                    <p>DTM</p>
                </div>
                <hr />
                <div>
                    <p>All rights reserved. NEW OXFORD 2024.</p>
                    <div className="icons_footer">
                        <BsTelegram />
                        <BsInstagram />
                        <SiYoutube />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
