
const EventsCarouselItemSlide = (props:any) => {
    return <>
        {props.events.map((event:any, index:any) => (
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to={(index)} className={(index == 0 ? 'active' : '')}></li>            
        ))}
    </>
}
export default EventsCarouselItemSlide;
