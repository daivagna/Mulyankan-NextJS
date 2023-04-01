import EventsOfTheMonthItem from 'components/HomePage/EventOfTheMonthItem';
import carouselJson from 'data/EventsOfTheMonth.json';

const EventsOfTheMonth = () => {
    return <>
    <div className="container py-5">
  <div className="row text-center pt-3">
    <div className="col-lg-6 m-auto">
      <h1 className="h1">Trainings of The Month</h1>
      <p>These are the trainings scheduled for this month</p>
    </div>
  </div>
  <div className="row">
    <EventsOfTheMonthItem events = {carouselJson} />
  </div>
</div>
</>
}
export default EventsOfTheMonth;