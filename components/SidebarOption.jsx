import { useRouter } from "next/router"


function SidebarOption({text, Icon, isActive, setSelected,redirect }) {
    
    const router = useRouter()

    return (
        <div 
        className="w-min flex items-center rounded-[100px] p-4 cursor-pointer hover:bg-[#333c45] transition-all hover:duration-200 hover:ease-in-out"
         onClick={() => {
            setSelected(text)
            router.push(redirect)
        }}>
            <div className="text-xl mr-4">
                <Icon />
            </div>
            <div className={`${isActive ? 'font-bold' : 'font-medium' }`}>
                {text}
            </div>
        </div>
    )
}

export default SidebarOption