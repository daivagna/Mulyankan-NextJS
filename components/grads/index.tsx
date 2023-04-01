import { useState } from "react";
import Gradfilters from "./Gradfilters";
import Gradlisting  from "./Gradlisting";

const Index = () => {
  const [gradCategory, setGradsCategory] = useState('');
  return (
    <div className="container py-5">
      <div className="row">
        <Gradfilters></Gradfilters>
        <Gradlisting selectedCategory={gradCategory}></Gradlisting>
      </div>
    </div>
  );
}

export default Index;
