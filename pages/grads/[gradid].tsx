import GradDetail from "../../components/Grads/GradDetail";
import { useRouter } from "next/router";
const GradDetailPage = () => {
  const { query } = useRouter();
  return <GradDetail gradid={query.gradid}></GradDetail>;
};

export default GradDetailPage;
