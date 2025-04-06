import React from 'react'
import "./Bron.css"
import img1 from "../../images/logo.jpg"

function Bron() {
    return (
        <div className='Bron'>
            <div className="bron_main">
                <h1>Telefon Raqam:</h1>
                <h1 className='h1_bron'>
                    <span>+998 90 750 25 00</span>
                    <span>+998 33 258 04 04</span>
                </h1>
                <a
                    href="https://www.google.com/maps/place/SOHIL+DAM+OLISH+MASKANI/@40.8843433,71.4271772,97m/data=!3m1!1e3!4m6!3m5!1s0x38bb31003e3b1431:0x5b7291d7dd8578af!8m2!3d40.884468!4d71.4273907!16s%2Fg%2F11lynsrhs2?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='bron_location_link'
                >
                    📍 Manzilni xaritada ko'rish
                </a>
            </div>
            <img className='bron_img' src={img1} alt="Logo" />
        </div>
    )
}

export default Bron
