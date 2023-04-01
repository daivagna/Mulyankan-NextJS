import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {fab, faFacebook, faLinkedin, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
                <div className="container text-light">
                    <div className="w-100 d-flex justify-content-between">
                        <div>
                            <i className="fa fa-envelope mx-2"></i>
                            <Link className="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">BDQ@horizontal.com</Link>
                            <i className="fa fa-phone mx-2"></i>
                            <Link className="navbar-sm-brand text-light text-decoration-none" href="tel:+91-265-232-3272">+91-265-232-3272</Link>
                        </div>
                        <div>
                            <Link className="text-light" href="https://www.facebook.com/Horizontalinc/" target="_blank" rel="sponsored">
                                <FontAwesomeIcon icon={faFacebook} className="mx-2"/>
                            </Link>
                            <Link className="text-light" href="https://www.instagram.com/hztldigital/" target="_blank">
                                <FontAwesomeIcon icon={faInstagram} className="mx-2"/>
                            </Link>
                            <Link className="text-light" href="https://twitter.com/hztldigital?lang=en" target="_blank">
                                <FontAwesomeIcon icon={faTwitter} className="mx-2"/>
                            </Link>
                            <Link className="text-light" href="https://www.linkedin.com/company/30574460/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} className="mx-2"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>  
            <nav class="navbar navbar-expand-lg navbar-light shadow">
                <div class="container d-flex justify-content-between align-items-center">
                    <Link class="navbar-brand text-success logo h1 align-self-center" href="/">
                        Zay
                    </Link>
                    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                        <div class="flex-fill">
                            <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="index.html">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="about.html">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="shop.html">Shop</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}