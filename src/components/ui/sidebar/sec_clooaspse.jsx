
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible'
import { HiOutlineChevronDown } from 'react-icons/hi'
import { BsFillHousesFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { setOpenGram, setOpenUnion } from '@/redux/features/query/querySlice';

const SecCollapse = ({ children, item }) => {
  const dispatch = useDispatch();
  const { openUnion, openGram } = useSelector((state) => state.query);
  return (
    <Collapsible open={openUnion?.name === item?.name} onOpenChange={() => {
      if (openUnion.name === item.name) {
        dispatch(setOpenUnion({ name: '', id: '', open: false }));
        openGram.name && dispatch(setOpenGram({ name: '', id: '', open: false }));
        return;
      }
      dispatch(setOpenUnion({ name: item.name, id: item?.id, open: true }));
    }}>
      <CollapsibleTrigger asChild>
        <button
          className={`relative flex justify-between w-[260px] items-center py-1 pl-6 before:content-[''] before:absolute before:block before:w-4 before:h-[45px] before:left-0 before:bottom-[calc(50%-2px)] before:border-l-2 before:border-b-2 before:border-gray-300  transition-colors`} >
          <div className="flex items-center gap-2">
            <BsFillHousesFill />
            <span className="tracking-wide">{item?.name}</span>
          </div>
          <HiOutlineChevronDown
            className={`w-5 h-5 transition ${openUnion?.name === item?.name ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="ml-[1.6rem] mb-2">{children}</div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default SecCollapse
