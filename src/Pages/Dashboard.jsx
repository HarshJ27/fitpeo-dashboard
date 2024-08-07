import React from 'react'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'
import Stats from '../Components/Stats'
import Activity from '../Components/Activity'
import RecentOrders from '../Components/RecentOrders'
import Feedback from '../Components/Feedback'
import RightSide from '../Components/RightSide'

const Dashboard = () => {
    return (
        <div className='flex h-screen bg-gray-900 text-white'>
            {/* Sidebar */}
            <div className='fixed h-full'>
                <Sidebar />
            </div>
            
            <div className='flex flex-col w-full ml-20'> {/* Adjust margin to match sidebar width */}
                {/* Header */}
                <div className='fixed w-full z-10'>
                    <Header />
                </div>
                
                {/* Main Content */}
                <div className='flex flex-col mt-16 overflow-y-auto h-full p-4'>
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='col-span-2'>
                            <Stats />
                            <Activity />
                            <RecentOrders/>
                        </div>
                        <div className='mt-[65px]'>
                            <RightSide />
                        </div>
                    </div>
               
                </div>
            </div>
        </div>
    )
}

export default Dashboard
