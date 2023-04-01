import Image from 'next/image'
import Link from 'next/link'


const EventOfTheMonthItem = (props) => {
    return <>
        {props.events.map((event, index) => (
           <div className="col-12 col-md-4 p-5 mt-3">
        <Link href="#">
            <Image className="rounded-circle img-fluid border" src={event.Image_Url} alt="" width="300" height="300" />
        </Link>
      <h5 className="text-center mt-3 mb-3"> {event.Topic}</h5>
      <h5 className="text-center mt-3 mb-3"> {event.Date}: {event.Time}</h5>
      <p className="text-center"><a className="btn btn-success">Register</a></p>
    </div>
        ))}
    </>
}
export default EventOfTheMonthItem;