import Image from 'next/image'
import Link from 'next/link'

const EventsCarouselItem = (props:any) => {
    return <>
        {props.events.map((event:any, index:any) => (
            < div className={"carousel-item " + (index == 0 ? 'active' : '')} key={index}>
                <div className="container">
                    <div className="row p-5">
                        <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <Image className="img-fluid" src={event.Image_Url} alt="" width="400" height="400" />
                        </div>
                        <div className="col-lg-6 mb-0 d-flex align-items-center">
                            <div className="text-align-left align-self-center">
                                <h1 className="h1 text-success">{event.Topic} </h1>
                                <h3 className="h2">{event.ShortDescription}</h3>
                                <p>
                                    {event.LongDescription}
                                </p>
                                <p>
                                   Duration :  {event.Duration}
                                </p>
                                <p>
                                   Date :  {event.Date} {event.Time}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </>
}
export default EventsCarouselItem;
