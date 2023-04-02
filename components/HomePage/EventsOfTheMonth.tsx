import EventsOfTheMonthItem from 'components/HomePage/EventOfTheMonthItem';
import eventJson from 'data/Events.json';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const d = new Date();
//document.write("The current month is " + monthNames[d.getMonth()]);
let eventsOfMonth = eventJson.filter(x=>x.Date.indexOf(monthNames[d.getMonth()]) > 0).slice(0,3);

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
    <EventsOfTheMonthItem events = {eventsOfMonth} />
  </div>
</div>
</>
}
export default EventsOfTheMonth;