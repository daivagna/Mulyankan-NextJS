import TrainingDetail from "../../components/Trainings/TrainingDetail";
import { useRouter } from "next/router";
const TrainingDetailPage = () => {
  const { query } = useRouter();
  debugger;
  return <TrainingDetail eventid={query.eventId}></TrainingDetail>;
};

export default TrainingDetailPage;