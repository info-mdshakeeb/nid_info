import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { IoPerson, IoMenuSharp } from 'react-icons/io5'
import { LuLogOut, LuUser2 } from 'react-icons/lu'
import { RxMoon, RxSun } from 'react-icons/rx'

const Header = () => {
  const handleLogout = async () => {}

  return (
    <header className="flex items-center justify-between px-5 rounded-xl shadow-sm bg-white dark:bg-gray-900">
      <Button variant="secondary" size="icon">
        <IoMenuSharp className="w-6 h-6" />
      </Button>

      <div className="flex gap-4 items-center">
        <Button variant="ghost" size="icon">
          <RxMoon className="w-6 h-6" />
          {/* <RxSun className="w-6 h-6" /> */}
        </Button>

        <DropdownMenu modal={false}>
          <DropdownMenuTrigger className="flex gap-2 items-center max-w-[200px]  outline-none focus:ring-2 ring-offset-2 dark:ring-offset-gray-900 ring-gray-300 dark:ring-gray-700/60 rounded-full">
            <span className="ms-2 truncate">Md. Tauhid</span>
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/40?img=12" alt="avatar" />
              <AvatarFallback>
                <IoPerson className="icon" />
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <LuUser2 className="icon" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>
              <LuLogOut className="icon" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default Header
