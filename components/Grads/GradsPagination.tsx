import Link from "next/link";

type GradList = {
  items: number;
  pageSize: number;
  currentPage: number;
  onPageChangeNew: any;
};
const Pagination: React.FunctionComponent<GradList>  = (props) => {
    const pagesCount = Math.ceil(props.items / props.pageSize); // 100/10
   
    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
   
     return (
      <div>
        <ul className="pagination pagination-lg justify-content-end">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === props.currentPage ? "page-item disabled" : "page-item"
              }
            >
              <Link href="#" className={page === props.currentPage ? "page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" : "page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0"} onClick={() => props.onPageChangeNew(page)}>
                {page}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
   };
   
   export default Pagination;