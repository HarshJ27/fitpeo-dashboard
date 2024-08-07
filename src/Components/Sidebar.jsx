import React from 'react'

const Sidebar = () => {
  return (
    <div className="w-20 bg-gray-800 p-4 h-full flex flex-col">
      {/* Add Sidebar Items Here */}
      <div className="text-2xl mt-2 ml-2">
        <div className='flex'>
                <div className='bg-blue-500 border rounded-t-lg w-4 h-4 rounded-br-lg border-0 '></div>
                <div className='bg-blue-500 border rounded-b-lg w-4 h-4 rounded-tr-lg border-0 '></div>
        </div>
        <div className='flex'>
                <div className='bg-blue-500 border rounded-t-lg w-4 h-4 rounded-bl-lg border-0 '></div>
                <div className='bg-blue-500 border rounded-b-lg w-4 h-4 rounded-tl-lg border-0 '></div>
        </div>
      </div>

      <div className='flex flex-col gpy-y-4 mt-20 cursor-pointer ml-2'>

        <span className='border border-l-4 border-r-0 border-t-0 border-b-0 border-blue-500 -ml-2'><svg class="h-8 w-8 text-blue-500 ml-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg></span>
        <span className='hover:border hover:border-l-4 mt-8 hover:border-r-0 hover:border-t-0 hover:border-b-0 hover:border-blue-500 -ml-2 group'><svg class="h-8 w-8 text-gray-500 group-hover:text-blue-500 ml-2 "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="2" />  <line x1="9" y1="4" x2="9" y2="20" /></svg></span>
        <span className='hover:border hover:border-l-4 mt-8 hover:border-r-0 hover:border-t-0 hover:border-b-0 hover:border-blue-500 -ml-2 group'><svg class="h-8 w-8 text-gray-500 group-hover:text-blue-500 ml-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />  <rect x="9" y="3" width="6" height="4" rx="2" />  <path d="M9 14l2 2l4 -4" /></svg></span>
        <span className='hover:border hover:border-l-4 mt-8 hover:border-r-0 hover:border-t-0 hover:border-b-0 hover:border-blue-500 -ml-2 group'><svg class="h-8 w-8 text-gray-500 group-hover:text-blue-500 ml-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="7" width="18" height="13" rx="2" />  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />  <line x1="12" y1="12" x2="12" y2="12.01" />  <path d="M3 13a20 20 0 0 0 18 0" /></svg></span>
        <span className='hover:border hover:border-l-4 mt-8 hover:border-r-0 hover:border-t-0 hover:border-b-0 hover:border-blue-500 -ml-2 group'><svg class="h-8 w-8 text-gray-500 group-hover:text-blue-500 ml-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg></span>

      </div>
      <div className="mt-auto flex items-center space-x-3">
      <svg class="h-8 w-8 text-gray-500 ml-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M7 12h14l-3 -3m0 6l3 -3" /></svg>
      </div>
    </div>
  )
}

export default Sidebar