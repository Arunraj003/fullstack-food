import React from 'react'
import DBHeader from './DBHeader'
import { Route, Routes } from 'react-router-dom'
import DBHome from './DBHome'
import DBOrders from './DBOrders'
import DBNewItem from './DBNewItem'
import DBItems from './DBItems'
import DBUsers from './DBUsers'

const DBRightSection = () => {
  return (
    <div className='flex flex-col py-12 px-12 flex-1 h-full'>
        <DBHeader />
        <div className='flex flex-1 flex-col overflow-x-scroll scrollbar-none'>
            <Routes>
                <Route path="/home" element={<DBHome />}/>
                <Route path="/orders" element={<DBOrders />}/>
                <Route path="/items" element={<DBItems />}/>
                <Route path="/newItem" element={<DBNewItem />}/>
                <Route path="/users" element={<DBUsers />}/>
            </Routes>
        </div>
    </div>
  )
}

export default DBRightSection