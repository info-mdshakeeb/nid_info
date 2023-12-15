
import Card from '@/components/Card';
import PiChart from '@/components/Chart/PiChart';
import Paginate from '@/components/Paginate';
import Search from '@/components/Search';
import StageLoading from '@/components/StageLoading';
import Table from '@/components/Table/Table';
import TableTemp from '@/components/TableTemp';
import { Options } from '@/components/ui/Dropdown';
import { useGetUsersQuery } from '@/redux/features/users/usersApi';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { twMerge } from 'tailwind-merge';

const Home = () => {
  const { open, openUnion, openGram } = useSelector((state) => state.query);
  const [optionValue, setOptionValue] = useState("");
  const [search, setSearch] = useState('')

  const [gander, setGander] = useState('')
  const [paginateData, setPaginateData] = useState(1)

  const urlParams = `upozilla_id=${open.id}&union_id=${openUnion.id}&village_id=${openGram.id}&status=${optionValue}&search=${search?.name || ""}&gender=${gander}&page=${paginateData}&limit=10`
  const { data, isLoading, isError, isSuccess, error } = useGetUsersQuery(urlParams, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    pollingInterval: 30000,
  })

  const EarningData = [
    { name: "Total Users", value: 15, bg: "bg-[#AA72EB]", },
    { name: "Total Confirm Users", value: 13, bg: "bg-[#1DCBA8]", },
    { name: "Total Pending Users", value: 13, url: "add later ", bg: "bg-[#FFAF3D]", },
    { name: "Total Reject Users", value: 13, bg: "bg-[#FF6A6A]" }
  ]
  const handlePaginate = (data) => {
    let selected = data.selected;
    if (selected === 0) return setPaginateData(1);
    setPaginateData(selected + 1);
  }
  // table head
  const tableHead = [
    { name: 'name', field: 'name', },
    { name: 'nid', field: 'nid', },
    { name: 'father ', field: 'father', },
    { name: 'mother', field: 'mother', },
    { name: 'occupation', field: 'occupation', },
    { name: 'Phone', field: 'mobile_no', },
    // { name: 'status', field: 'status', },
  ];
  // table fields to show
  const fieldsToShow = ['name', 'nid', 'father', 'mother', 'occupation', "mobile_no", "status"];


  return (
    <div className='bg-secondary'>
      <div className={twMerge("mx-auto flex flex-col w-full ", "")} >
        <div className="px-4 md:px-8">

          <div className=" rounded-[16px] pb-[10px] pt-5  lg:mb-0">
            <div className="mb-5 ">
              <h1 className="text-[18px] font-poppins text-black font-semibold">Total Analytics</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-10 md:flex-row ">
              <div className="scale-[1.6] lg:w-[40%]">
                <PiChart />
              </div>
              <div className="w-full">
                <div className="grid w-full grid-cols-2 gap-4">
                  {EarningData?.map((earnData, i) =>
                    <Card key={i} className={`${earnData.bg} text-white group hover:bg-primary hover:text-white w-full `} data={earnData} />)
                  }
                </div>
              </div>
            </div>
          </div>

          {/* <Table
            setPaginateData={setPaginateData}
            paginateData={paginateData}
            res={data}
            columns={
              [
                { header: 'SL', accessorKey: 'id' },
                { header: 'Name', accessorKey: 'name' },
                { header: 'NID', accessorKey: 'nid' },
                { header: 'Father', accessorKey: 'father' },
                { header: 'Mother', accessorKey: 'mother' },
                { header: 'Occupation', accessorKey: 'occupation' },
                // { header: 'House', accessorKey: 'address.house' },
                // { header: 'Village', accessorKey: 'address.village' },
                // { header: 'Union', accessorKey: 'address.union' },
                // { header: 'Upozilla', accessorKey: 'address.upozilla' },
                // { header: 'Phone', accessorKey: 'address.phone' },
              ]
            } tableData={data?.data} /> */}

          <div className="flex my-[37px] mt-[30px] items-center justify-between ">
            <div className="mb-4 md:mb-0">
              <p className="mb-2 text-xl font-bold">User  Info</p>
            </div>

            <div className="flex flex-col gap-2 md:flex-row">

              <div className="flex flex-col items-end gap-4 md:flex-row md:items-center ">
                <div className="flex items-center justify-center gap-4">
                  <p className="mb-2"></p>
                  <Options
                    className={"w-[175px] rounded-none py-[6px]"}
                    title={"User Status"}
                    options={
                      [{ key: "", value: "All type" }, { key: "GREEN", value: "Confirmed" }, { key: "YELLOW", value: "Pending" }, { key: "RED", value: "Rejected" }, { key: "WHITE", value: "Unknown" }]}
                    optionValue={optionValue}
                    setOptionValue={setOptionValue} />
                </div>

                <div className="rounded-none join">
                  <input
                    value={gander}
                    defaultChecked
                    onChange={() => setGander("")}
                    className="text-white join-item btn btn-sm btn-success" type="radio" name="options" aria-label="All" />
                  <input
                    value={gander}

                    onChange={() => setGander("MALE")}
                    className="text-white join-item btn btn-sm btn-success" type="radio" name="options" aria-label="Male" />
                  <input
                    onChange={(e) => setGander("FEMALE")}
                    value={gander}
                    className="text-white join-item btn btn-sm btn-success" type="radio" name="options" aria-label="Female" />
                </div>
              </div>
              <Search setSearch={setSearch} text="Search by Nid" name="name" />
            </div>
          </div>
          <div className="my-8 overflow-x-scroll scrollbar-hide ">
            <StageLoading isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error}>
              <TableTemp
                btn={false}
                linkUrl="/"
                customID={true}
                rightPage={paginateData}
                totalData={data?.meta?.total}
                assignLinkOnHeader="service_image"
                isImage={true}
                isImageLink={false}
                tableHead={tableHead}
                data={data?.data}
                fieldsToShow={fieldsToShow}
              // actionData={ActionData} 
              />
            </StageLoading>
          </div>
        </div>
      </div>
      <Paginate total={data} loadDataFn={handlePaginate} />
    </div>
  );
};

export default Home;