import GradCard from "./GradCards";
import GradsData from "../../data/users.json";
import Pagination from "./GradsPagination";
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

const GradCardData = (gradsnewData: any) => {
    return <GradCard grads={gradsnewData}></GradCard>;
};

const Gradlisting: React.FC<GradlistingProps> = (props: any) => {
    const [currentPage, setCurrentPage] = useState(1);

    const pageSize = 6;
    let GradsFilterdData = GradsData;
    // if (props.selectedCategory != "") {
    //   let filters = props.selectedCategory.split("##");
    //   if (filters[1] == "interestedin")
    //     GradsFilterdData = GradsData.filter(
    //       (grad) => grad.interestedin == filters[0]
    //     );
    // }

    let gradsnewData = paginate(GradsFilterdData, 1, pageSize);
    const [gradsFilterData, setGradsData] = useState(gradsnewData);


    const onPageChangeNew: React.FunctionComponent<PageProps> = (props: any) => {
        setCurrentPage(props);
        gradsnewData = paginate(GradsFilterdData, props, pageSize);
        setGradsData(gradsnewData);
        return null;
    };

    return (
        <>
            <h1>Grads</h1>
            <div className="col-lg-12">
                <div className="row">{GradCardData(gradsFilterData)}</div>
                <div className="row">
                    <Pagination
                        items={GradsData.length} // 100
                        currentPage={currentPage} // 1
                        pageSize={pageSize} // 10
                        onPageChangeNew={onPageChangeNew}
                    />
                </div>
            </div>
        </>
    );
};

export default Gradlisting;