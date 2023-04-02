import { useState } from "react";
import Trainingfilters from "./Trainingfilters";
import Traininglisting  from "./Traininglisting";

const Index = () => {
   const [gradCategory, setGradsCategory] = useState('');
  return (
    <div className="container py-5">
      <div className="row">
        {/* <Trainingfilters></Trainingfilters> */}
        <Traininglisting selectedCategory={gradCategory}></Traininglisting>
      </div>
    </div>
  );
}

export default Index;
