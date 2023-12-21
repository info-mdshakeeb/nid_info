import { useSidebarContext } from '@/contex/SidebarProvider';
import { setOpenGram } from '@/redux/features/query/querySlice';
import PropTypes from 'prop-types'
import { GiHouse } from 'react-icons/gi'
import { useDispatch } from 'react-redux';

const SidebarCollapseLink = ({ item }) => {
  const dispatch = useDispatch();
  const { close, } = useSidebarContext()

  return (
    <button
      onClick={() => {
        dispatch(setOpenGram({ name: item?.name, id: item.id, open: false }))
        close()
      }}
      className={`relative flex gap-2 items-center py-1 pl-6 before:content-[''] before:absolute before:block before:w-4 before:h-[45px] before:left-0 before:bottom-[calc(50%-2px)] before:border-l-2 before:border-b-2 before:border-gray-300  transition-colors `}
    >
      <GiHouse className="w-5 h-5" />
      <span>{item?.name}</span>
    </button>
  )
}

SidebarCollapseLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
}
export default SidebarCollapseLink
