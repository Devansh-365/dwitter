import React from 'react'
import { useRouter } from 'next/router'
import { BsArrowLeftShort } from 'react-icons/bs'


function ProfileHeader() {
  const router = useRouter()

  const isProfileImageNft = false;
  const currentAccount = '0x8fF1458D97493945288f687797B95AEd37546C70'
  return (
    <div className='border-[#38444d] border-b'>
        <div className='py-1 px-3 mt-2 flex items-center'>
            <div onClick={() => router.push('/')} className='text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1'>
                <BsArrowLeftShort />
            </div>
            <div className='px-3'>
                <div className='bg-transparent outline-none font-bold'>Devansh Tiwari</div>
                <div className='text-[#8899a6] text-xs'>30 Tweets</div>
            </div>
        </div>
        <div className='flex items-center justify-center h-[15vh] overflow-hidden'>
            <img src="" alt="" className='object-cover h-full w-full' />
        </div>
        <div className='w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 '>
            <div className={isProfileImageNft ? 'hex' : 'w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3'}>
                <img src="https://cdn.vox-cdn.com/thumbor/2xj1ySLIz1EZ49NvSsPzq8Itjyg=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg" alt="" className={isProfileImageNft ? 'object-cover h-full' : 'object-cover rounded-full h-full'} />
            </div>
        </div>
        <div className='px-3'>
            <div >
                <div className='bg-transparent outline-none font-bold'>Devansh Tiwari</div>
            </div>
            <div className='text-[#8899a6] text-xs'>{currentAccount && (
            <>
              @{currentAccount.slice(0, 8)}...{currentAccount.slice(37)}
            </>
          )}</div>
        </div>
    </div>
  )
}

export default ProfileHeader