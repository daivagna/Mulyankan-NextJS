import Image from 'next/image'
import Link from 'next/link'
import EventsCarouselItem from 'components/HomePage/EventsCarouselItem';
import carouselJson from 'data/EventsCarouselJson.json';

const EventsCarousel = () => {
    return <>

        <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <EventsCarouselItem events = {carouselJson} />
            </div>
            {/* <Link className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
          <i className="fas fa-chevron-left"></i>
        </Link>
        <Link className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
          <i className="fas fa-chevron-right"></i>
        </Link> */}
        </div>
    </>
}
export default EventsCarousel;