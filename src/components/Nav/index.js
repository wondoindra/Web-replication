import { AppBar, Drawer, Divider } from "@mui/material"
import { FaBars } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { BiFileFind } from 'react-icons/bi'
import { IoSearchOutline } from 'react-icons/io5'
import { MdOutlineDashboard } from 'react-icons/md'
import { RiAccountPinBoxLine, RiSettings4Line } from 'react-icons/ri'

import MCLogo from '../../img/MC.png'
import PP from '../../img/PP.png'

const Nav = () => {
  const drawerWidth = 295
  const appbarHeight = 65

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          height: appbarHeight,
          backgroundColor:'white',
        }}
      >
        <div className="h-16 flex flex-row justify-between items-center bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.05)]">
          <div className="ml-8 flex flex-row items-center">
            <IoSearchOutline className="w-4 h-4 mr-2.5 text-[#505050]" />
            <input className="text-sm text-[#A1A1A1] font-normal focus:outline-none" placeholder="Search for anything here..." />
          </div>
          <div className="mr-9 flex flexirow items-center">
            <FiLogOut className="w-4 h-4 text-[#EE0D0D]" />
            <p className="text-[#EE0D0D] font-bold text-base ml-3 mr-6">Logout</p>
            <FaBars className="w-6 h-5 text-[#323A46]" />
          </div>
        </div>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
        }}
      >
        <div style={{ width: drawerWidth }}>
          <div className="h-16 bg-[#1E67AF] flex items-center shadow-[2px_2px_4px_rgba(0,0,0,0.05)]">
            <div className="ml-6">
              <img src={MCLogo} alt="Manning&Co Logo" className="w-52 h-5"/>
            </div>
          </div>
          <div className="px-7 pt-14 text-left">
            <img src={PP} alt="Avatar" className="w-16 h-16" />
            <p className="mt-3 font-bold text-base leading-5 text-[#323A46]">Radhika Dhawan Puri</p>
            <p className="mb-7 font-normal text-sm text-[#323A46]">Senior Client Services</p>
            <Divider />
            <p className="mt-7 text-xs font-normal leading-4 tracking-[.16em] text-[#323A46]">NAVIGATION</p>
            <div className="flex flex-row items-center mt-3 mb-2.5">
              <MdOutlineDashboard className="w-5 h-5 text-[#323A46]" />
              <p className="ml-3 font-bold text-base leading-5 text-[#1E67AF]">Dashboard</p>
            </div>
            <div className="flex flex-row items-center mb-11">
              <BiFileFind className="h-5 w-5 text-[#323A46]" />
              <p className="ml-3 font-bold text-base leading-5 text-[#323A46]">Approvals</p>
            </div>
            <Divider />
            <p className="mt-7 text-xs font-normal leading-4 tracking-[.16em] text-[#323A46]">MY ACCOUNT</p>
            <div className="flex flex-row items-center mt-3 mb-2.5">
              <RiAccountPinBoxLine className="w-5 h-5 text-[#323A46]" />
              <p className="ml-3 font-bold text-base leading-5 text-[#323A46]">My clients</p>
            </div>
            <div className="flex flex-row items-center">
              <RiSettings4Line className="w-5 h-5 text-[#323A46]" />
              <p className="ml-3 font-bold text-base leading-5 text-[#323A46]">Edit profiles</p>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default Nav
