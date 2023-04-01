import Image from 'next/image'
const GradDetail = () => {
  return (
    <>
  <div className="bg-light">
    <div className="container pb-5">
        <div className="row">
            <div className="col-lg-5 mt-5">
                <div className="card mb-3">
                    <Image
                    className='card-img img-fluid'
                    src={"https://www.free-css.com/assets/files/free-css-templates/preview/page281/zay-shop/assets/img/shop_01.jpg"}
                    alt="Card image cap"
                    height={90}
                    width={90}
                    ></Image>
                </div>
                
            </div>
            <div className="col-lg-7 mt-5">
                <div className="card">
                    <div className="card-body">
                        <h1 className="h2">Active Wear</h1>
                        <p className="h3 py-2">$25.00</p>
                        <p className="py-2">
                            <i className="fa fa-star text-warning"></i>
                            <i className="fa fa-star text-warning"></i>
                            <i className="fa fa-star text-warning"></i>
                            <i className="fa fa-star text-warning"></i>
                            <i className="fa fa-star text-secondary"></i>
                            <span className="list-inline-item text-dark">Rating 4.8 | 36 Comments</span>
                        </p>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <h6>Brand:</h6>
                            </li>
                            <li className="list-inline-item">
                                <p className="text-muted"><strong>Easy Wear</strong></p>
                            </li>
                        </ul>

                        <h6>Description:</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.</p>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <h6>Avaliable Color :</h6>
                            </li>
                            <li className="list-inline-item">
                                <p className="text-muted"><strong>White / Black</strong></p>
                            </li>
                        </ul>

                        <h6>Specification:</h6>
                        <ul className="list-unstyled pb-3">
                            <li>Lorem ipsum dolor sit</li>
                            <li>Amet, consectetur</li>
                            <li>Adipiscing elit,set</li>
                            <li>Duis aute irure</li>
                            <li>Ut enim ad minim</li>
                            <li>Dolore magna aliqua</li>
                            <li>Excepteur sint</li>
                        </ul>

                        

                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  </>
    );
};
export default GradDetail;
