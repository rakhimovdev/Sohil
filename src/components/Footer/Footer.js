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
                    <h1>{translations.footer.served} </h1>
                    <div className="icons_footer">
                        <a href="https://t.me/SOHIL_Oilaviy_dam_olish_maskani"><BsTelegram /></a>
                        <a href="https://www.instagram.com/sohil_boyi_?igsh=am0wMHpzYWF2MGNi&utm_source=qr"><BsInstagram /></a>
                    </div>
                </div>
                {/* <div className="nav_footer">
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
                </div> */}

            </div>
            <div className="footer_main1">

                <div className='footer_main2'>
                    <h1>Sohil</h1>
                    <div className="">
                        <a href="https://t.me/SOHIL_Oilaviy_dam_olish_maskani"><BsTelegram /></a>
                        <a href="https://www.instagram.com/sohil_boyi_?igsh=am0wMHpzYWF2MGNi&utm_source=qr"><BsInstagram /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
