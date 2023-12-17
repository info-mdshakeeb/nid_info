import { useGetUserDetailsQuery } from '@/redux/features/users/usersApi';
import { useSelector } from 'react-redux';

const UserDetails = () => {
  const { modal } = useSelector(state => state.modal)

  const { data, isLoading, isError, isSuccess, error, isFetching } = useGetUserDetailsQuery(modal?.selectedItem?.id, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    pollingInterval: 30000,
  })

  return (
    <div className='m-5'>
      {isLoading || isFetching ? <span className="loading loading-bars loading-md"></span> : isError ? <div className="mt-10 text-red-400 ">
        {error?.data?.message || error?.error || "something unexpected error happened (;"}
      </div> : isSuccess ? <div className="mt-10 ">
        <div className="">
          <p>
            <span className="font-bold">Name:</span> {data?.name}
          </p>
        </div>
      </div> : null}

    </div>
  );
};

export default UserDetails;