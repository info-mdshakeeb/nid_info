import PropTypes from 'prop-types'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible'

import { HiOutlineChevronDown } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux';
import { setOpen, setOpenGram, setOpenUnion } from '@/redux/features/query/querySlice';

const SidebarCollapse = ({ children, icon, item, }) => {
  const dispatch = useDispatch();
  const { open, openUnion, openGram } = useSelector((state) => state.query);
  return (
    <Collapsible open={open.name === item?.name} onOpenChange={() => {
      openUnion.name && dispatch(setOpenUnion({ name: '', id: '', open: false, }));
      openGram.name && dispatch(setOpenGram({ name: '', id: '', open: false }));
      if (open.name === item.name) {
        dispatch(setOpen({ name: '', id: '', open: false }));
        return;
      }
      dispatch(setOpen({ name: item?.name, id: item?.id, open: true }));
    }}>
      <CollapsibleTrigger asChild>
        <button
          className={`w-full font-medium flex justify-between items-center gap-2 rounded-lg py-2 px-4 mb-2 `}
        >
          <div className="flex items-center gap-2">
            {icon}
            <span className="tracking-wide ">{item?.name}</span>
          </div>
          <HiOutlineChevronDown
            className={`w-5 h-5 transition ${open.name === item?.name ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="ml-[1.6rem] mb-2">{children}</div>
      </CollapsibleContent>
    </Collapsible>
  )
}

SidebarCollapse.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  text: PropTypes.string,
  basePath: PropTypes.string,
}
export default SidebarCollapse
