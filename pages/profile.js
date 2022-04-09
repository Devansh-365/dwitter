import React from 'react'
import ProfileHeader from '../components/profile/ProfileHeader'
import ProfileTweets from '../components/profile/ProfileTweets'
import Sidebar from '../components/Sidebar'
import Widget from '../components/Widget'

function profile() {
  return (
    <div className='flex justify-center h-screen w-screen select-none bg-[#15202b] text-white'>
        <div className='max-w-[1400px] w-2/3 flex justify-between'>
            <Sidebar />
            <div className='flex-[2] border-r border-l border-[#38444d] overflow-y-scroll'>
                <ProfileHeader />
                <ProfileTweets />
            </div>
            <Widget />
        </div>
    </div>
  )
}

export default profile
