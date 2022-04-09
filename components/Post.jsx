import { BsFillPatchCheckFill } from 'react-icons/bs'
import { FaRegComment, FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiShare } from 'react-icons/fi'
import { useState } from 'react'
import { format } from 'timeago.js'

function Post({displayName,userName,text,
avatar,timestamp,isProfileImageNft,}) {
    return (
        <div className='flex p-3 border-b border-[#38444d]'>
            <div>
                <img src={avatar} alt="" className={isProfileImageNft ? 'rounded-full h-[40px] w-[40px] object-cover smallHex' : 'rounded-full h-[40px] w-[40px] object-cover'} />
            </div>
            <div>
                <div className='flex-1 px-4'>
                    <div>
                        <span className='flex items-center'>
                            <span className='font-bold mr-1'>{displayName}</span>
                            {isProfileImageNft && <span className='text-[0.8rem]'><BsFillPatchCheckFill/></span>}
                        </span>
                        <span className='text-[#8899a6] ml-1'>
                            @{userName} ⚪ {format(new Date(timestamp).getTime())} 
                        </span>
                        <div className='my-2'>{text}</div>
                    </div>
                    <div className='flex justify-between mr-28 mt-4 text-[#8899a6]'>
                        <div className='rounded-full text-lg p-2 hover-[#1e364a] hover:text-[#1d9bf0]'>
                        <FaRegComment />
                        </div>
                        <div
                        className='rounded-full text-lg p-2 hover:text-[#03ba7c] hover:bg-[#1b393b]'
                        >
                        <FaRetweet />
                        </div>
                        <div
                        className='rounded-full text-lg p-2 hover:text-[#f91c80] hover:bg-[#39243c]'
                    >
                        <AiOutlineHeart />
                    </div>
                    <div
                        className='rounded-full text-lg p-2 hover:text-[#1d9bf0] hover:bg-[#1e364a]'
                    >
                        <FiShare />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post