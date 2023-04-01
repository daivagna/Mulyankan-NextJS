import Image from "next/image";
import Link from "next/link";
const GradCards = (props: any) => {
  return props.grads.map((grad: any, index: any) => (
    <div className="col-md-4" key={index}>
      <div className="card mb-4 product-wap rounded-0">
        <div className="card rounded-0">
          <Image
            src={grad.image}
            alt="grad1"
            className="card-img rounded-0 img-fluid"
            width={90}
            height={90}
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
        <div className="card-body">
          <Link
            href={"/grads/" + grad.id}
            className="h3 text-decoration-none"
            title={grad.name}
          >
            {grad.name}
          </Link>
          <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
            <li>{grad.qualification}</li>
          </ul>
          <Link href={"mailto:" + grad.email}>{grad.email}</Link>
          <p className="mb-0">{grad.interestedin}</p>
        </div>
      </div>
    </div>
  ));
};
export default GradCards;
