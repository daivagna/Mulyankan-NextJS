import Image from "next/image";
import Link from "next/link";
const GradCards = (props: any) => {
    return props.grads.map((grad: any, index: any) => (
        <div className="col-md-4" key={index}>
            <div className="card mb-4 product-wap rounded-0">
                <Link
                    href={"/grads/" + grad.id}
                >
                    <div className="card rounded-0">
                        <Image
                            src="/assets/img/placeholder_image.png"
                            alt="grad1"
                            className="card-img rounded-0 img-fluid"
                            width={500}
                            height={500}
                        />

                        {/* <img className="card-img rounded-0 img-fluid" src="assets/img/shop_01.jpg"> */}
                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                            <ul className="list-unstyled">
                                <li>
                                    {/* <a
                className="btn btn-success text-white"
                href="shop-single.html"
              >
                <i className="far fa-heart"></i>
              </a> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </Link>

                <div className="card-body">
                    <p className="mb-0">{grad.enteredName}</p>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                        <li>{grad.enteredQualification}</li>
                    </ul>
                    <Link href={"mailto:" + grad.enteredEmail}>{grad.enteredEmail}</Link>
                    <p className="mb-0">{grad.enteredInterestedin}</p>
                </div>
            </div>
        </div>
    ));
};
export default GradCards;