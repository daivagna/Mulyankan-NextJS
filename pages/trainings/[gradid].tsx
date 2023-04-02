import TrainingDetail from "../../components/grads/GradDetail";
import { useRouter } from "next/router";
const GradDetailPage = () => {
  const { query } = useRouter();
  return <TrainingDetail gradid={query.gradid}></TrainingDetail>;
};

export default TrainingDetail;