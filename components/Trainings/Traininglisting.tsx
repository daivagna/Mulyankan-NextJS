import EventsCard from "./TrainingCards";
import EventsData from "../../data/Events.json";
import Pagination from "./TrainingPagination";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

type PageProps = {
  page: any;
 
};

export interface GradlistingProps {
  selectedCategory: SetStateAction<string>;
}

const paginate = (items: any, pageNumber: any, pageSize: any) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};

const EventCardData = (gradsnewData: any) => {
  return <EventsCard events={gradsnewData}></EventsCard>;
};

const Traininglisting: React.FC<GradlistingProps> = (props: any) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 6;
  let GradsFilterdData = EventsData;
  // if (props.selectedCategory != "") {
  //   let filters = props.selectedCategory.split("##");
  //   if (filters[1] == "interestedin")
  //     GradsFilterdData = GradsData.filter(
  //       (grad) => grad.interestedin == filters[0]
  //     );
  // }
  console.log("FilterdCategories", GradsFilterdData);
  let gradsnewData = paginate(GradsFilterdData, 1, pageSize);
  const [eventsFilterData, setGradsData] = useState(gradsnewData);
 debugger;
    
  const onPageChangeNew: React.FunctionComponent<PageProps>  = (props: any)  => {
    setCurrentPage(props);
    gradsnewData = paginate(GradsFilterdData, props, pageSize);
    setGradsData(gradsnewData);
    return null;
  };

  return (
    <>
    <h1>Trainings</h1>
    <div className="col-lg-12">
      <div className="row">{EventCardData(eventsFilterData)}</div>
      <div className="row">
        <Pagination
          items={EventsData.length} // 100
          currentPage={currentPage} // 1
          pageSize={pageSize} // 10
          onPageChangeNew={onPageChangeNew}
        />
      </div>
    </div>
    </>
  );
};

export default Traininglisting;
