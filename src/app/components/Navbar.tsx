import Image from "next/image"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
        {/* NAVBAR */}
        <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
            <Image src="/search.png" alt="" width={14} height={14} />
            <input type="text" placeholder="Buscar" className="w-[200px] bg-transparent p-2 outline-none"/>
        </div>
        {/* USER */}
        <div className="flex items-center gap-6 justify-end w-full">
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                <Image src="/message.png" alt="" width={20} height={20} />
            </div>
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                <Image src="/announcement.png" alt="" width={20} height={20} />
                <div className="absolute -top-3 -right-3 bg-purple-500 w-5 h-5 rounded-full flex items-center justify-center text-white"></div>
            </div>
            <div className="flex flex-col ">
                <span className="text-xs leading-3 font-medium">Admin User</span>
                <span className="text-[10px] text-gray-500 text-right">Admin</span>
            </div>
            <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full"/>
        </div>
    </div>
  )
}

export default Navbar