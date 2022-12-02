import Card from '../Card'
import { IoIosAdd } from 'react-icons/io'

import Table from '../Table'

import DBS from '../../img/DBS.png'
import MDBS from '../../img/mdbs.png'
import Proudfoot from '../../img/Proudfoot.png'
import MProudfoot from '../../img/mprod.png'
import RMI from '../../img/RMI.png'
import MRMI from '../../img/mrmi.png'
import PP from '../../img/PP.png'

const list = [
  {
    logo: DBS,
    mlogo: MDBS,
    title: 'DBS Bank',
    approvalName: 'DBS DEG renewal energy LinkedIn post tiles...',
    client: {
      pic: '',
      background: 'bg-[#FE0000B0]',
      name: 'Jasmine',
    },
    owner: {
      pic: PP,
      name: 'Radhika'
    },
    date: 'January 23, 2022',
    status: {
      name: 'In progress',
      background: 'bg-[#FCE513]'
    },
    description: 'DBS Bank Limited is a Singaporean multinational banking and financial services corporation headquartered at the Marina Bay Financial Centre in the Marina Bay district of Singapore.',
  },
  {
    logo: Proudfoot,
    mlogo: MProudfoot,
    title: 'Proudfoot',
    approvalName: 'PF website mining and metals edit',
    client: {
      pic: '',
      background: 'bg-[#3B4256]',
      name: 'Lorena',
    },
    owner: {
      pic: PP,
      name: 'Radhika'
    },
    date: 'January 23, 2022',
    status: {
      name: '1st revision',
      background: 'bg-[#F4B000]'
    },
    description: 'Proudfoot engages teams and leadership, at all levels, to create innovative solutions to operational constraints and solve the people challenge associated with making sure that change takes place.',
  },
  {
    logo: RMI,
    mlogo: MRMI,
    title: 'RMI',
    approvalName: 'RMI January newsletter EDM',
    client: {
      pic: '',
      background: 'bg-[#FE005B]',
      name: 'Mervyn',
    },
    owner: {
      pic: PP,
      name: 'Radhika'
    },
    date: 'January 23, 2022',
    status: {
      name: '2nd revision',
      background: 'bg-[#F47500]'
    },
    description: 'RMI is a trusted global verification partner for Asia-Pacific organisations, offering a highly personalised and comprehensive background screening service.',
  }
]

const Content = () => {
  return (
    <div style={{ width: 'calc(100% - 295px)', marginLeft: '295px', marginTop: '65px' }} className="pl-8 pt-8 pr-9 text-left bg-slate-100">
      <h1 className="font-bold leading-7 text-[#323A46] text-[28px]">Hi Radhika, welcome back!</h1>
      <p className="mt-11 font-bold text-xl leading-7 text-[#323A46]">Your client list</p>
      <p className="font-normal text-sm leading-5 text-[#323A46]">You currently servicing 3 clients</p>
      <div className="flex flex-row items-center mt-6">
        {list.map((item, index) => (
          <div className='mr-3.5'>
            <Card key={`${item.title}-index`} {...item} />
          </div>
        ))}
      </div>
      <div className='mt-14'>
        <div className='flex direction-row items-center justify-between'>
          <div>
            <p className='font-bold text-xl leading-7'>Recent approvals</p>
            <p className='text-normal text-sm leading-5'>You can find the recent on-going approvals here</p>
          </div>
          <button className='flex items-center py-1.5 px-6 rounded-[53px] bg-[#1E67AF] text-white'>
            <IoIosAdd className='color-white w-3.5 h-3.5' />
            <p className='font-bold text-base ml-2.5'>Create new approval</p>
          </button>
        </div>
      </div>
      <div className='mt-6'>
        <Table data={list} />
      </div>
      <div className='mt-4'>
        <p className='font-bold text-base leading-5 text-[#1E67AF]'>See all approvals here</p>
      </div>
      <div className='mt-14 mb-6 flex justify-end'>
        <p className='font-normal text-sm leading-5 text-[#484848]'>© Manning&Co. 2022</p>
      </div>
    </div>
  )
}

export default Content
