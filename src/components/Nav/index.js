import { AppBar, Drawer } from "@mui/material"
import { FaBars } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { IoSearchOutline } from 'react-icons/io5'

import MCLogo from '../../img/MC.png'

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
        }}
      >
        <div className="h-16 flex flex-row justify-between items-center bg-white shadow-[2px_2px_4px_rgba(0, 0, 0, 0.05)]">
          <div className="ml-8 flex flex-row items-center">
            <IoSearchOutline className="w-4 h-4 mr-2.5 text-[#505050]" />
            <input className="text-sm text-[#A1A1A1] font-normal focus:outline-none" placeholder="Search for anything here..." />
          </div>
          <div className="mr-9 flex flex=row items-center">
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
          width: drawerWidth
        }}
      >
        <div style={{ width: drawerWidth }}>
          <div className="h-16 bg-[#1E67AF] flex items-center shadow-[2px_2px_4px_rgba(0, 0, 0, 0.05)]">
            <div className="ml-6">
              <img src={MCLogo} alt="Manning&Co Logo" className="w-52 h-5"/>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default Nav
