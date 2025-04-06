import React from 'react'
import "./About.css"
import img1 from "../../images/1.jpg"
import img2 from "../../images/2.jpg"
import img3 from "../../images/3.jpg"
import img4 from "../../images/4.jpg"
import img5 from "../../images/5.jpg"
import img6 from "../../images/6.jpg"
import img7 from "../../images/7.jpg"
import img8 from "../../images/8.jpg"
import img9 from "../../images/9.jpg"
function About() {
    return (
        <div className="About_1">
            <div className='About'>
                <div className="main_about">
                    <div className="">
                        <h1 className='first_comment'>Sohil Bo'yi Oilaviy Dam Olish Maskani</h1>
                        <a href="/bron">
                            <button>Hona Band Qilish</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="nature">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                </div>
                <div className="nature">
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                </div>
                <div className="nature">
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />
                    <img src={img9} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
