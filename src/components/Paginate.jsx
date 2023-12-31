import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
const Paginate = ({ loadDataFn, total, pageChange }) => {

  const pageCount = total?.meta?.total
  const totalPage = pageCount ? Math.ceil(pageCount / 10) : 1

  const [rerender, setRerender] = useState(true)
  useEffect(() => {
    if (pageChange === 1) {
      setRerender(false);
      const timeoutId = setTimeout(() => {
        setRerender(true);
      }, 10);
      return () => clearTimeout(timeoutId);
    }
  }, [pageChange]);
  return (
    <>
      <div className="flex items-center justify-between px-8 py-2 mt-5 bg-white bottom-1">
        <div className="">Total Data : {pageCount} </div>
        {rerender && <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={loadDataFn}
          pageRangeDisplayed={2}
          pageCount={totalPage}
          previousLabel="<"
          containerClassName="flex flex-row items-center justify-center gap-2 ml-4"
          activeClassName=" bg-primary text-white px-2 py-1 rounded-md gap-2 border"
          pageClassName="px-2 py-1 rounded-md gap-2 border"
          renderOnZeroPageCount={1}
        />}
      </div>
    </>
  );
};

export default Paginate;