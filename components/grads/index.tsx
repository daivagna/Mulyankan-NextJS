import Gradfilters from "./Gradfilters";
import Gradlisting  from "./Gradlisting";

function index() {
  return (
    <div className="container py-5">
      <div className="row">
        <Gradfilters></Gradfilters>
        <Gradlisting></Gradlisting>
      </div>
    </div>
  );
}

export default index;
