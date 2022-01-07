import React from 'react';
import styles from './style.module.scss';
import EmailForm from "../EmailForm";

const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
            <h1 className={styles.title}>
                We are launching <strong>soon!</strong>
            </h1>
            <p className={styles.description}>
                Subscribe and get notified
            </p>
            <EmailForm/>
            <img className={styles.dashboardImage}
                 src={'/img/illustration-dashboard.png'}
                 alt={''}
            />
        </div>
    );
};

export default HeroSection;
