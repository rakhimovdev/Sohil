import { useEffect, useState } from "react";
import uz from "../../locales/uz.json"
import en from "../../locales/en.json"
import "./style.css"
function LanguageSwitcher() {
    
    return (
        <div>
            <select value={language} onChange={(e) => { setLanguage(e.target.value) }}>
                <option>English</option>
                <option>Uzbek</option>
            </select>
            <h2>{content.aboutUs}</h2>
            <h2>{content.courses}</h2>
            <h2>{content.career}</h2>
            <h2>{content.feedback}</h2>
            <h2>{content.branches}</h2>
        </div>
    )
}

export default LanguageSwitcher