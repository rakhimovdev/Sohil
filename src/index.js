import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import withRouter from './hooks/withRouter';
import Headermain from './header/index';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import About from './pages/Aboutus/About';
import Bron from './pages/Bron/Bron';

function _ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop>
                    <Headermain />
                    <Routes>
                        <Route path='/' element={<App />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/bron' element={<Bron />} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
