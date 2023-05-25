
import React from "react";
import './404.css';
import { AiOutlineWarning } from 'react-icons/ai';

const NotFoundPage = () => (
    <div className="error404">
        <div className="error404__container">
        <AiOutlineWarning  className="error_404"/>    
            
            <div className="error404__container__text">
                <h1>404</h1>
                <p>Page not found</p>
            </div>
        </div>
    </div>


);

export default NotFoundPage;


