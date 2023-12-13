import { SidebarProvider } from "@/contex/SidebarProvider"
import PrimaryLayout from "./layout/PrimaryLayout"

function App() {
  return (
    <>
      <SidebarProvider>
        <PrimaryLayout />
      </SidebarProvider>
    </>
  )
}

export default App
