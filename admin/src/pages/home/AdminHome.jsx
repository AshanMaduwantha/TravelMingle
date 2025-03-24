import React from 'react'
import HotelTable from '../../components/hotelTable/HotelTable'
import Sidebar from '../../components/sideBar/SideBar'


function AdminHome() {
  return (
    <div>
      <Sidebar />
      <HotelTable />
    </div>
  )
}

export default AdminHome