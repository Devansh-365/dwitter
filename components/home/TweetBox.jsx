import {useState} from 'react'
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs'
import { RiFileGifLine, RiBarChartHorizontalFill } from 'react-icons/ri'
import { IoMdCalendar } from 'react-icons/io'
import { MdOutlineLocationOn } from 'react-icons/md'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('')
    const postTweet = (event) => {
        event.preventDefault()
        console.log(tweetMessage)
    }
    return (
        <div className="px-4 flex flex-row border-b border-[#38444d] pb-4">
            <div className="mr-4">
                <img 
                src="" 
                alt='profileImage'
                className="h-12 w-12 rounded-full" />
                <form>
                    <textarea 
                    className="w-full h-full outline-none bg-transparent text-lg"
                    placeholder="Hii"
                    value={tweetMessage}
                    onChange={(e) => setTweetMessage(e.target.value)} />
                    <div className='flex'>
                        <div className='text-[#1d9bf0] flex flex-1 items-center'>
                        <BsCardImage className='mr-2' />
                        <RiFileGifLine className='mr-2' />
                        <RiBarChartHorizontalFill className='mr-2' />
                        <BsEmojiSmile className='mr-2' />
                        <IoMdCalendar className='mr-2' />
                        <MdOutlineLocationOn className='mr-2' />
                        </div>
                        <button type='submit' className={`px-6 py-2 rounded-3xl font-bold ${tweetMessage ? `bg-[#1d9bf0] text-white` : 'bg-[#196195] text-[#95999e]'}`}>Tweet</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TweetBox