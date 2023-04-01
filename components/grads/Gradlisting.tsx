import GradCard from "./GradCards";
import GradsData from "../../data/grads.json";
import Pagination from "./GradsPagination";
import { useState, useEffect } from "react";

const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};

const GradCardData = (gradsnewData) => {
  return <GradCard grads={gradsnewData}></GradCard>;
};

const Gradlisting = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  // useEffect(() => {
  let gradsnewData = paginate(GradsData, 1, pageSize);
  //})

  useEffect(() => {
    debugger;
    GradCardData(gradsnewData)
    //setCurrentPage(page);
    // setCurrentPage(page);
    // paginate(GradsData, page, pageSize);
  }, [gradsnewData]);

  const onPageChange = (page) => {
    setCurrentPage(page);
    gradsnewData = paginate(GradsData, page, pageSize);
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
        {/* <div className="col-md-6 pb-4">
          <div className="d-flex">
            <select className="form-control">
              <option>Featured</option>
              <option>A to Z</option>
              <option>Item</option>
            </select>
          </div>
        </div> */}
      </div>
      <div className="row">{GradCardData(gradsnewData)}</div>
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
