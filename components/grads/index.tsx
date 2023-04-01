import { useState } from "react";
import Gradfilters from "./Gradfilters";
import Gradlisting  from "./Gradlisting";

const index = () => {
  const [gradCategory, setGradsCategory] = useState('');
  return (
    <div className="container py-5">
      <div className="row">
        <Gradfilters setGradsDataWithFilters={setGradsCategory}></Gradfilters>
        <Gradlisting selectedCategory={gradCategory}></Gradlisting>
      </div>
    </div>
  );
}

export default index;
