import React from "react";
import styles from './style.module.scss';
import FacebookIcon from '/public/icons/icon-facebook.svg';
import TwitterIcon from '/public/icons/icon-twitter.svg';
import InstagramIcon from '/public/icons/icon-instagram.svg';

const socials = [
    {
        name: 'facebook',
        url: '#',
        icon: <FacebookIcon />
    },
    {
        name: 'twitter',
        url: '#',
        icon: <TwitterIcon />
    },
    {
        name: 'instagram',
        url: '#',
        icon: <InstagramIcon />
    }
];

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.socialContainer}>
                {socials?.map(({name, url, icon}) => (
                    <li className={styles.socialItem}
                        key={name}
                    >
                        <a href={url}
                           target={'_blank'}
                           aria-label={name}
                        >
                            {icon}
                        </a>
                    </li>
                ))}
            </ul>
            <p className={styles.copyright}>
                © Copyright Ping. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
