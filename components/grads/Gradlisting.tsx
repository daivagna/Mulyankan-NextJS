import Image from "next/image";
import Link from "next/link";
import axios from 'axios';


const Gradlisting = () => {
  
  return (
    <div className="col-lg-9">
      <div className="row">
        <div className="col-md-6">
          <ul className="list-inline shop-top-menu pb-3 pt-1">
            <li className="list-inline-item">
              <a className="h3 text-dark text-decoration-none mr-3" href="#">
                All
              </a>
            </li>
            <li className="list-inline-item">
              <a className="h3 text-dark text-decoration-none mr-3" href="#">
                Men's
              </a>
            </li>
            <li className="list-inline-item">
              <a className="h3 text-dark text-decoration-none" href="#">
                Women's
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="col-md-6 pb-4">
          <div className="d-flex">
            <select className="form-control">
              <option>Featured</option>
              <option>A to Z</option>
              <option>Item</option>
            </select>
          </div>
        </div> */}
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 product-wap rounded-0">
            <div className="card rounded-0">
              <Image
                src={
                  "https://www.free-css.com/assets/files/free-css-templates/preview/page281/zay-shop/assets/img/shop_01.jpg"
                }
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
                href="/grads/grad1"
                className="h3 text-decoration-none"
                title="Grad 1"
              >
                Grad 1
              </Link>
              <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                <li>Qualification</li>
              </ul>
              <Link href="mailto:test@gmail.com">test@gmail.com</Link>
              <p className="mb-0">Interested In</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <ul className="pagination pagination-lg justify-content-end">
          <li className="page-item disabled">
            <a
              className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0"
              href="#"
              tabindex="-1"
            >
              1
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark"
              href="#"
            >
              2
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark"
              href="#"
            >
              3
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Gradlisting;
