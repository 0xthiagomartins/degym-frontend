import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegram, faMedium, faDiscord } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import styles from '../styles/components/Footer.module.css';

export default function Footer() {
    return (
        <footer className="bg-dark text-light footer">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-8 max-w-7xl">
                <div className="mx-2">
                    <h4 className="text-primary text-lg font-bold mb-2">Contact Us</h4>
                    <p className="text-light mx-2">info@degym.io</p>
                    <p className="text-light mx-2">+1 (123) 456-7890</p>
                </div>
                <div className="mx-2">
                    <h4 className="text-primary text-lg font-bold mb-2">Quick Links</h4>
                    <ul>
                        <li>
                            <Link href="/" legacyBehavior><a>Home</a></Link>
                        </li>
                        <li>
                            <Link href="/token" legacyBehavior><a>Token</a></Link>
                        </li>
                        <li>
                            <Link href="/presale" legacyBehavior><a>Presale</a></Link>
                        </li>
                        <li>
                            <Link href="/voucher" legacyBehavior><a>Voucher</a></Link>
                        </li>
                        <li>
                            <Link href="/partners" legacyBehavior><a>Become a Partner</a></Link>
                        </li>
                        <li>
                            <Link href="https://degym-1.gitbook.io/docs" legacyBehavior><a>Documentation</a></Link>
                        </li>
                    </ul>
                </div>
                <div className="mx-2">
                    <h4 className="text-primary text-lg font-bold mb-2">Follow Us</h4>
                    <div className="flex space-x-4">
                        <a href="https://x.com/0xthiagomartins" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="https://t.me/de_gym" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                            <FontAwesomeIcon icon={faTelegram} size="2x" />
                        </a>
                        <a href="https://medium.com/@0xthiagomartins" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                            <FontAwesomeIcon icon={faMedium} size="2x" />
                        </a>
                        <a href="https://discord.com/invite/0xthiagomartins" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                            <FontAwesomeIcon icon={faDiscord} size="2x" />
                        </a>
                    </div>
                </div>
                <div className="mx-2">
                    <h4 className="text-light text-lg font-bold mb-2" >
                        Built on <a href="https://www.taraxa.io/" >
                            <img src="img/taraxa_logo_transparent_dark_bg.png" alt="Taraxa" style={{
                                maxWidth: "100px;",
                                display: "inline",
                                marginLeft: "2px",
                                marginTop: "-3px",
                            }} />
                        </a>
                    </h4>
                </div>
            </div>
            <div className="mt-8 text-center text-secondary">
                &copy; {new Date().getFullYear()} DeGym. All Rights Reserved.
            </div>
        </footer >
    );
}
