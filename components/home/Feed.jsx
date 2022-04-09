import {BsStars } from 'react-icons/bs'
import Post from '../Post'
import TweetBox from './TweetBox'

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

function Feed() {
    return (
        <div className="flex-[2] border-r border-l border-[#38444d]">
            <div className="sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center" >
                <div className="text-xl font-bold">Home</div>
                <BsStars />
            </div>
            <TweetBox />
            {tweets.map((tweet, index) => (
                <Post 
                key={index}
                displayName={tweet.displayName}
                userName = {`${tweet.userName.slice(0.4)}...${tweet.userName.slice(-4)}`}
                avatar = {tweet.avatar}
                text = {tweet.text}
                isProfileImageNft = {tweet.isProfileImageNFt}
                timestamp = {tweet.timestamp}

                />
            ))}
        </div>
    )
}

export default Feed