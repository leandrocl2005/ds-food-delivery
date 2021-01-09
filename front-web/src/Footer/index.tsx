import './styles.css';

import { ReactComponent as Instagram } from './Instagram.svg';
import { ReactComponent as Youtube } from './Youtube.svg';
import { ReactComponent as Linkedin } from './Linkedin.svg';

function Footer() {
    return (
        <footer className='main-footer'>
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://google.com" target='_new'>
                    <Instagram />
                </a>
                <a href="https://google.com" target='_new'>
                    <Youtube />
                </a>
                <a href="https://google.com" target='_new'>
                    <Linkedin />
                </a>
            </div>
        </footer>
    )
}

export default Footer;