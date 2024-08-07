import React from 'react'
import Feedback from './Feedback';

const RightSide = () => {
    const percentage = 70
    const angle = (percentage / 100) * 360;

    return (
        <div>
            {/*  Net Proofit top */}
            <div className='bg-gray-800 p-4 rounded-md'>
                <div className='flex justify-between'>

                    <div className='flex flex-col'>
                        <p className='text-gray-200'>Net Profit</p>
                        <div className='flex mt-4 justify-between'>
                            <div className='text-3xl font-bold'>$ 6759.25</div>
                        </div>

                    </div>

                    <div className=''>

                        <div className="relative w-28 h-28 flex items-center justify-center ">
                            <div className="absolute w-full h-full rounded-full bg-gray-200"></div>
                            <div
                                className="absolute w-full h-full rounded-full transform rotate-90 "
                                style={{
                                    background: `conic-gradient(blue ${angle}deg, #E5E7EB ${angle}deg)`
                                }}
                            ></div>
                            <div className="absolute w-20 h-20 bg-gray-800  rounded-full flex items-center justify-center">
                                <div className='flex flex-col justify-center items-center itext-center'>
                                    <span className="text-gray-200 text-xl font-bold text-md">{percentage}%</span>
                                    <span className='text-xs text-center'>Goal Completed</span>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                {/* <span className='text-green-500 '>3%</span> */}

            </div>


            {/* Goals */}

            <div className='bg-gray-800  mt-5  rounded-md p-6'>

                <div className='flex flex-col gap-y-10'>
                    {/* 1 */}
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <span>
                                <svg className="h-12 w-12 text-orange-500 bg-red-300 p-2 rounded-full" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx="12" cy="12" r="1" />
                                    <circle cx="12" cy="12" r="5" />
                                    <circle cx="12" cy="12" r="9" />
                                </svg>
                            </span>
                            <span className='ml-4 text-xl font-bold'>Goals</span>
                        </div>
                        <div>
                            <svg className="h-8 w-8 text-gray-200 bg-gray-500 rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </div>
                    </div>


                    {/* 2nd */}

                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <span>
                                <svg class="h-12 w-12 text-blue-900 bg-blue-400 rounded-full p-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 6h10a1 1 0 0 1 1 1v8a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4v-8a1 1 0 0 1 1 -1" />  <path d="M16 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2" /></svg>
                            </span>
                            <span className='ml-4 text-xl font-bold '>Popular Dishes</span>
                        </div>
                        <div>
                            <svg className="h-8 w-8 text-gray-200 bg-gray-500 rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </div>
                    </div>


                    {/* 3rd */}

                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <span>
                                <svg class="h-12 w-12 text-teal-700 bg-teal-300 rounded-full p-2 " width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />  <rect x="9" y="3" width="6" height="4" rx="2" />  <line x1="9" y1="12" x2="9.01" y2="12" />  <line x1="13" y1="12" x2="15" y2="12" />  <line x1="9" y1="16" x2="9.01" y2="16" />  <line x1="13" y1="16" x2="15" y2="16" /></svg>
                            </span>
                            <span className='ml-4 text-xl font-bold'>Goals</span>
                        </div>
                        <div>
                            <svg className="h-8 w-8 text-gray-200 bg-gray-500 rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </div>
                    </div>




                </div>


            </div>



            {/*  customer Feedback */}
            <div className='mt-6 bg-gray-800 p-2 rounded-md'>
                <h3 className="text-lg font-bold mb-2">Customer's Feedback</h3>
                <div>
                <Feedback />

                </div>
             
            </div>




        </div>
    )
}

export default RightSide