import { createSlice } from '@reduxjs/toolkit';
import uz from '../locales/uz.json';
import en from '../locales/en.json';

const getInitialLanguage = () => {
    const defaultLanguage = navigator.language;
    const savedLang = localStorage.getItem('languagePreference');
    if (savedLang) {
        return savedLang;
    } else {
        const initialLanguage = defaultLanguage.startsWith('en') ? 'en' : 'uz';
        localStorage.setItem('languagePreference', initialLanguage);
        return initialLanguage;
    }
};

const initialState = {
    currentLanguage: getInitialLanguage(),
    translations: getInitialLanguage() === 'uz' ? uz : en,
};

const languages = { uz, en };

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        switchLanguage: (state) => {
            const newLang = state.currentLanguage === 'uz' ? 'en' : 'uz';
            state.currentLanguage = newLang;
            state.translations = languages[newLang];
            localStorage.setItem('languagePreference', newLang); // Save to localStorage
        },
    },
});

export const { switchLanguage } = languageSlice.actions;

export const selectCurrentLanguage = (state) => state.language.currentLanguage;
export const selectTranslations = (state) => state.language.translations;

export default languageSlice.reducer;
