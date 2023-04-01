import Image from 'next/image'
import Link from 'next/link'
import EventsCarouselItem from 'components/HomePage/EventsCarouselItem'

const carouselJson = [
    {
        Topic: "Sitecore Training",
        ShortDescription: "Sitecore Training for Sitecore enthusiasts",
        LongDescription: "This space shows list of topics that are to be followed for learning sitecore. Videos, presentation and documentation is available at Sitecore Training Material",
        Duration: "2 weeks",
        Image: "Image 1",
        Date: "1 Apr, 2023",
        Time: "10 AM - 4 AM IST",
        Image_Url: "/assets/img/Sitecore_Training.png"
    },
    {
        Topic: "Sitecore CDP ",
        ShortDescription: "Sitecore CDP learning path for HZTL Internal team",
        LongDescription: "Hands-on knowledge for both Tech and Non-Tech audience",
        Duration: "2 weeks",
        Image: "Image 1",
        Date: "1 May, 2023",
        Time: "10 AM - 5 PM IST",
        Image_Url: "/assets/img/SC_CDP.jpg"
    },
    {
        Topic: "Sitecore Order Cloud ",
        ShortDescription: "Sitecore OC learning path for HZTL Internal team",
        LongDescription: "Hands-on knowledge for both Tech and Non-Tech audience",
        Duration: "2 weeks",
        Image: "Image 1",
        Date: "1 May, 2023",
        Time: "10 AM - 5 PM IST",
        Image_Url: "/assets/img/SC_OC.jpg"
    }
]

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