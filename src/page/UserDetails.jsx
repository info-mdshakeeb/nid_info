import { useGetUserDetailsQuery } from '@/redux/features/users/usersApi';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams()

  const { data, isLoading, isError, isSuccess, error, isFetching } = useGetUserDetailsQuery(id, {
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