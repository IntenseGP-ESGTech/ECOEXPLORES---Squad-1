/**
 * Página Inicial (Home) da Aplicação
 * @module Home
 * @description Tela principal com elementos de navegação e interação
 * @returns {JSX.Element} Componente da página inicial
 */

import React from "react";
import { useNavigate } from "react-router-dom";

// Componentes de UI
import { ImMenu } from "react-icons/im";
import { FaPlay } from "react-icons/fa6";
import { MdEmojiPeople } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoMdReturnLeft } from "react-icons/io";

// Assets
import logo from '../assets/logo.svg';
import mundoDireita from '../assets/mundoDireita.svg';
import ods from '../assets/ods.svg';
import component from '../assets/component.svg';

// Styles
import styles from '../styles/Home.module.css';

/**
 * Componente da página inicial
 * @function Home
 * @property {function} handleReturn - Navegação para a página de apresentação
 */
export function Home() {
    const navigate = useNavigate();

    /**
     * Manipulador de navegação para a página de apresentação
     * @function handleReturn
     */
    const handleReturn = () => {
        navigate('/apresentacao');
    };

    return (
        <div className={styles.container}>
            {/* Background Elements */}
            <img src={logo} className={styles.logo} alt="Application Logo" aria-label="Application Logo" />
            <img src={mundoDireita} className={styles.mundoDireita} alt="World Illustration" aria-label="World Illustration" />
            <img src={ods} className={styles.ods} alt="Sustainable Development Goals" aria-label="SDG Icon" />
            <img src={component} className={styles.component} alt="System Components" aria-label="Components Illustration" />

            {/* Navigation Icons */}
            <div className={styles.menuIcon} role="button" aria-label="Menu">
                <ImMenu size={24} />
            </div>
            
            {/* Main Action Button */}
            <div className={styles.playIcon} role="button" aria-label="Play Content">
                <FaPlay size={24} />
            </div>
            
            {/* User Interaction Icons */}
            <div className={styles.peopleIcon} role="button" aria-label="User Profiles">
                <MdEmojiPeople size={24} />
            </div>
            
            <div className={styles.notificationIcon} role="button" aria-label="Notifications">
                <IoIosNotifications size={24} />
            </div>
            
            <div className={styles.emailIcon} role="button" aria-label="Messages">
                <MdEmail size={24} />
            </div>

            {/* Return Button */}
            <div 
                className={styles.returnButton} 
                onClick={handleReturn}
                role="button"
                aria-label="Return to presentation"
                tabIndex={0}
            >
                <IoMdReturnLeft className={styles.returnIcon} />
            </div>
        </div>
    );
}