import React, { useEffect, useState } from 'react';
import Axios from "../../Api/Axios"
import { useSelector } from 'react-redux';
import { selectTranslations } from '../../slices/languageSlices';
import img1 from '../../images/osh.jpg';
import img2 from '../../images/qozon.jpg';
import img3 from '../../images/shashlik_iz_mramornoi_govyadini-279336.webp';
import img4 from '../../images/ss.jpg'
// import img4 from '../../images/Rectangle 6 (2).png';
// import img5 from '../../images/Rectangle 6 (3).png';
// import img6 from '../../images/Rectangle 10.png';
// import img7 from '../../images/Rectangle 10 (1).png';
// import img8 from '../../images/Rectangle 10 (2).png';
import { MdRecordVoiceOver } from 'react-icons/md';
import { FiRefreshCw } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import './Main.css';

function Main() {
    const translations = useSelector(selectTranslations);
    const [name, setName] = useState([])
    const [lastname, setLastname] = useState([])
    const [number, setNumber] = useState([])
    useEffect(() => {
        const getApi = async () => {
            await Axios.get("/telegram")
                .then(res => setName(res.name))
                .catch(error => console.error(error))
        }
        getApi()
    }, [])

    const formSubmit = async (e) => {
        e.preventDefault()
        let newuser = {
            name,
            lastname,
            number
        }
        await Axios.post("/telegram", newuser)
            .then(res => console.log(res))
            .catch(error => console.log(error))

        setName("")
        setLastname("")
        setNumber("")
    }

    return (
        <div>
            <div className="card">
                <img className='background_img' src={img4} alt="" />
            </div>
            <div className="learn">
                <h1 className='h1_learn'>{translations.learn.h1_learn}</h1>
                <div className="skills">
                    {/* <div className='in_skills'> */}
                    <div className="skill">
                        <img className='img_skill' src={img1} alt="" />
                        1
                    </div>
                    <div className="skill">
                        <img className='img_skill' src={img2} alt="" />
                        2
                    </div>
                    <div className="skill">
                        <img className='img_skill' src={img3} alt="" />
                        3
                    </div>
                    {/* </div> */}
                    {/* <div className='in_skills'> */}
                    <div className="skill">
                        <img className='img_skill' src={img1} alt="" />
                        4
                    </div>
                    <div className="skill">
                        <img className='img_skill' src={img1} alt="" />
                        5
                    </div>
                    <div className="skill">
                        <img className='img_skill' src={img1} alt="" />
                        6
                    </div>
                    {/* </div> */}
                </div>
            </div>

            <div className="contact">
                <div className="letter">
                    <form action="" onSubmit={formSubmit}>
                        <div className="name">
                            <label htmlFor="name">{translations.contact.name}</label>
                            <input type="text" value={name} placeholder='Name...' onChange={(e) => setName(e.target.value)} />
                            <input type="text" value={lastname} placeholder='Lastname...' onChange={(e) => setLastname(e.target.value)} />
                        </div>
                        <div className="phone">
                            <label htmlFor="number">{translations.contact.number}</label>
                            <label htmlFor="number" className='number_inp'>
                                <p>+998</p>
                                <input type="number" name="number" id="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                            </label>
                        </div>
                        <button className="contact_btn">{translations.contact.send}</button>
                    </form>
                    <div className="text_letter">
                        <p>{translations.contact.weak}</p>
                        <p>8:00 ≻ 23:00 </p>
                    </div>
                </div>
                {/* <div className="text_contact">
                    <div className="text_con1">
                        <h3>{translations.contact.text_con}</h3>
                        <p>{translations.contact.text_con2}</p>
                    </div>
                    <div className="text_con2">
                        <h3>{translations.contact.text_con3}</h3>
                        <p>{translations.contact.text_con4}</p>
                    </div>
                    <div className="text_con3">
                        <h3>{translations.contact.text_con5}</h3>
                        <p>{translations.contact.text_con6}</p>
                    </div>
                    <div className="text_con4">
                        <h3>{translations.contact.text_con7}</h3>
                        <p>{translations.contact.text_con8}</p>
                    </div> */}
            </div>
        </div >
        // </div >
    );
}

export default Main;
