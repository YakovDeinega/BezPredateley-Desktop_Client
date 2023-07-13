import {Link} from 'react-router-dom';

import "./css/InfoCard.css";

import img from "../images/InfoCardImage.png";
import bandAidIcon from "../images/BandAidIcon.svg";


export function InfoCard(){
    return (
        <div className="info-card">
            <img src={img} alt='doctor standing over patient' className='info-card__image'/>
            <img src={bandAidIcon} className="info-card__icon" alt='bandaid icon'/>
            <div className="info-card__content">
                <h2 className="info-card__header">
                    Free Checkup
                </h2>
                <p className="info-card__body-text">
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing 
                    Quisque placerat Convallis 
                    felis vitae tortor augue. 
                    Velit nascetur massa in.
                </p>
                <a className="info-card__link">
                    Learn more 
                </a>
            </div>
        </div>
    ); // include Link component
}