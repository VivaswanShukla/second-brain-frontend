import { Logo } from "../../icons/Logo"
import { TwitterIcon } from "../../icons/TwitterIcon"
import { YoutubeIcon } from "../../icons/YoutubeIcon"
import { SidebarItem } from "./SidebarItem"

export const SideBar = () => {
    return <div className="w-72 bg-slate-100 h-screen fixed border-r-2">
        <div className="flex items-center text-2xl pl-2 pt-3 font-medium">
            <div className="pr-2">
                <Logo/>
            </div>
            Brainly
        </div>
        <div className="pt-5">
            <SidebarItem text="Tweets" icon={< TwitterIcon/> } />
            <SidebarItem text="Videos" icon={< YoutubeIcon/> } />
        </div>
    </div>
}