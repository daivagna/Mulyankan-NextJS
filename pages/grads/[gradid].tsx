import GradDetail from "../../components/grads/GradDetail";
import { useRouter } from "next/router";
const GradDetailPage = () => {
  const { query } = useRouter();
  return <GradDetail gradid={query.gradid}></GradDetail>;
};

export default GradDetailPage;
