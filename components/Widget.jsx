import { news, whoToFollow } from '../lib/static'
import { BiSearch } from 'react-icons/bi'

const Widget = () => {
  return (
    <div className='hidden md:flex flex-col flex-[1]  p-4`'>
      <div className='flex items-center bg-[#243340] p-2 rounded-3xl'>
        <BiSearch className='text-[#8899a6] mr-2`' />
        <input type="text"
        placeholder='Search Twitter'
        className='bg-transparent outline-none' />
      </div>
      <div className='bg-[#192734] my-6 rounded-xl overflow-hidden'>
        <div className='font-bold text-lg p-2'>What's happening</div>
        {news.map((item,index) => (
          <div key={index} className='flex items-center p-3 my-2 hover:bg-[#22303c] cursor-pointer' >
            <div className='flex-1'>
              <div className='text-[#8899a6] text-xs font-semibold'>{item.category}</div>
              <div className='text-sm font-bold'>{item.title}</div>
            </div>
            <div className='w-1/5 ml-3'>
              <img src={item.image} alt={item.category} className='rounded-xl h-14 w-14 object-cover'/>
            </div>
          </div>
        ))}
        <div className='p-2 text-[#1d9bf0] text-sm cursor-pointer hover:bg-[#22303c]'>Show more</div>
      </div>
      <div className='bg-[#192734] my-6 rounded-xl overflow-hidden'>
        <div className='p-2 font-bold text-lg'>Follow me</div>
        {whoToFollow.map((item, index) => (
          <div key={index} className='flex items-center p-3 my-2 hover:bg-[#22303c] cursor-pointer'>
            <div className='w-1/6'>
              <img src={item.avatar} alt={item.handle} className='rounded-full h-[40px] w-[40px]' />
            </div>
            <div>
              <div className='font-bold'>{item.name}</div>
              <div className='text-[#8899a6]'>{item.handle}</div>
            </div>
            <div className='bg-white text-black px-3 py-1 rounded-full text-xs font-bold'>Follow</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Widget