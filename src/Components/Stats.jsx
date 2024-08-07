import React from 'react'

const Stats = () => {

   

    return (

        <div className=''>
            <div className=''>
                <h1 className='py-4 font-bold text-2xl'>Dashboard</h1>
                <div className="flex flex-wrap gap-4 w-full">
                    <div className="bg-gray-800 pl-3 pr-16 py-4 rounded-lg  flex items-center justify-between">
                        <div>
                            <span className=''><svg class="h-8 w-8 text-blue-900 bg-blue-600 rounded-md p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg></span>
                            <h3 className="text-lg mt-2 font-semibold">Total Orders</h3>
                            <div className='flex items-center justify-between'>
                                <p className="text-2xl">75</p>
                                <span className="text-green-500">3%</span>
                            </div>

                        </div>

                    </div>
                    <div className="bg-gray-800 pl-3 pr-16 py-4 rounded-lg  flex items-center justify-between">
                        <div>
                            <span className=''><svg class="h-8 w-8 text-green-900 bg-green-600 rounded-md p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg></span>
                            <h3 className="text-lg mt-2 font-semibold">Total Delivered</h3>
                            <div className='flex items-center justify-between'>
                                <p className="text-2xl">70</p>
                                <span className="text-red-500">3%</span>
                            </div>

                        </div>

                    </div>
                    <div className="bg-gray-800 pl-2 pr-16 py-4 rounded-lg  flex items-center justify-between">
                        <div>
                            <span className=''><svg class="h-8 w-8 text-red-900 bg-red-500 rounded-md p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg></span>
                            <h3 className="text-lg mt-2 font-semibold">Total Cancelled</h3>
                            <div className='flex items-center justify-between'>
                                <p className="text-2xl">05</p>
                                <span className="text-green-500">+3%</span>
                            </div>

                        </div>

                    </div>
                    <div className="bg-gray-800 pl-2 pr-16 py-4 rounded-lg  flex items-center justify-between">
                        <div>
                            <span className=''><svg class="h-8 w-8 text-pink-900 bg-pink-600 rounded-md p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            </span>
                            <h3 className="text-lg mt-2 font-semibold">Total Revenue</h3>
                            <div className='flex items-center justify-between'>
                                <p className="text-2xl">$12k</p>
                                <span className="text-red-500">+3%</span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


          

        </div>
    )
}

export default Stats