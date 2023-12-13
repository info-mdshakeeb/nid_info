import { ScrollArea } from '@/components/ui/scroll-area'
import SidebarCollapse from '@/components/ui/sidebar/sidebar-collapse'
import SidebarCollapseLink from '@/components/ui/sidebar/sidebar-collapse-link'
import SecCollapse from '@/components/ui/sidebar/sec_clooaspse'
import { PiHouseLineFill } from 'react-icons/pi'
import { useSelector } from 'react-redux'
import { useGetQueriesQuery } from '@/redux/features/users/usersApi'


const SidebarMenu = () => {
  const { open, openUnion } = useSelector((state) => state.query);

  console.log();
  const { data: queryData, isLoading } = useGetQueriesQuery(open?.id || 1, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    pollingInterval: 30000,
  });
  //  get  queryData info after the queryData is fetched

  const data = [
    { id: 1, name: "উপজেলা 1", icon: <PiHouseLineFill className="icon" />, },
    { id: 2, name: "উপজেলা 2", icon: <PiHouseLineFill className="icon" />, }
  ]
  return (
    <ScrollArea>
      {data?.map((item) => {
        const unions = queryData?.filter((union) => union.upozilla_id === item.id);
        return (
          <SidebarCollapse
            key={item?.id}
            item={item}
            icon={item?.icon}
          >
            {isLoading ? <span className="loading loading-bars loading-md"></span> :
              <>
                {unions?.map((unionItem) => (
                  <SecCollapse
                    key={unionItem?.id}
                    item={unionItem}
                  >
                    {unionItem?.villages
                      ?.filter((gram) => gram?.union_id === openUnion?.id)
                      ?.map((gramItem) => (
                        <SidebarCollapseLink
                          key={gramItem?.id}
                          item={gramItem}
                        />
                      ))}
                  </SecCollapse>
                ))}
              </>}
          </SidebarCollapse>
        );
      })}
    </ScrollArea>

  )
}

export default SidebarMenu
