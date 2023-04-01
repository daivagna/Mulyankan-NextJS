import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faLinkedin, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import carouselJson from 'data/EventsCarouselJson.json';

export default function Footer() {
    return (
        <footer className="bg-dark" id="tempaltemo_footer">
            <div className="container">
                <div className="row">

                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-success border-bottom pb-3 border-light logo">
                            <Link className="text-success" href="/">
                                <Image src="/assets/img/horizontallogowhite.png" alt="logo" width={80} height={30}/>
                            </Link>
                        </h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li>
                                <i className="fas fa-map-marker-alt fa-fw"></i>
                                Vadodara, India
                            </li>
                            <li>
                                <i className="fa fa-phone fa-fw"></i>
                                <Link className="text-decoration-none" href="tel:+91-265-232-3272">+91-265-232-3272</Link>
                            </li>
                            <li>
                                <i className="fa fa-envelope fa-fw"></i>
                                <Link className="text-decoration-none" href="mailto:BDQ@horizontal.com">BDQ@horizontal.com</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">Products</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <TrainingLinkItem events = {carouselJson} />
                        </ul>
                    </div>

                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li>
                                <Link className="text-decoration-none" href="/">Home</Link>
                            </li>
                            <li>
                                <Link className="text-decoration-none" href="/">Trainings</Link>
                            </li>
                            <li>
                                <Link className="text-decoration-none" href="/">Grads</Link>
                            </li>
                            <li>
                                <Link className="text-decoration-none" href="/">Register Now</Link>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="row text-light mb-4">
                    <div className="col-12 mb-3">
                        <div className="w-100 my-3 border-top border-light"></div>
                    </div>
                    <div className="col-auto me-auto">
                        <ul className="list-inline text-left footer-icons">
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <Link className="text-light text-decoration-none" href="https://www.facebook.com/Horizontalinc/" target="_blank" rel="sponsored">
                                    <FontAwesomeIcon icon={faFacebook}/>
                                </Link>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <Link className="text-light text-decoration-none" href="https://www.instagram.com/hztldigital/" target="_blank" rel="sponsored">
                                    <FontAwesomeIcon icon={faInstagram}/>
                                </Link>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <Link className="text-light text-decoration-none" href="https://twitter.com/hztldigital?lang=en" target="_blank" rel="sponsored">
                                    <FontAwesomeIcon icon={faTwitter}/>
                                </Link>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <Link className="text-light text-decoration-none" href="https://www.linkedin.com/company/30574460/" target="_blank" rel="sponsored">
                                    <FontAwesomeIcon icon={faLinkedin}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="w-100 bg-black py-3">
                <div className="container">
                    <div className="row pt-2">
                        <div className="col-12">
                            <p className="text-left text-light">
                                &copy; 2023 Horizontal Digital 2023 - Legal
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}

const TrainingLinkItem = (props:any) => {
    return (
        <>
            {props.events.map((event:any, index:any) => (
            <><li><a className="text-decoration-none" href="/">{event.Topic}</a></li></>
            ))}
        </>
    );
}