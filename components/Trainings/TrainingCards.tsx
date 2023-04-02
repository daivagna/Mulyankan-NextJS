import Image from "next/image";
import Link from "next/link";
const TrainingCards = (props: any) => {
  return props.events.map((event: any, index: any) => (
    <div className="col-md-4" key={index}>
      <div className="card mb-4 product-wap rounded-0">
        <div className="card rounded-0">
          <Image
            src={event.Image_Url}
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
        <div className="card-body">
          <Link
            href={"/trainings/" + event.ID}
            title={event.Topic}
          >
            {event.Topic}
          </Link>
          <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
            <li>{event.ShortDescription}</li>
          </ul>
          <p className="mb-0">{event.Duration}</p>
          <p className="mb-0">{event.Date}</p>
          <p className="mb-0">{event.Time}</p>
          <p className="mb-0">{event.Trainer}</p>
        </div>
      </div>
    </div>
  ));
};
export default TrainingCards;
