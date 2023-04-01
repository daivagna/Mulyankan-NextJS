import { useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'

const FeaturedEventItem = (props:any) => {

    return <>
             {props.events.map((event:any, index:any) => (
            <div className="col-12 col-md-4 mb-4" key={index}>
                <div className="card h-100">
                    <Link href="pages/shop-single.php">
                        <Image src="/assets/img/feature_prod_03.jpg" className="card-img-top" alt="website template image" width={200} height={200}></Image>
                    </Link>
                    <div className="card-body">
                        {/* <ul className="list-unstyled d-flex justify-content-between">
                        <li><i className="text-warning fa fa-star"></i> <i className="text-warning fa fa-star"></i> <i className="text-warning fa fa-star"></i> <i className="text-warning fa fa-star"></i> <i className="text-warning fa fa-star"></i></li>
                        <li className="text-muted text-right">$360.00</li>
                        </ul> */}
                        <Link href="pages/shop-single.php" className="h2 text-decoration-none text-dark">Summer Addides Shoes</Link>
                        <p className="card-text">Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.</p>
                        <p className="text-muted">Reviews (74)</p>
                    </div>
                </div>
            </div>
        ))}   
    </>
}
export default FeaturedEventItem;