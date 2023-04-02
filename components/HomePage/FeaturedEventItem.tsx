import Image from 'next/image'
import Link from 'next/link'

const FeaturedEventItem = (props:any) => {
    const {Date, Image_Url,ShortDescription, Topic, ID} = props.event;
    return <>
        <div className="card h-100">
            <Link href={"/trainings/"+ ID}>
                <Image src={Image_Url} className="card-img-top" alt="website template image" width={200} height={200}></Image>
            </Link>
            <div className="card-body">
                <Link href={"/trainings/" + ID} className="h2 text-decoration-none text-dark">{Topic}</Link>
                <p className="card-text">{ShortDescription}</p>
                <p className="text-muted">{Date}</p>
            </div>
        </div>
    </>
}
export default FeaturedEventItem;