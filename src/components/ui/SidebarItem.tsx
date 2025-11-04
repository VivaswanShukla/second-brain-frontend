import type { ReactElement } from "react"

export const SidebarItem = ({ text, icon }: {
    text: string,
    icon: ReactElement
}) => {
    return <div className="flex text-gray-600 items-center p-4 border-t border-b cursor-pointer hover:bg-slate-200">
        <div className="pl-4">
            {icon}
        </div>
        <div className="pl-6">
            {text}
        </div>
    </div>
}