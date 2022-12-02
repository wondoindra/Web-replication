import { FiMoreHorizontal } from 'react-icons/fi'

const Card = ({
  logo,
  title,
  description,
}) => {
  return (
    <div className="pl-5 pr-2.5 pt-1.5 pb-2 rounded w-[256px] h-[184px] bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.05)]">
      <div className='flex justify-between max-h-12 h-full'>
        <div className='text-left  flex items-center max-w-[169px]'>
          <img src={logo} alt="Card logo" className="object-none max-h-12 " />
        </div>
        <FiMoreHorizontal className='w-5 h-5' />
      </div>
      <p className='mt-2 mb-1.5 font-bold text-base leading-5 text-[#323A46]'>{title}</p>
      <div className='h-[84px] h-full'>
         <p className='font-normal text-[11px] leading-4'>{description}</p>
      </div>
    </div>
  )
}

export default Card
