import React from 'react';
import "./switch.css"
import { useDispatch, useSelector } from 'react-redux';
import {
    switchLanguage,
    selectCurrentLanguage,
} from '../slices/languageSlices';

const LanguageSwitcher = () => {
    const dispatch = useDispatch();
    const currentLanguage = useSelector(selectCurrentLanguage);

    const toggleLanguage = () => {
        dispatch(switchLanguage());
    };

    return (
        <button className='language-btn' onClick={toggleLanguage}>
            <span className='desktop-lang__btn'>
                {currentLanguage === 'uz' ? 'en' : 'uz'}
            </span>
            {/* <span className='mobile-lang__btn'>
                {currentLanguage === 'uz' ? 'en' : '🇺🇿'}
            </span> */}
        </button>
    );
};

export default LanguageSwitcher;
