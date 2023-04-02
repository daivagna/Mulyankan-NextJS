import carouselJson from 'data/Events.json';

import EventsCarouselItem from 'components/HomePage/EventsCarouselItem';
import EventsCarouselItemSlide from './EventsCarouselItemSlide';

let SlideCount = 3; // how many slides to show max in carousel.
let carouselJsonfiltered =  carouselJson.filter(x=>x.ShowInCarousel).slice(0,SlideCount); //filter out the events to show in carousel.

const EventsCarousel = () => {
    return <>

        <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <EventsCarouselItemSlide events= {carouselJsonfiltered} />
            </ol>
            <div className="carousel-inner">
                <EventsCarouselItem events = {carouselJsonfiltered} />
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