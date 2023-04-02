import Image from 'next/image'
import Link from 'next/link'

const FeaturedEventItem = (props:any) => {
    const {Date, Image_Url,ShortDescription, Topic} = props.event;
    return <>
        <div className="card h-100">
            <Link href="pages/shop-single.php">
                <Image src={Image_Url} className="card-img-top" alt="website template image" width={200} height={200}></Image>
            </Link>
            <div className="card-body">
                <Link href="#" className="h2 text-decoration-none text-dark">{Topic}</Link>
                <p className="card-text">{ShortDescription}</p>
                <p className="text-muted">{Date}</p>
            </div>
        </div>
    </>
}
export default FeaturedEventItem;