const Pagination = ({items , pageSize, currentPage, onPageChange }) => {
    const pagesCount = Math.ceil(items / pageSize); // 100/10
   
    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
   
     return (
      <div>
        <ul className="pagination pagination-lg justify-content-end">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item disabled" : "page-item"
              }
            >
              <a className={page === currentPage ? "page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" : "page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0"} onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
   };
   
   export default Pagination;