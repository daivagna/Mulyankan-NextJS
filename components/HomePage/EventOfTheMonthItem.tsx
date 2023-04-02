import Image from 'next/image'
import Link from 'next/link'


const EventOfTheMonthItem = (props:any) => {
    return <>
        {props.events.map((event:any, index:any) => (
            <div className="col-12 col-md-4 p-5 mt-3" key={index}>
                <Link href={"/trainings/" + event.ID}>
                    <Image className="rounded-circle img-fluid border" src={event.Image_Url} alt="" width="300" height="300" />
                </Link>
                <h5 className="text-center mt-3 mb-3"> {event.Topic}</h5>
                <h5 className="text-center mt-3 mb-3"> Trainer : {event.Trainer}</h5>
                <h5 className="text-center mt-3 mb-3"> {event.Date}: {event.Time}</h5>
                
                <p className="text-center">
                    <Link href={"/trainings/" + event.ID} className="btn btn-success">Read more</Link>                     <Link href={"/enroll?tid=" + (event.ID)} className="btn btn-success">Enroll now</Link></p>
             </div>
        ))}
    </>
}
export default EventOfTheMonthItem;