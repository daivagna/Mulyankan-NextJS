import GradCard from "./GradCards";
import GradsData from "../../data/grads.json";
import Pagination from "./GradsPagination";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

export interface GradlistingProps {
  selectedCategory: SetStateAction<string>;
}

const paginate = (items: any, pageNumber: any, pageSize: any) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};

const GradCardData = (gradsnewData: any) => {
  return <GradCard grads={gradsnewData}></GradCard>;
};

const Gradlisting: React.FC<GradlistingProps> = (props: any) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 5;
  let GradsFilterdData = GradsData;
  // if (props.selectedCategory != "") {
  //   let filters = props.selectedCategory.split("##");
  //   if (filters[1] == "interestedin")
  //     GradsFilterdData = GradsData.filter(
  //       (grad) => grad.interestedin == filters[0]
  //     );
  // }
  console.log("FilterdCategories", GradsFilterdData);
  let gradsnewData = paginate(GradsFilterdData, 1, pageSize);
  const [gradsFilterData, setGradsData] = useState(gradsnewData);

  const onPageChange = (page: any) => {
    setCurrentPage(page);
    gradsnewData = paginate(GradsFilterdData, page, pageSize);
    setGradsData(gradsnewData);
  };

  return (
    <div className="col-lg-9">
      <div className="row">
        <div className="col-md-6">
          <ul className="list-inline shop-top-menu pb-3 pt-1">
            <li className="list-inline-item">
              <a className="h3 text-dark text-decoration-none mr-3" href="#">
                All
              </a>
            </li>
            <li className="list-inline-item">
              <a className="h3 text-dark text-decoration-none mr-3" href="#">
                Men's
              </a>
            </li>
            <li className="list-inline-item">
              <a className="h3 text-dark text-decoration-none" href="#">
                Women's
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">{GradCardData(gradsFilterData)}</div>
      <div className="row">
        <Pagination
          items={GradsData.length} // 100
          currentPage={currentPage} // 1
          pageSize={pageSize} // 10
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Gradlisting;
