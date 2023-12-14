import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
const Table = ({ tableData, res, columns, setPaginateData, paginateData }) => {
  const data = useMemo(() => tableData, [tableData]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      paginateData
    },
    pageCount: res?.meta?.total / res?.meta?.page,
    manualPagination: true,
    onPaginationChange: setPaginateData

  });

  return (
    <div className="py-5 overflow-x-auto">
      <table className="w-full rounded-md shadow-lg table-auto min-w-max ">
        <thead>
          {table?.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-[#E5E7EB] ">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-5 text-start text-primary">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="transition duration-700 ">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="p-5 font-[400] text-grayText text-start "
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="">
        current
      </div>
      <div className="flex items-center justify-end gap-5 py-10">
        {/* <button
          className="bg-gray-200 px-4 py-3 font-[500] rounded-lg"
          onClick={() => table.setPageIndex(0)}
        >
          <MdSkipPrevious></MdSkipPrevious>
        </button> */}
        <button
          className="bg-gray-200 px-4 py-3 font-[500] rounded-lg "
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          <GrFormPrevious></GrFormPrevious>
        </button>
        <button
          className="bg-gray-200 px-4 py-3 font-[500] rounded-lg "
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          <MdOutlineNavigateNext></MdOutlineNavigateNext>
        </button>
        {/* <button
          className="bg-gray-200 px-4 py-3 font-[500] rounded-lg "
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          <MdSkipNext></MdSkipNext>
        </button> */}
      </div>
    </div>
  );
};
export default Table;