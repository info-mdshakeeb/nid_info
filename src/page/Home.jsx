import Paginate from '@/components/Paginate';
import StageLoading from '@/components/StageLoading';
import TableTemp from '@/components/TableTemp';
import { useGetUsersQuery } from '@/redux/features/users/usersApi';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { twMerge } from 'tailwind-merge';

const Home = () => {
  const { open, openUnion, openGram } = useSelector((state) => state.query);
  const [gander, setGander] = useState('')
  const [paginateData, setPaginateData] = useState(1)
  const urlParams = `upozilla_id=${open.id}&union_id=${openUnion.id}&village_id=${openGram.id}&gender=${gander}&page=${paginateData}&limit=10`
  const { data, isLoading, isError, isSuccess, error } = useGetUsersQuery(urlParams, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    pollingInterval: 30000,
  })

  const handlePaginate = (data) => {
    let selected = data.selected;
    if (selected === 0) return setPaginateData(1);
    setPaginateData(selected + 1);
  }

  const tableHead = [
    { name: 'name', field: 'name', },
    { name: 'nid', field: 'nid', },
    { name: 'father ', field: 'father', },
    { name: 'mother', field: 'mother', },
    { name: 'occupation', field: 'occupation', },
    { name: 'house', field: 'address.house', },
    { name: 'village', field: 'address.village', },
    { name: 'union', field: 'address.union', },
    { name: 'upozilla', field: 'address.upozilla', },
    { name: 'phone', field: 'address.phone', },

  ];
  // table fields to show
  const fieldsToShow = ['name', 'nid', 'father', 'mother', 'occupation', 'address?.house', 'address?.village', 'address?.union', 'address?.upozilla',];


  return (
    <div className='bg-secondary'>
      <div className={twMerge("mx-auto flex flex-col w-full ", "")} >
        <div className="bg-white">
          <div className='flex flex-col w-full px-4 py-8 mx-auto md:px-8' >
            <h1 className='font-bold lg:text-2xl'>Home page </h1>
            <span className="flex items-center gap-2 mt-4">
              {open?.name ? open?.name : "Home"}
              {openUnion?.name && ` > ${openUnion?.name}`}
              {openGram?.name && ` > ${openGram?.name}`}
            </span>
          </div>
        </div>
        <div className="px-4 md:px-8">
          <div className="flex mb-[37px] mt-[30px] items-center justify-between ">
            <div className="mb-4 md:mb-0">
              <p className="mb-2 text-xl font-bold">All List</p>
            </div>
            <div className="">
              <div className="">
                <div className="rounded-none join">
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
            </div>
          </div>
          <div className="mb-8 overflow-x-scroll scrollbar-hide">
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