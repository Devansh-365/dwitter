import React from 'react'
import Post from '../Post'

const tweets = [
    {
        displayName: 'Devansh',
        userName: '0xfasdsfd',
        avatar: 'https://cdn.vox-cdn.com/thumbor/2xj1ySLIz1EZ49NvSsPzq8Itjyg=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg',
        text: 'gm',
        isProfileImageNFt: true,
        timestamp: '2020-06-01T12:00:00.000Z'
    },
    {
        displayName: 'Devansh',
        userName: '0xfasdsfd',
        avatar: 'https://cdn.vox-cdn.com/thumbor/2xj1ySLIz1EZ49NvSsPzq8Itjyg=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg',
        text: 'gm',
        isProfileImageNFt: false,
        timestamp: '2020-06-01T12:00:00.000Z'
    },
    {
        displayName: 'Devansh',
        userName: '0xfasdsfd',
        avatar: 'https://cdn.vox-cdn.com/thumbor/2xj1ySLIz1EZ49NvSsPzq8Itjyg=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg',
        text: 'gm',
        isProfileImageNFt: false,
        timestamp: '2020-06-01T12:00:00.000Z'
    }
]

function ProfileTweets() {
  return (
    <div className='no-scrollbar'>
        {tweets.map((tweet,index) => (
            <Post
            key={index}
            displayName="Devansh Tiwari"
            userName={`${tweet.userName.slice(0,4)}...${tweet.userName.slice(-4)}`}
            text={tweet.text}
            avatar={tweet.avatar}
            isProfileImageNFt={tweet.isProfileImageNFt}
            timestamp={tweet.timestamp} />
        ))}
    </div>
  )
}

export default ProfileTweets