import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from 'react-icons/ri'
import { BiHash } from 'react-icons/bi'
import { FiBell, FiMoreHorizontal } from 'react-icons/fi'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icons/fa'
import { CgMoreO } from 'react-icons/cg'
import { VscTwitter } from 'react-icons/vsc'
import {
    BsBookmark,
    BsBookmarkFill,
    BsPerson,
    BsPersonFill,
  } from 'react-icons/bs'
import SidebarOption from './SidebarOption'
import {useState} from 'react'
import Link from 'next/link'

function Sidebar( intialIcon = 'Home') {
    const [selected, setSelected] = useState(intialIcon)
    return (
        <div className='flex-[0.7] px-8 hidden md:flex flex-col '>
            <div className='text-3xl m-4'>
                <VscTwitter />
            </div>
            <div className='flex-1'>
                <SidebarOption 
                Icon={selected === 'Home' ? RiHome7Fill : RiHome7Line}
                text='Home'
                isActive={Boolean(selected === 'Home')}
                setSelected={setSelected}
                redirect={'/'} 
                />
               <SidebarOption
                Icon={selected === 'Explore' ? FaHashtag : BiHash}
                text='Explore'
                isActive={Boolean(selected === 'Explore')}
                setSelected={setSelected}
                />
                <SidebarOption
                Icon={selected === 'Notifications' ? FaBell : FiBell}
                text='Notifications'
                isActive={Boolean(selected === 'Notifications')}
                setSelected={setSelected}
                />
                <SidebarOption
                Icon={selected === 'Messages' ? HiMail : HiOutlineMail}
                text='Messages'
                isActive={Boolean(selected === 'Messages')}
                setSelected={setSelected}
                />
                <SidebarOption
                Icon={selected === 'Bookmarks' ? BsBookmarkFill : BsBookmark}
                text='Bookmarks'
                isActive={Boolean(selected === 'Bookmarks')}
                setSelected={setSelected}
                />
                <SidebarOption
                Icon={selected === 'Lists' ? RiFileList2Fill : FaRegListAlt}
                text='Lists'
                isActive={Boolean(selected === 'Lists')}
                setSelected={setSelected}
                />
                <SidebarOption
                Icon={selected === 'Profile' ? BsPersonFill : BsPerson}
                text='Profile'
                isActive={Boolean(selected === 'Profile')}
                setSelected={setSelected}
                redirect={'/profile'}
                />
                <SidebarOption Icon={CgMoreO} text='More' setSelected={setSelected} />
                <div className='bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer'>Mint</div>
            </div>
            <div className='flex items-center mb-5 cursor-pointer hover:bg-[#333c45] rounded-3xl'>
                <div className='flex item-center justify-center mr-4'></div>
                <div className='flex flex-1'>
                    <div className='flex-1'>
                        <div className='text-lg'>Devansh</div>
                        <div className='text-[#8899a6]'>@devansh</div>
                    </div>
                    <div className='flex items-center mr-2'>
                        <FiMoreHorizontal />
                    </div>
                </div>
            </div>
            <div className='flex-1'>

            </div>
        </div>
    )
}

export default Sidebar