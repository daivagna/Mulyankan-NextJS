import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faLinkedin, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link'
import Image from 'next/image'

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
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex justify-content-between align-items-center">
                    <Link className="navbar-brand text-success logo h1 align-self-center" href="/">
                        <Image src="/assets/img/horizontallogo.png" alt="logo" width={100} height={50}/>
                        <span className="logotitle">Grads Training Portal</span>
                    </Link>
                    <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-end">
                                <li className="nav-item px-4">
                                    <Link className="nav-link" href="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item px-4">
                                    <Link className="nav-link" href="/">
                                        Trainings
                                    </Link>
                                </li>
                                <li className="nav-item px-4">
                                    <Link className="nav-link" href="/">
                                        Grads
                                    </Link>
                                </li>
                                <li className="nav-item pl-4">
                                    <Link className="nav-link" href="/">
                                        Register Now
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}